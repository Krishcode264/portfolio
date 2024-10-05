/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "social-sphere-chi.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "www.linkedin.com",
      },
      {
        protocol: "https",
        hostname: "fanciful-lily-b388c8.netlify.app",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|flac)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/sounds/",
          publicPath: "/_next/static/sounds/",
        },
      },
    });

    return config;
  },
};
export default nextConfig;
