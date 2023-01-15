export type Link = {
  href: string;
  title: string;
};

export type Config = {
  avatarUrl: string;
  siteName: string;
  siteTitle?: string;
  siteDescription?: string;
  logoLightUrl?: string;
  logoDarkUrl?: string;
  logoWidth?: string;
  links: Link[];
  showLinkFavicons?: boolean;
};
