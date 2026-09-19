import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  basePath: "/dsmbc",
  assetPrefix: "/dsmbc/",
};

export default nextConfig;
