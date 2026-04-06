import type { NextConfig } from "next";

const OPERATIONAL_ORIGIN = process.env.OPERATIONAL_ORIGIN || "https://rtp-ai-orbiter.lovable.app";

const nextConfig: NextConfig = {
  async rewrites() {
    const operationalRoutes = [
      "/automatizacion-ia-navarra",
      "/en/automatizacion-ia-navarra",
      "/contact-success",
      "/en/contact-success",
      "/reservar",
      "/en/reservar",
      "/admin/login",
      "/admin/leads",
      "/admin/appointments",
    ];

    return {
      beforeFiles: operationalRoutes.map((source) => ({
        source,
        destination: `${OPERATIONAL_ORIGIN}${source}`,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
