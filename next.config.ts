import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is enabled by default in Next.js 16.
  // Explicitly declare an empty turbopack config to suppress the webpack warning,
  // and configure its file watcher to ignore SQLite DB files and prevent reload loops.
  turbopack: {},
};

export default nextConfig;
