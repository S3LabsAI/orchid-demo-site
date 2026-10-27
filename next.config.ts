import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Team photos and carrier logos are served from the current GoDaddy site's CDN.
    remotePatterns: [{ protocol: "https", hostname: "img1.wsimg.com", pathname: "/isteam/ip/**" }],
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
