import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/challenge_1",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
