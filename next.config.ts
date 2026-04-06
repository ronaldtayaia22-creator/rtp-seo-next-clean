import type { NextConfig } from "next";

const OPERATIONAL_ORIGIN = process.env.OPERATIONAL_ORIGIN || "https://rtp-ai-orbiter.lovable.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/automatizacion-ia-navarra",
          destination: `${OPERATIONAL_ORIGIN}/automatizacion-ia-navarra`,
        },
        {
          source: "/en/automatizacion-ia-navarra",
          destination: `${OPERATIONAL_ORIGIN}/en/automatizacion-ia-navarra`,
        },
        {
          source: "/contact-success",
          destination: `${OPERATIONAL_ORIGIN}/contact-success`,
        },
        {
          source: "/en/contact-success",
          destination: `${OPERATIONAL_ORIGIN}/en/contact-success`,
        },
        {
          source: "/reservar",
          destination: `${OPERATIONAL_ORIGIN}/reservar`,
        },
        {
          source: "/en/reservar",
          destination: `${OPERATIONAL_ORIGIN}/en/reservar`,
        },
        {
          source: "/admin",
          destination: `${OPERATIONAL_ORIGIN}/admin/login`,
        },
        {
          source: "/admin/:path*",
          destination: `${OPERATIONAL_ORIGIN}/admin/:path*`,
        },
        {
          source: "/assets/:path*",
          destination: `${OPERATIONAL_ORIGIN}/assets/:path*`,
        },
        {
          source: "/~flock.js",
          destination: `${OPERATIONAL_ORIGIN}/~flock.js`,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
