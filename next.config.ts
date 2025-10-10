const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? "/dsmbc" : "",
  assetPrefix: isProd ? "/dsmbc/" : "",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: isProd ? "/dsmbc" : "",
  },
};

export default nextConfig;
