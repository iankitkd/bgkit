import { spawn, spawnSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright";
import sharp from "sharp";

const WIDTH = 320;
const HEIGHT = 180;
const PORT = Number(process.env.THUMBNAIL_PORT ?? 4173);
const HOST = "127.0.0.1";
let baseUrl = process.env.THUMBNAIL_BASE_URL ?? `http://${HOST}:${PORT}`;
const OUTPUT_DIR = path.join(process.cwd(), "public", "thumbnails");

let serverProcess;

async function waitForServer(url) {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < 60_000) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) {
        return response;
      }
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 750));
  }

  throw new Error(`Timed out waiting for ${url}: ${lastError?.message ?? "unknown error"}`);
}

async function canUseServer(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);

  try {
    const response = await fetch(`${url}/api/thumbnail-slugs`, {
      cache: "no-store",
      signal: controller.signal,
    });
    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function findExistingServer() {
  if (process.env.THUMBNAIL_BASE_URL) {
    return true;
  }

  for (const url of [`http://${HOST}:3000`, "http://localhost:3000"]) {
    if (await canUseServer(url)) {
      baseUrl = url;
      console.log(`Using existing Next server at ${baseUrl}`);
      return true;
    }
  }

  return false;
}

function startServer() {
  if (process.env.THUMBNAIL_BASE_URL) {
    return;
  }

  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  const args = ["run", "dev", "--", "--hostname", HOST, "--port", String(PORT)];

  serverProcess = spawn(command, args, {
    cwd: process.cwd(),
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: "1",
    },
    shell: process.platform === "win32",
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  });

  serverProcess.stdout.on("data", (chunk) => {
    process.stdout.write(`[next] ${chunk}`);
  });

  serverProcess.stderr.on("data", (chunk) => {
    process.stderr.write(`[next] ${chunk}`);
  });

  serverProcess.on("exit", (code) => {
    if (code !== null && code !== 0) {
      process.stderr.write(`[next] exited with code ${code}\n`);
    }
  });
}

function stopServer() {
  if (!serverProcess || serverProcess.killed) {
    return;
  }

  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(serverProcess.pid), "/T", "/F"], {
      stdio: "ignore",
    });
    return;
  }

  serverProcess.kill();
}

async function getBackgrounds() {
  const response = await waitForServer(`${baseUrl}/api/thumbnail-slugs`);
  const payload = await response.json();

  if (!Array.isArray(payload.backgrounds)) {
    throw new Error("Thumbnail manifest did not return a backgrounds array.");
  }

  return payload.backgrounds;
}

async function captureThumbnails(backgrounds) {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
  });

  try {
    for (const [index, background] of backgrounds.entries()) {
      const url = `${baseUrl}/thumbnail/${background.slug}`;
      const outputPath = path.join(OUTPUT_DIR, `${background.slug}.webp`);

      // await page.goto(url, { waitUntil: "networkidle" });
      await page.goto(url);
      await page.waitForSelector("[data-thumbnail-root]");
      await page.waitForFunction(() => document.fonts.status === "loaded");
      await page.waitForTimeout(300);

      const screenshot = await page.locator("[data-thumbnail-root]").screenshot({
        type: "png",
        // animations: "disabled",
      });
      // await page.locator("[data-thumbnail-root]").screenshot({
      //   path: outputPath,
      //   type: "webp",
      // });
      await sharp(screenshot).webp({ quality: 100 }).toFile(outputPath);

      console.log(
        `${String(index + 1).padStart(2, "0")}/${backgrounds.length} ${background.slug}.webp`,
      );
    }
  } finally {
    await browser.close();
  }
}

async function main() {
  const hasExistingServer = await findExistingServer();

  if (!hasExistingServer) {
    startServer();
  }

  try {
    const backgrounds = await getBackgrounds();
    await captureThumbnails(backgrounds);
    console.log(`Generated ${backgrounds.length} thumbnails in ${OUTPUT_DIR}`);
  } finally {
    stopServer();
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    stopServer();
    console.error(error);
    process.exit(1);
  });
