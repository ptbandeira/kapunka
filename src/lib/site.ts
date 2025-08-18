export type SiteConfig = {
  brandName: string;
  logo?: string;
  social?: { instagram?: string; facebook?: string; x?: string };
  images?: { hero?: string; product?: string };
};

export type ThemeConfig = {
  colors: {
    kapunkaSageLight: string;
    kapunkaSageMedium: string;
    kapunkaTaupe: string;
    kapunkaCharcoal: string;
  };
};

export async function getSiteConfig(): Promise<SiteConfig> {
  const site = (await import('@/config/site.json')).default as SiteConfig;
  return site;
}

export async function getThemeConfig(): Promise<ThemeConfig> {
  const theme = (await import('@/config/theme.json')).default as ThemeConfig;
  return theme;
}
