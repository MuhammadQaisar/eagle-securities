/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
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
