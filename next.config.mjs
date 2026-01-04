/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  allowedDevOrigins: ['http://192.168.100.10:3000'], // Added to suppress CORS warning
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { not: /\.(css|scss|sass)$/ },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
