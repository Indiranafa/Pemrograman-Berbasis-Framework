/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
          protocol: "https",
          hostname: "down-my.img.susercontent.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "wondernoah.com",
          port: "",
          pathname: "/**",
        },
        {
        protocol: "https",
        hostname: "asset-a.grid.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "down-id.img.susercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.jakmall.id",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

module.exports = nextConfig;
