import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig: NextConfig = {
  ...(isExport && { output: 'export' }), // <=== enables static exports during prod build - else default
};

module.exports = nextConfig;

export default nextConfig;
