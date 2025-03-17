import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* otras opciones de configuración */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
