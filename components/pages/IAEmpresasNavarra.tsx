'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Building2, UtensilsCrossed, ShoppingBag, Stethoscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  language: Language;
}

const LOVABLE = '';

const blogArticles = [
  { slug: 'que-es-un-agente-ia', title: { es: 'Qué es un agente de IA y cómo puede ayudar a una empresa', en: 'What is an AI agent and how can it help a business' } },
  { slug: 'chatbot-vs-agente-ia', title: { es: 'Chatbot vs Agente de IA: diferencias y cuál necesita tu empresa', en: 'Chatbot vs AI Agent: differences and which one your business needs' } },
  { slug: 'agentes-ia-empresas-navarra', title: { es: 'Agentes de IA para empresas en Navarra', en: 'AI Agents for businesses in Navarra' } },
  { slug: 'automatizacion-empresas-navarra', title: { es: 'Automatización para empresas en Navarra con IA', en: 'Automation for businesses in Navarra with AI' } },
  { slug: 'agentes-ia-para-paginas-web-navarra', title: { es: 'Agentes de IA para páginas web en Navarra', en: 'AI Agents for websites in Navarra' } },
  { slug: 'ia-para-clinicas-navarra', title: { es: 'Inteligencia artificial para clínicas en Navarra', en: 'AI for clinics in Navarra' } },
  { slug: 'ia-para-restaurantes-navarra', title: { es: 'Inteligencia artificial para restaurantes en Navarra', en: 'AI for restaurants in Navarra' } },
  { slug: 'ia-para-comercios-navarra', title: { es: 'Inteligencia artificial para comercios en Navarra', en: 'AI for retail in Navarra' } },
  { slug: 'chatbots-empresas-navarra', title: { es: 'Chatbots para empresas en Navarra', en: 'Chatbots for businesses in Navarra' } },
  { slug: 'automatizar-atencion-cliente-ia', title: { es: 'Cómo automatizar la atención al cliente con IA', en: 'How to automate customer service with AI' } },
];

const IAEmpresasNavarra = ({ language }: Props) => {
  const isEs = language === 'es';

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Inteligencia Artificial para Empresas en Navarra",
    "description": "Soluciones de inteligencia artificial para empresas en Navarra: agentes IA, automatización de procesos, asistentes para páginas web y más.",
    "url": "https://rtpdigitalsolutions.es/ia-empresas-navarra",
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
  };

  return (
    <>
            <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {isEs ? 'Inteligencia artificial para empresas en Navarra' : 'Artificial intelligence for businesses in Navarra'}
          </h1>
          <p className="text-lg text-foreground font-semibold mb-4 max-w-2xl">
            {isEs
              ? 'Las empresas que ya están aplicando inteligencia artificial están tomando ventaja sobre el resto.'
              : 'Businesses already applying artificial intelligence are gaining an advantage over the rest.'}
          </p>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            {isEs
              ? 'Cada empresa tiene procesos, clientes y necesidades distintas. La inteligencia artificial no se aplica igual en todos los negocios. Por eso, trabajamos con empresas en Pamplona y Navarra para identificar qué soluciones tienen sentido en cada caso y cómo implementarlas de forma realista.'
              : 'Every business has different processes, customers, and needs. Artificial intelligence is not applied the same way in every business. That\'s why we work with companies in Pamplona and Navarra to identify which solutions make sense in each case and how to implement them realistically.'}
          </p>
          <p className="text-muted-foreground mb-16 max-w-2xl">
            {isEs
              ? 'Esta página es tu punto de partida para entender qué puede hacer la IA por tu empresa y encontrar la solución que mejor se adapta a tu situación.'
              : 'This page is your starting point to understand what AI can do for your business and find the solution that best fits your situation.'}
          </p>

          {/* Positioning block */}
          <section className="mb-16">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8">
              <p className="text-foreground font-semibold text-lg mb-3">
                {isEs
                  ? 'La inteligencia artificial no se aplica igual en todos los negocios.'
                  : 'Artificial intelligence is not applied the same way in every business.'}
              </p>
              <p className="text-muted-foreground">
                {isEs
                  ? 'Cada sector tiene procesos, clientes y necesidades distintas. Por eso, hemos desarrollado soluciones específicas según el tipo de empresa.'
                  : 'Each sector has different processes, customers, and needs. That\'s why we have developed specific solutions depending on the type of business.'}
              </p>
            </div>
          </section>

          {/* Sector navigation - PILLAR */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              {isEs ? 'Aplicaciones de IA según tu sector' : 'AI applications by sector'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/ia-clinicas-navarra" className="group">
                <div className="holographic-border rounded-xl p-6 h-full transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <Stethoscope className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isEs ? 'IA para clínicas en Navarra' : 'AI for clinics in Navarra'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {isEs
                      ? 'Automatiza citas, atiende pacientes fuera de horario y reduce la carga administrativa de tu equipo.'
                      : 'Automate appointments, serve patients after hours, and reduce your team\'s administrative burden.'}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    {isEs ? 'Ver soluciones' : 'View solutions'} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link href="/ia-restaurantes-navarra" className="group">
                <div className="holographic-border rounded-xl p-6 h-full transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <UtensilsCrossed className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isEs ? 'IA para restaurantes en Navarra' : 'AI for restaurants in Navarra'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {isEs
                      ? 'Gestiona reservas, responde sobre el menú y alérgenos, y mejora la experiencia del cliente sin saturar al equipo.'
                      : 'Manage reservations, answer menu and allergen questions, and improve customer experience without overwhelming staff.'}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    {isEs ? 'Ver soluciones' : 'View solutions'} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link href="/ia-comercios-navarra" className="group">
                <div className="holographic-border rounded-xl p-6 h-full transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <ShoppingBag className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isEs ? 'IA para comercios en Navarra' : 'AI for retail in Navarra'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {isEs
                      ? 'Asistentes en tu web que informan sobre productos, disponibilidad y guían la compra para aumentar conversiones.'
                      : 'Website assistants that inform about products, availability, and guide purchases to increase conversions.'}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    {isEs ? 'Ver soluciones' : 'View solutions'} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* Solutions overview - simplified */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Soluciones de IA que implementamos' : 'AI solutions we implement'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEs
                ? 'Implementamos sistemas de inteligencia artificial en empresas de Navarra que quieren automatizar, vender más y operar mejor.'
                : 'We implement artificial intelligence systems in businesses in Navarra that want to automate, sell more, and operate better.'}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/agentes-ia-atencion-cliente-navarra" className="group">
                <div className="border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isEs ? 'Agentes IA para atención al cliente' : 'AI agents for customer service'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {isEs
                      ? 'Sistemas integrados en tu web que atienden, filtran y convierten visitantes en clientes.'
                      : 'Systems integrated into your website that serve, filter, and convert visitors into customers.'}
                  </p>
                </div>
              </Link>
              <Link href="/automatizacion-procesos-empresas-navarra" className="group">
                <div className="border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isEs ? 'Automatización de procesos empresariales' : 'Business process automation'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {isEs
                      ? 'Conecta CRM, emails, facturación y herramientas internas para que tu empresa funcione de forma eficiente.'
                      : 'Connect CRM, emails, billing, and internal tools so your business runs efficiently.'}
                  </p>
                </div>
              </Link>
              <Link href="/rag-base-conocimiento-empresas" className="group">
                <div className="border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isEs ? 'RAG: base de conocimiento inteligente' : 'RAG: intelligent knowledge base'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {isEs
                      ? 'Toda tu documentación accesible en segundos. Cualquier empleado encuentra lo que necesita sin depender de nadie.'
                      : 'All your documentation accessible in seconds. Any employee finds what they need without depending on anyone.'}
                  </p>
                </div>
              </Link>
              <Link href="/desarrollo-web-inteligencia-artificial" className="group">
                <div className="border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isEs ? 'Desarrollo web con inteligencia artificial' : 'Web development with AI'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {isEs
                      ? 'Tu web como centro de negocio: no solo informa, conversa, automatiza y convierte.'
                      : 'Your website as a business center: it doesn\'t just inform, it converses, automates, and converts.'}
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* Benefits - simplified, business-focused */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Qué consiguen las empresas con IA' : 'What businesses achieve with AI'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {(isEs ? [
                'Ahorro de tiempo en tareas que antes consumían horas cada día',
                'Atención a clientes sin depender de que alguien esté disponible',
                'Menos errores y más consistencia en procesos internos',
                'Captación de clientes que antes se perdían por falta de respuesta',
                'Equipos centrados en lo importante, no en tareas repetitivas',
                'Escalabilidad sin necesidad de contratar más personal',
                'Más clientes sin aumentar el equipo',
              ] : [
                'Time savings on tasks that used to consume hours every day',
                'Customer service without depending on someone being available',
                'Fewer errors and more consistency in internal processes',
                'Capturing customers who were previously lost due to lack of response',
                'Teams focused on what matters, not repetitive tasks',
                'Scalability without needing to hire more staff',
                'More customers without growing your team',
              ]).map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How to start */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo empezar' : 'How to get started'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>No necesitas transformar todo tu negocio de golpe. El primer paso es un <Link href={`${LOVABLE}/diagnostico-ia-navarra`} className="text-primary hover:underline font-medium">diagnóstico estratégico</Link> donde analizamos tu empresa, identificamos qué procesos se pueden mejorar y te proponemos un plan claro de implementación.</>
                : <>You don't need to transform your entire business at once. The first step is a <Link href={`${LOVABLE}/diagnostico-ia-navarra`} className="text-primary hover:underline font-medium">strategic diagnosis</Link> where we analyze your company, identify which processes can be improved, and propose a clear implementation plan.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Trabajamos con empresas en Navarra y Pamplona que quieren aplicar inteligencia artificial de forma práctica y rentable.'
                : 'We work with businesses in Navarra and Pamplona that want to apply artificial intelligence in a practical and profitable way.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Si prefieres explorar opciones antes, consulta nuestras soluciones de <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes IA para atención al cliente</Link>, <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link> o <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">RAG base de conocimiento</Link>.</>
                : <>If you prefer to explore options first, check out our solutions for <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI customer service agents</Link>, <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link>, or <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">RAG knowledge base</Link>.</>}
            </p>
          </section>

          {/* Blog section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              {isEs ? 'Aprende más sobre inteligencia artificial' : 'Learn more about artificial intelligence'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {isEs
                ? 'Explora nuestras guías y artículos sobre inteligencia artificial aplicada a empresas:'
                : 'Explore our guides and articles about artificial intelligence applied to businesses:'}
            </p>
            <div className="grid gap-4">
              {blogArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                    <CardContent className="p-4 md:p-6 flex items-center justify-between gap-4">
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {article.title[language]}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Ejemplos de uso de IA en Navarra */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Ejemplos de uso de inteligencia artificial en Navarra' : 'Examples of artificial intelligence use in Navarra'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEs
                ? 'La adopción de inteligencia artificial está creciendo en Navarra en múltiples sectores. Diferentes iniciativas y proyectos están explorando cómo estas tecnologías pueden mejorar procesos, atención al cliente y eficiencia operativa.'
                : 'The adoption of artificial intelligence is growing in Navarra across multiple sectors. Different initiatives and projects are exploring how these technologies can improve processes, customer service and operational efficiency.'}
            </p>
            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {isEs ? 'Empresas navarras explorando la inteligencia artificial' : 'Navarra businesses exploring artificial intelligence'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {isEs
                      ? 'Diferentes sectores empresariales en Navarra están comenzando a aplicar inteligencia artificial para automatizar procesos, analizar datos y mejorar la eficiencia operativa.'
                      : 'Different business sectors in Navarra are beginning to apply artificial intelligence to automate processes, analyze data and improve operational efficiency.'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isEs ? 'Fuente: ' : 'Source: '}
                    <a href="https://www.navarra.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      {isEs ? 'Gobierno de Navarra' : 'Government of Navarra'}
                    </a>
                    {' — '}
                    <span className="italic">
                      {isEs
                        ? 'Iniciativas regionales impulsan la adopción de inteligencia artificial en empresas y proyectos de innovación.'
                        : 'Regional initiatives drive the adoption of artificial intelligence in businesses and innovation projects.'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Descubre cómo aplicar inteligencia artificial en tu tipo de empresa' : 'Discover how to apply artificial intelligence in your type of business'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Solicita un diagnóstico estratégico y te ayudamos a identificar las soluciones que mejor se adaptan a tu negocio.'
                : 'Request a strategic diagnosis and we\'ll help you identify the solutions that best fit your business.'}
            </p>
            <Link href={`${LOVABLE}/diagnostico-ia-navarra`}>
              <Button size="lg" className="gap-2">
                {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default IAEmpresasNavarra;



