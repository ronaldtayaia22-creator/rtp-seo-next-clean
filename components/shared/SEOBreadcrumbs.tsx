import Link from './LocalizedLink';
import { ChevronRight, Home } from 'lucide-react';
import { useLangPrefix } from '@/lib/language-context';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const ROUTE_LABELS_ES: Record<string, string> = {
  '/': 'Inicio',
  '/servicios': 'Servicios',
  '/inteligencia-artificial-navarra': 'Inteligencia Artificial Navarra',
  '/casos-ia-navarra': 'Casos IA',
  '/diagnostico-ia-navarra': 'Diagnóstico IA',
  '/automatizacion-ia-navarra': 'Automatización IA',
  '/contact-success': 'Confirmación',
  '/agentes-ia-atencion-cliente-navarra': 'Agentes IA Atención al Cliente',
  '/automatizacion-procesos-empresas-navarra': 'Automatización de Procesos',
  '/agentes-voz-telefonicos-empresas': 'Agentes de Voz',
  '/rag-base-conocimiento-empresas': 'RAG Base de Conocimiento',
  '/consultoria-inteligencia-artificial-navarra': 'Consultoría IA',
  '/desarrollo-web-inteligencia-artificial': 'Desarrollo Web IA',
  '/ia-empresas-navarra': 'IA Empresas Navarra',
  '/ia-empresas-pamplona': 'IA Empresas Pamplona',
  '/ia-restaurantes-navarra': 'IA Restaurantes Navarra',
  '/ia-comercios-navarra': 'IA Comercios Navarra',
  '/ia-clinicas-navarra': 'IA Clínicas Navarra',
  '/automatizacion-empresas-navarra': 'Automatización Empresas Navarra',
  '/blog': 'Blog',
  '/blog/que-es-un-agente-ia': 'Qué es un agente de IA',
  '/blog/chatbot-vs-agente-ia': 'Chatbot vs Agente IA',
  '/blog/agentes-ia-empresas-navarra': 'Agentes IA empresas Navarra',
  '/blog/automatizacion-empresas-navarra': 'Automatización empresas Navarra',
  '/blog/agentes-ia-para-paginas-web-navarra': 'Agentes IA para webs',
  '/blog/ia-para-clinicas-navarra': 'IA para clínicas Navarra',
  '/blog/ia-para-restaurantes-navarra': 'IA para restaurantes Navarra',
  '/blog/ia-para-comercios-navarra': 'IA para comercios Navarra',
  '/blog/chatbots-empresas-navarra': 'Chatbots empresas Navarra',
  '/blog/automatizar-atencion-cliente-ia': 'Automatizar atención al cliente',
  '/legal-notice': 'Aviso Legal',
  '/privacy-policy': 'Política de Privacidad',
  '/terms-conditions': 'Términos y Condiciones',
};

const ROUTE_LABELS_EN: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/servicios': 'Services',
  '/inteligencia-artificial-navarra': 'Artificial Intelligence Navarra',
  '/casos-ia-navarra': 'AI Cases',
  '/diagnostico-ia-navarra': 'AI Diagnosis',
  '/automatizacion-ia-navarra': 'AI Automation',
  '/contact-success': 'Confirmation',
  '/agentes-ia-atencion-cliente-navarra': 'AI Customer Service Agents',
  '/automatizacion-procesos-empresas-navarra': 'Process Automation',
  '/agentes-voz-telefonicos-empresas': 'Voice Agents',
  '/rag-base-conocimiento-empresas': 'RAG Knowledge Base',
  '/consultoria-inteligencia-artificial-navarra': 'AI Consulting',
  '/desarrollo-web-inteligencia-artificial': 'AI Web Development',
  '/ia-empresas-navarra': 'AI Businesses Navarra',
  '/ia-empresas-pamplona': 'AI Businesses Pamplona',
  '/ia-restaurantes-navarra': 'AI Restaurants Navarra',
  '/ia-comercios-navarra': 'AI Retail Navarra',
  '/ia-clinicas-navarra': 'AI Clinics Navarra',
  '/automatizacion-empresas-navarra': 'Business Automation Navarra',
  '/blog': 'Blog',
  '/blog/que-es-un-agente-ia': 'What is an AI agent',
  '/blog/chatbot-vs-agente-ia': 'Chatbot vs AI Agent',
  '/blog/agentes-ia-empresas-navarra': 'AI Agents businesses Navarra',
  '/blog/automatizacion-empresas-navarra': 'Business automation Navarra',
  '/blog/agentes-ia-para-paginas-web-navarra': 'AI Agents for websites',
  '/blog/ia-para-clinicas-navarra': 'AI for clinics Navarra',
  '/blog/ia-para-restaurantes-navarra': 'AI for restaurants Navarra',
  '/blog/ia-para-comercios-navarra': 'AI for retail Navarra',
  '/blog/chatbots-empresas-navarra': 'Chatbots businesses Navarra',
  '/blog/automatizar-atencion-cliente-ia': 'Automate customer service',
  '/legal-notice': 'Legal Notice',
  '/privacy-policy': 'Privacy Policy',
  '/terms-conditions': 'Terms & Conditions',
};

const IA_HUB_CHILDREN = [
  '/agentes-ia-atencion-cliente-navarra',
  '/automatizacion-procesos-empresas-navarra',
  '/agentes-voz-telefonicos-empresas',
  '/rag-base-conocimiento-empresas',
  '/consultoria-inteligencia-artificial-navarra',
  '/desarrollo-web-inteligencia-artificial',
  '/ia-empresas-navarra',
  '/ia-empresas-pamplona',
  '/ia-restaurantes-navarra',
  '/ia-comercios-navarra',
  '/ia-clinicas-navarra',
  '/automatizacion-empresas-navarra',
];

const BLOG_PAGES_PREFIX = '/blog/';

interface SEOBreadcrumbsProps {
  pathname: string;
  language: 'es' | 'en';
}

const SEOBreadcrumbs = ({ pathname, language }: SEOBreadcrumbsProps) => {
  const langPrefix = useLangPrefix();

  if (pathname === '/') return null;

  const labels = language === 'es' ? ROUTE_LABELS_ES : ROUTE_LABELS_EN;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: labels['/'] || 'Inicio', path: '/' },
  ];

  if (IA_HUB_CHILDREN.includes(pathname)) {
    breadcrumbs.push({ label: labels['/inteligencia-artificial-navarra'] || 'Inteligencia Artificial Navarra', path: '/inteligencia-artificial-navarra' });
  }

  if (pathname.startsWith(BLOG_PAGES_PREFIX)) {
    breadcrumbs.push({ label: labels['/blog'] || 'Blog', path: '/blog' });
  }

  const currentLabel = labels[pathname] || pathname.replace(/^\//, '').replace(/-/g, ' ');
  breadcrumbs.push({ label: currentLabel, path: pathname });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://rtpdigitalsolutions.es${langPrefix}${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-24 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-1">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />}
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default SEOBreadcrumbs;
