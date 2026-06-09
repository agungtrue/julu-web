import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Izinkan domain eksternal jika image Anda di-host di tempat lain
    // domains: ['digitaloceanspaces.com'], 
  },
};

export default nextConfig;
