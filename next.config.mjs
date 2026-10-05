/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/espanol-plus",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

export default nextConfig;
