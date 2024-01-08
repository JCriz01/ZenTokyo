/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/s/files/1/0849/6604/8032/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
