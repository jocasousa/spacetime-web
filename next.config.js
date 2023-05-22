/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "192.168.0.114"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
