const fs = require("fs");
const path = require("path");

const BG_DIR = path.join(__dirname, "..", "src", "components", "backgrounds");

console.log("Starting color refactoring in components/backgrounds...");

if (!fs.existsSync(BG_DIR)) {
  console.error("Directory not found:", BG_DIR);
  process.exit(1);
}

const files = fs.readdirSync(BG_DIR);
let count = 0;

files.forEach((file) => {
  if (!file.endsWith(".tsx")) return;

  const filePath = path.join(BG_DIR, file);
  let content = fs.readFileSync(filePath, "utf-8");
  const original = content;

  // Hex color replacements
  content = content.replace(/#4ade80/g, "var(--bg-accent)");
  content = content.replace(/#22d3ee/g, "var(--bg-accent)");

  // Rgba replacements (both with and without space)
  content = content.replace(/rgba\(74,222,128,/g, "rgba(var(--bg-accent-rgb),");
  content = content.replace(/rgba\(74,\s*222,\s*128,/g, "rgba(var(--bg-accent-rgb),");
  content = content.replace(/rgba\(34,211,238,/g, "rgba(var(--bg-accent-rgb),");
  content = content.replace(/rgba\(34,\s*211,\s*238,/g, "rgba(var(--bg-accent-rgb),");

  // Tailwind class replacements for cyan/emerald colors to primary
  content = content.replace(/bg-cyan-300\/8/g, "bg-primary/8");
  content = content.replace(/bg-cyan-300\/10/g, "bg-primary/10");
  content = content.replace(/bg-cyan-300\/50/g, "bg-primary/50");
  content = content.replace(/bg-cyan-400\/10/g, "bg-primary/10");
  content = content.replace(/to-cyan-300\/10/g, "to-primary/10");
  content = content.replace(/via-cyan-300\/10/g, "via-primary/10");
  content = content.replace(/border-cyan-300\/10/g, "border-primary/10");
  content = content.replace(/border-cyan-300\/20/g, "border-primary/20");

  // Shadow colors with rgba
  content = content.replace(/rgba\(74,\s*222,\s*128,\s*0\.35\)/g, "rgba(var(--bg-accent-rgb), 0.35)");
  content = content.replace(/rgba\(74,\s*222,\s*128,\s*0\.45\)/g, "rgba(var(--bg-accent-rgb), 0.45)");
  content = content.replace(/rgba\(34,\s*211,\s*238,\s*0\.35\)/g, "rgba(var(--bg-accent-rgb), 0.35)");

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Refactored color properties in: ${file}`);
    count++;
  }
});

console.log(`Finished refactoring. Updated ${count} files.`);
