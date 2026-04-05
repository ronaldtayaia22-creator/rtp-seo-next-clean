import { Language } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from '@/components/shared/LocalizedLink';

export const CASES_PAGE_PATH = '/casos-ia-navarra';

interface CaseShowcaseProps {
  language: Language;
}

const cases = [
  {
    slug: 'doixa',
    badge: { es: 'Caso real', en: 'Real case' },
    category: { es: 'Clínica estética', en: 'Aesthetic clinic' },
    title: 'Doixa Estética Integral Avanzada',
    description: {
      es: 'Plataforma de gestión inteligente con reservas online, buffers automáticos entre citas y asistente IA conversacional.',
      en: 'Smart management platform with online bookings, automatic buffers between appointments and conversational AI assistant.',
    },
    highlights: {
      es: ['Reservas inteligentes', 'IA conversacional', 'Recordatorios automáticos'],
      en: ['Smart bookings', 'Conversational AI', 'Automatic reminders'],
    },
    result: {
      es: 'Reservas online automatizadas · Atención 24/7',
      en: 'Automated online bookings · 24/7 support',
    },
  },
  {
    slug: 'aura',
    badge: { es: 'Caso real', en: 'Real case' },
    category: { es: 'Peluquería', en: 'Hair salon' },
    title: 'Aura Studio Peluquería',
    description: {
      es: 'Sistema completo con reservas en tiempo real, CRM de clientes y campañas de fidelización con asistente virtual.',
      en: 'Complete system with real-time bookings, client CRM and loyalty campaigns with virtual assistant.',
    },
    highlights: {
      es: ['CRM de clientes', 'Reservas online', 'Fidelización automatizada'],
      en: ['Client CRM', 'Online bookings', 'Automated loyalty'],
    },
    result: {
      es: 'Retención de clientes · CRM automatizado',
      en: 'Client retention · Automated CRM',
    },
  },
  {
    slug: 'waals',
    badge: { es: 'Caso real', en: 'Real case' },
    category: { es: 'E-commerce', en: 'E-commerce' },
    title: 'WAALS barefoot',
    description: {
      es: 'Ecosistema ecommerce con integración Shopify, automatización empresarial y arquitectura preparada para escalar.',
      en: 'Ecommerce ecosystem with Shopify integration, business automation and architecture ready to scale.',
    },
    highlights: {
      es: ['Shopify integrado', 'Automatización operativa', 'Escalabilidad digital'],
      en: ['Shopify integrated', 'Operational automation', 'Digital scalability'],
    },
    result: {
      es: 'Ecommerce escalable · Operativa automatizada',
      en: 'Scalable ecommerce · Automated operations',
    },
  },
];

const CaseShowcase = ({ language }: CaseShowcaseProps) => {
  const lang = language === 'es' ? 'es' : 'en';
  const isEs = language === 'es';

  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-glow-primary">
              {isEs
                ? 'Casos reales de inteligencia artificial en empresas'
                : 'Real AI cases in businesses'}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              {isEs
                ? 'Sistemas reales que ya automatizan procesos, captan clientes y aumentan ingresos.'
                : 'Real systems already automating processes, capturing clients and increasing revenue.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-muted/30 flex flex-col hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px]">
                    🟢 {c.badge[lang]}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-medium">
                    {c.category[lang]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground leading-tight mt-4 min-h-[3.5rem] flex items-start">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mt-3">
                  {c.description[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {c.highlights[lang].map((h, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Result block */}
                <div className="mt-4 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-xs font-medium text-emerald-400">
                    {isEs ? 'Resultado:' : 'Result:'}{' '}
                    <span className="text-emerald-300">{c.result[lang]}</span>
                  </p>
                </div>

                <Link
                  to={`${CASES_PAGE_PATH}?case=${c.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-2 pt-3 mt-auto"
                >
                  {isEs ? 'Ver caso' : 'View case'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={CASES_PAGE_PATH}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              {isEs ? 'Explorar todos los casos' : 'Explore all cases'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseShowcase;
