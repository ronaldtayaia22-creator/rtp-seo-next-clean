import type { NextConfig } from "next";

const OPERATIONAL_ORIGIN = process.env.OPERATIONAL_ORIGIN || "https://rtp-ai-orbiter.lovable.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.rtpdigitalsolutions.es' }],
        destination: 'https://rtpdigitalsolutions.es/:path*',
        permanent: true,
      },
      { source: '/en/diagnostico-ia-navarra', destination: '/en/diagnosis-ai-navarra', permanent: true },
      { source: '/en/automatizacion-ia-navarra', destination: '/en/ai-automation-navarra', permanent: true },
      { source: '/en/casos-ia-navarra', destination: '/en/ai-cases-navarra', permanent: true },
      { source: '/en/agentes-ia-atencion-cliente-navarra', destination: '/en/ai-customer-service-agents-navarra', permanent: true },
      { source: '/en/automatizacion-procesos-empresas-navarra', destination: '/en/business-process-automation-navarra', permanent: true },
      { source: '/en/agentes-voz-telefonicos-empresas', destination: '/en/voice-agents-business', permanent: true },
      { source: '/en/rag-base-conocimiento-empresas', destination: '/en/rag-knowledge-base-business', permanent: true },
      { source: '/en/consultoria-inteligencia-artificial-navarra', destination: '/en/ai-consulting-navarra', permanent: true },
      { source: '/en/desarrollo-web-inteligencia-artificial', destination: '/en/web-development-artificial-intelligence', permanent: true },
      { source: '/en/ia-empresas-navarra', destination: '/en/ai-business-navarra', permanent: true },
      { source: '/en/ia-empresas-pamplona', destination: '/en/ai-business-pamplona', permanent: true },
      { source: '/en/ia-restaurantes-navarra', destination: '/en/ai-restaurants-navarra', permanent: true },
      { source: '/en/ia-comercios-navarra', destination: '/en/ai-retail-navarra', permanent: true },
      { source: '/en/ia-clinicas-navarra', destination: '/en/ai-clinics-navarra', permanent: true },
      { source: '/en/inteligencia-artificial-navarra', destination: '/en/artificial-intelligence-navarra', permanent: true },
      { source: '/en/blog/que-es-un-agente-ia', destination: '/en/blog/what-is-an-ai-agent', permanent: true },
      { source: '/en/blog/chatbot-vs-agente-ia', destination: '/en/blog/chatbot-vs-ai-agent', permanent: true },
      { source: '/en/blog/agentes-ia-empresas-navarra', destination: '/en/blog/ai-agents-business-navarra', permanent: true },
      { source: '/en/blog/automatizacion-empresas-navarra', destination: '/en/blog/business-automation-navarra', permanent: true },
      { source: '/en/blog/agentes-ia-para-paginas-web-navarra', destination: '/en/blog/ai-agents-for-websites-navarra', permanent: true },
      { source: '/en/blog/ia-para-clinicas-navarra', destination: '/en/blog/ai-for-clinics-navarra', permanent: true },
      { source: '/en/blog/ia-para-restaurantes-navarra', destination: '/en/blog/ai-for-restaurants-navarra', permanent: true },
      { source: '/en/blog/ia-para-comercios-navarra', destination: '/en/blog/ai-for-retail-navarra', permanent: true },
      { source: '/en/blog/chatbots-empresas-navarra', destination: '/en/blog/chatbots-business-navarra', permanent: true },
      { source: '/en/blog/automatizar-atencion-cliente-ia', destination: '/en/blog/automate-customer-service-ai', permanent: true },
      { source: '/en/blog/cuanto-cuesta-inteligencia-artificial-navarra', destination: '/en/blog/how-much-does-artificial-intelligence-cost-navarra', permanent: true },
      { source: '/en/blog/ejemplos-inteligencia-artificial-empresas-navarra', destination: '/en/blog/artificial-intelligence-examples-business-navarra', permanent: true },
      { source: '/en/blog/beneficios-inteligencia-artificial-empresas-navarra', destination: '/en/blog/artificial-intelligence-benefits-business-navarra', permanent: true },
      { source: '/en/blog/como-implementar-inteligencia-artificial-empresa-navarra', destination: '/en/blog/how-to-implement-artificial-intelligence-business-navarra', permanent: true },
      { source: '/en/blog/ia-2026-empresas-navarra-espana-europa-contexto', destination: '/en/blog/ai-2026-business-navarra-spain-europe-context', permanent: true },
      { source: '/en/blog/ia-2026-empresas-navarra-espana-europa-hoja-ruta', destination: '/en/blog/ai-2026-business-navarra-spain-europe-roadmap', permanent: true },
      { source: '/blog/ia-2026-espana-europa-contexto-regulatorio', destination: '/blog/ia-2026-empresas-navarra-espana-europa-contexto', permanent: true },
      { source: '/blog/ia-2026-espana-europa-hoja-ruta-empresa', destination: '/blog/ia-2026-empresas-navarra-espana-europa-hoja-ruta', permanent: true },
      { source: '/en/blog/ai-2026-spain-europe-regulatory-context', destination: '/en/blog/ai-2026-business-navarra-spain-europe-context', permanent: true },
      { source: '/en/blog/ai-2026-spain-europe-business-roadmap', destination: '/en/blog/ai-2026-business-navarra-spain-europe-roadmap', permanent: true },
      { source: '/category/ia-negocios', destination: '/inteligencia-artificial-navarra', permanent: true },
      { source: '/category/ia-negocios/', destination: '/inteligencia-artificial-navarra', permanent: true },
      { source: '/contact', destination: '/diagnostico-ia-navarra', permanent: true },
      { source: '/contact/', destination: '/diagnostico-ia-navarra', permanent: true },
      { source: '/en/contact', destination: '/en/diagnosis-ai-navarra', permanent: true },
      { source: '/en/contact/', destination: '/en/diagnosis-ai-navarra', permanent: true },
      { source: '/author/:path*', destination: '/blog', permanent: true },
      { source: '/en/author/:path*', destination: '/en/blog', permanent: true },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/automatizacion-ia-navarra",
          destination: `${OPERATIONAL_ORIGIN}/automatizacion-ia-navarra`,
        },
        {
          source: "/en/ai-automation-navarra",
          destination: `${OPERATIONAL_ORIGIN}/en/ai-automation-navarra`,
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
          destination: `${OPERATIONAL_ORIGIN}/admin`,
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
