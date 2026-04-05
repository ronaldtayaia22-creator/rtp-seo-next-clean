import Link from '@/components/shared/LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface RelatedService {
  path: string;
  labelEs: string;
  labelEn: string;
  descEs: string;
  descEn: string;
}

const ALL_SERVICES: Record<string, RelatedService> = {
  agentesIA: {
    path: '/agentes-ia-atencion-cliente-navarra',
    labelEs: 'Agentes IA para atención al cliente',
    labelEn: 'AI Customer Service Agents',
    descEs: 'Asistentes inteligentes 24/7 integrados en tu web y WhatsApp.',
    descEn: 'Smart 24/7 assistants integrated into your website and WhatsApp.',
  },
  automatizacion: {
    path: '/automatizacion-procesos-empresas-navarra',
    labelEs: 'Automatización de procesos empresariales',
    labelEn: 'Business Process Automation',
    descEs: 'Flujos automatizados con n8n para CRM, facturación y operaciones.',
    descEn: 'Automated flows with n8n for CRM, invoicing and operations.',
  },
  voz: {
    path: '/agentes-voz-telefonicos-empresas',
    labelEs: 'Agentes de voz para empresas',
    labelEn: 'Voice Agents for Businesses',
    descEs: 'Atención telefónica automatizada con IA y conexión a tus sistemas.',
    descEn: 'Automated phone support with AI connected to your systems.',
  },
  rag: {
    path: '/rag-base-conocimiento-empresas',
    labelEs: 'RAG y bases de conocimiento',
    labelEn: 'RAG & Knowledge Bases',
    descEs: 'IA conectada a tu documentación interna para respuestas precisas.',
    descEn: 'AI connected to your internal documentation for precise answers.',
  },
  consultoria: {
    path: '/consultoria-inteligencia-artificial-navarra',
    labelEs: 'Consultoría de inteligencia artificial',
    labelEn: 'AI Consulting',
    descEs: 'Análisis estratégico y diseño de arquitectura IA para tu empresa.',
    descEn: 'Strategic analysis and AI architecture design for your business.',
  },
  desarrolloWeb: {
    path: '/desarrollo-web-inteligencia-artificial',
    labelEs: 'Desarrollo web con inteligencia artificial',
    labelEn: 'AI Web Development',
    descEs: 'Páginas web inteligentes con agentes IA y automatización integrada.',
    descEn: 'Smart websites with integrated AI agents and automation.',
  },
};

interface RelatedServicesProps {
  language: Language;
  currentPath: string;
  relatedKeys: (keyof typeof ALL_SERVICES)[];
}

const RelatedServices = ({ language, currentPath, relatedKeys }: RelatedServicesProps) => {
  const isEs = language === 'es';
  const related = relatedKeys
    .map((key) => ALL_SERVICES[key])
    .filter((s) => s && s.path !== currentPath);

  if (related.length === 0) return null;

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
          {isEs ? 'Servicios relacionados' : 'Related services'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((service) => (
            <Link
              key={service.path}
              href={service.path}
              className="group p-5 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all space-y-2"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {isEs ? service.labelEs : service.labelEn}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isEs ? service.descEs : service.descEn}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                {isEs ? 'Ver servicio' : 'View service'}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;

