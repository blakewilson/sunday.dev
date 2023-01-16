import config from "./config.mjs";

const domainsFromLinks = new Set(
  config.links.map((link) => new URL(link.href).hostname)
);

/**
 * @type {import('next').NextConfig}
 */
export default {
  images: {
    domains: [...domainsFromLinks],
  },
};
