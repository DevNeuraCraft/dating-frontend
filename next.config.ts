import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ru1.storage.beget.cloud",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
