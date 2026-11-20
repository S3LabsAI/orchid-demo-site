import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Team photos and carrier logos are served from the current GoDaddy site's CDN.
    remotePatterns: [{ protocol: "https", hostname: "img1.wsimg.com", pathname: "/isteam/ip/**" }],
  },
  async redirects() {
    // The demo used to live at the root; keep links that were already shared working.
    return [
      { source: "/meet-the-team-1", destination: "/demo/meet-the-team-1", permanent: false },
      { source: "/contact", destination: "/demo/contact", permanent: false },
    ];
  },
  async rewrites() {
    // The design system is a self-contained HTML export in public/design-system/.
    return [{ source: "/design-system", destination: "/design-system/index.html" }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
