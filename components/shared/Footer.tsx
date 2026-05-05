import { Language, getTranslation } from '@/lib/i18n';
import { Linkedin, Facebook } from 'lucide-react';
import Link from '@/components/shared/LocalizedLink';

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  const t = getTranslation(language).footer;
  const isEs = language === 'es';

  const serviceLinks = [
    { path: isEs ? '/servicios' : '/services', label: isEs ? 'Servicios IA' : 'AI Services' },
    { path: '/diagnostico-ia-navarra', label: isEs ? 'Diagnóstico IA Navarra' : 'AI Diagnosis Navarra' },
    { path: '/agentes-ia-atencion-cliente-navarra', label: isEs ? 'Agentes IA atención al cliente' : 'AI Customer Service Agents' },
    { path: '/automatizacion-procesos-empresas-navarra', label: isEs ? 'Automatización de procesos' : 'Process Automation' },
    { path: '/agentes-voz-telefonicos-empresas', label: isEs ? 'Agentes de voz para empresas' : 'Voice Agents for Businesses' },
    { path: '/rag-base-conocimiento-empresas', label: isEs ? 'RAG base de conocimiento' : 'RAG Knowledge Base' },
    { path: '/consultoria-inteligencia-artificial-navarra', label: isEs ? 'Consultoría IA Navarra' : 'AI Consulting Navarra' },
    { path: '/desarrollo-web-inteligencia-artificial', label: isEs ? 'Desarrollo web con IA' : 'AI Web Development' },
  ];

  const sectorLinks = [
    { path: '/ia-inmobiliarias-navarra', label: isEs ? 'IA inmobiliarias Navarra' : 'AI real estate Navarra' },
    { path: '/ia-clinicas-navarra', label: isEs ? 'IA clínicas Navarra' : 'AI clinics Navarra' },
    { path: '/ia-restaurantes-navarra', label: isEs ? 'IA restaurantes Navarra' : 'AI restaurants Navarra' },
    { path: '/ia-comercios-navarra', label: isEs ? 'IA comercios Navarra' : 'AI retail Navarra' },
    { path: '/ia-empresas-navarra', label: isEs ? 'IA empresas Navarra' : 'AI businesses Navarra' },
    { path: '/inteligencia-artificial-navarra', label: isEs ? 'Inteligencia artificial en Navarra' : 'AI in Navarra' },
  ];

  const companyLinks = [
    { path: '/casos-ia-navarra', label: isEs ? 'Casos IA' : 'AI Cases' },
    { path: '/diagnostico-ia-navarra', label: isEs ? 'Diagnóstico IA' : 'AI Diagnosis' },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-10">
        {/* Service & Company Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {isEs ? 'Servicios' : 'Services'}
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {isEs ? 'IA por sectores' : 'AI by sector'}
            </h3>
            <ul className="space-y-2">
              {sectorLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {isEs ? 'Empresa' : 'Company'}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {isEs ? 'Legal' : 'Legal'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.termsConditions}
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.legalNotice}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/rtp-digital-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=833966173136862"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026 RTP Digital Solutions. {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

