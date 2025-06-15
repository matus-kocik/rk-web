import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com", // LinkedIn obrázky
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // Flaticon obrázky
      },
    ],
  },
};

export default nextConfig;