/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.react-photo-album.com",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
