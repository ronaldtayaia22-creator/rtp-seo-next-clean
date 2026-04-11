import Link from './LocalizedLink';
import { ChevronRight, Home } from 'lucide-react';
import { useLangPrefix } from '@/lib/language-context';
import { normalizeBasePath } from '@/lib/routeLocaleMap';

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
  '/artificial-intelligence-navarra': 'Artificial Intelligence Navarra',
  '/ai-cases-navarra': 'AI Cases',
  '/diagnosis-ai-navarra': 'AI Diagnosis',
  '/ai-automation-navarra': 'AI Automation',
  '/contact-success': 'Confirmation',
  '/ai-customer-service-agents-navarra': 'AI Customer Service Agents',
  '/business-process-automation-navarra': 'Process Automation',
  '/voice-agents-business': 'Voice Agents',
  '/rag-knowledge-base-business': 'RAG Knowledge Base',
  '/ai-consulting-navarra': 'AI Consulting',
  '/web-development-artificial-intelligence': 'AI Web Development',
  '/ai-business-navarra': 'AI Businesses Navarra',
  '/ai-business-pamplona': 'AI Businesses Pamplona',
  '/ai-restaurants-navarra': 'AI Restaurants Navarra',
  '/ai-retail-navarra': 'AI Retail Navarra',
  '/ai-clinics-navarra': 'AI Clinics Navarra',
  '/automatizacion-empresas-navarra': 'Business Automation Navarra',
  '/blog': 'Blog',
  '/blog/what-is-an-ai-agent': 'What is an AI agent',
  '/blog/chatbot-vs-ai-agent': 'Chatbot vs AI Agent',
  '/blog/ai-agents-business-navarra': 'AI Agents businesses Navarra',
  '/blog/business-automation-navarra': 'Business automation Navarra',
  '/blog/ai-agents-for-websites-navarra': 'AI Agents for websites',
  '/blog/ai-for-clinics-navarra': 'AI for clinics Navarra',
  '/blog/ai-for-restaurants-navarra': 'AI for restaurants Navarra',
  '/blog/ai-for-retail-navarra': 'AI for retail Navarra',
  '/blog/chatbots-business-navarra': 'Chatbots businesses Navarra',
  '/blog/automate-customer-service-ai': 'Automate customer service',
  '/blog/how-much-does-artificial-intelligence-cost-navarra': 'How much AI costs in Navarra',
  '/blog/artificial-intelligence-examples-business-navarra': 'AI examples for businesses',
  '/blog/artificial-intelligence-benefits-business-navarra': 'AI benefits for businesses',
  '/blog/how-to-implement-artificial-intelligence-business-navarra': 'How to implement AI in business',
  '/legal-notice': 'Legal Notice',
  '/privacy-policy': 'Privacy Policy',
  '/terms-conditions': 'Terms & Conditions',
};

const IA_HUB_CHILDREN = [
  '/agentes-ia-atencion-cliente-navarra',
  '/ai-customer-service-agents-navarra',
  '/automatizacion-procesos-empresas-navarra',
  '/business-process-automation-navarra',
  '/agentes-voz-telefonicos-empresas',
  '/voice-agents-business',
  '/rag-base-conocimiento-empresas',
  '/rag-knowledge-base-business',
  '/consultoria-inteligencia-artificial-navarra',
  '/ai-consulting-navarra',
  '/desarrollo-web-inteligencia-artificial',
  '/web-development-artificial-intelligence',
  '/ia-empresas-navarra',
  '/ai-business-navarra',
  '/ia-empresas-pamplona',
  '/ai-business-pamplona',
  '/ia-restaurantes-navarra',
  '/ai-restaurants-navarra',
  '/ia-comercios-navarra',
  '/ai-retail-navarra',
  '/ia-clinicas-navarra',
  '/ai-clinics-navarra',
  '/automatizacion-empresas-navarra',
];

const BLOG_PAGES_PREFIX = '/blog/';

interface SEOBreadcrumbsProps {
  pathname: string;
  language: 'es' | 'en';
}

const SEOBreadcrumbs = ({ pathname, language }: SEOBreadcrumbsProps) => {
  const langPrefix = useLangPrefix();
  const basePath = normalizeBasePath(pathname);

  if (basePath === '/') return null;

  const labels = language === 'es' ? ROUTE_LABELS_ES : ROUTE_LABELS_EN;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: labels['/'] || (language === 'en' ? 'Home' : 'Inicio'), path: '/' },
  ];

  if (IA_HUB_CHILDREN.includes(basePath)) {
    const iaHubPath = language === 'en' ? '/artificial-intelligence-navarra' : '/inteligencia-artificial-navarra';
    breadcrumbs.push({ label: labels[iaHubPath] || (language === 'en' ? 'Artificial Intelligence Navarra' : 'Inteligencia Artificial Navarra'), path: iaHubPath });
  }

  if (basePath.startsWith(BLOG_PAGES_PREFIX)) {
    breadcrumbs.push({ label: labels['/blog'] || 'Blog', path: '/blog' });
  }

  const currentLabel = labels[basePath] || basePath.replace(/^\//, '').replace(/-/g, ' ');
  breadcrumbs.push({ label: currentLabel, path: basePath });

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
