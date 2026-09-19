import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/dsmbc" : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isProd && {
    basePath,
    assetPrefix: `${basePath}/`,
  }),
};

export default nextConfig;
