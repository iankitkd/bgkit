export interface BackgroundItem {
  slug: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  /** Key into BACKGROUND_COMPONENTS map — no direct React import needed in data */
  componentName: string;
  tags?: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  count: number;
}
