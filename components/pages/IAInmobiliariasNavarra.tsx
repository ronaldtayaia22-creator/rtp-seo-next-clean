'use client';

import Link from '@/components/shared/LocalizedLink';
import SectorVisualStory from '@/components/shared/SectorVisualStory';
import { Language } from '@/lib/i18n';
import { getSectorVisualStory } from '@/lib/content/sectorVisualStories';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Props {
  language: Language;
}

const IAInmobiliariasNavarra = ({ language }: Props) => {
  const isEs = language === 'es';
  const story = getSectorVisualStory('inmobiliarias', isEs ? 'es' : 'en');

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/ia-empresas-navarra" className="hover:text-primary transition-colors">
            ← {isEs ? 'IA para empresas en Navarra' : 'AI for businesses in Navarra'}
          </Link>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
          {isEs
            ? 'IA para inmobiliarias en Navarra: sistema comercial que capta, clasifica y hace seguimiento'
            : 'AI for real estate agencies in Navarra: a sales system that captures, qualifies, and follows up'}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-muted-foreground">
          {isEs
            ? 'Automatiza captación, seguimiento y cierre sin perder oportunidades por tiempos de respuesta'
            : 'Automate lead capture, follow-up, and closing without losing opportunities due to slow response times'}
        </h2>

        <section className="mb-16 text-lg text-muted-foreground max-w-3xl space-y-4">
          <p>
            {isEs
              ? 'Una inmobiliaria no necesita otro chatbot aislado. Necesita un sistema comercial con IA conectado a su operativa diaria: entrada de leads, clasificación, seguimiento y conversión.'
              : 'A real estate agency does not need another isolated chatbot. It needs an AI sales system connected to daily operations: lead intake, qualification, follow-up, and conversion.'}
          </p>
          <p>
            {isEs
              ? 'En Navarra y Pamplona, las agencias que responden primero, filtran mejor y mantienen seguimiento constante son las que convierten más visitas en cierres.'
              : 'In Navarra and Pamplona, agencies that respond first, qualify better, and maintain consistent follow-up convert more visits into closed deals.'}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? 'Problemas que frenan a muchas inmobiliarias' : 'Common blockers in many agencies'}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>{isEs ? 'Leads de portales, web y WhatsApp sin respuesta en minutos.' : 'Leads from portals, website, and WhatsApp not answered within minutes.'}</li>
            <li>{isEs ? 'Seguimiento irregular: se enfría el interés y se pierden operaciones.' : 'Inconsistent follow-up: interest cools down and deals are lost.'}</li>
            <li>{isEs ? 'Agenda comercial reactiva, con visitas poco cualificadas.' : 'Reactive sales agenda with poorly qualified visits.'}</li>
            <li>{isEs ? 'Datos de clientes dispersos, sin trazabilidad clara del embudo.' : 'Customer data scattered, with no clear funnel traceability.'}</li>
            <li>{isEs ? 'Equipo ocupado en tareas repetitivas en vez de negociar y cerrar.' : 'Team busy with repetitive tasks instead of negotiating and closing.'}</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? 'Qué automatiza un sistema IA inmobiliario' : 'What an AI real estate system automates'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">{isEs ? 'Captación y clasificación' : 'Capture and qualification'}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Respuesta automática inmediata por canal.' : 'Immediate automated response by channel.'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Filtro por tipo de inmueble, presupuesto y urgencia.' : 'Filtering by property type, budget, and urgency.'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Prioridad comercial para leads calientes.' : 'Sales priority for hot leads.'}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">{isEs ? 'Seguimiento y conversión' : 'Follow-up and conversion'}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Secuencias de seguimiento sin carga manual.' : 'Follow-up sequences without manual load.'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Recordatorios de visita, documentación y próximos pasos.' : 'Visit reminders, documentation, and next steps.'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Registro en CRM para ver cada oportunidad en tiempo real.' : 'CRM logging to track every opportunity in real time.'}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <SectorVisualStory
            title={story.title}
            sectorLabel={story.sectorLabel}
            slides={story.slides}
            problem={story.problem}
            solution={story.solution}
            result={story.result}
            ctaLabel={story.ctaLabel}
            ctaHref={story.ctaHref}
            autoplayMs={6000}
          />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? 'Flujo recomendado en 5 pasos' : 'Recommended 5-step flow'}
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
            <li>{isEs ? 'Entrada unificada de leads desde web, portales y mensajería.' : 'Unified lead intake from website, portals, and messaging channels.'}</li>
            <li>{isEs ? 'Respuesta inicial automatizada con información relevante.' : 'Automated first response with relevant information.'}</li>
            <li>{isEs ? 'Clasificación por potencial de cierre y asignación comercial.' : 'Qualification by closing potential and sales assignment.'}</li>
            <li>{isEs ? 'Seguimiento automatizado hasta visita, oferta o descarte.' : 'Automated follow-up until visit, offer, or discard.'}</li>
            <li>{isEs ? 'Medicion de conversion por canal para optimizar captacion.' : 'Channel conversion measurement to optimize acquisition.'}</li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? '3 casos de uso que generan impacto' : '3 high-impact use cases'}
          </h2>
          <div className="space-y-6">
            <article className="rounded-xl border border-border bg-muted/30 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                {isEs ? 'Captación de propietarios para venta y alquiler' : 'Owner lead capture for sales and rentals'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isEs
                  ? 'El sistema recoge solicitudes, filtra viabilidad y activa seguimiento comercial para aumentar valoraciones y captaciones firmadas.'
                  : 'The system collects requests, filters viability, and activates commercial follow-up to increase valuations and signed listings.'}
              </p>
            </article>
            <article className="rounded-xl border border-border bg-muted/30 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                {isEs ? 'Compradores con respuesta inmediata y agenda optimizada' : 'Buyers with immediate response and optimized scheduling'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isEs
                  ? 'Los interesados reciben información clave al instante y solo llegan al equipo comercial los perfiles mejor cualificados para visita.'
                  : 'Prospects receive key information instantly, and only the best-qualified profiles reach the sales team for visits.'}
              </p>
            </article>
            <article className="rounded-xl border border-border bg-muted/30 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                {isEs ? 'Seguimiento post-visita para acelerar cierre' : 'Post-visit follow-up to accelerate closing'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isEs
                  ? 'Recordatorios, objeciones frecuentes y próximos pasos automatizados para evitar que operaciones activas se enfríen.'
                  : 'Automated reminders, common objections, and next-step prompts to prevent active deals from cooling down.'}
              </p>
            </article>
          </div>
        </section>

        <section className="mb-16 p-6 md:p-8 rounded-xl border border-primary/20 bg-primary/5">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? 'Resultados esperados en inmobiliarias' : 'Expected outcomes for agencies'}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>{isEs ? 'Menos leads perdidos por falta de respuesta.' : 'Fewer lost leads due to delayed response.'}</li>
            <li>{isEs ? 'Más visitas con interesados mejor cualificados.' : 'More visits with better-qualified prospects.'}</li>
            <li>{isEs ? 'Mayor disciplina de seguimiento sin ampliar plantilla.' : 'Stronger follow-up discipline without increasing headcount.'}</li>
            <li>{isEs ? 'Mejor conversión del embudo comercial.' : 'Better sales funnel conversion.'}</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            {isEs ? 'Enlaces internos relacionados' : 'Related internal links'}
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">{isEs ? 'IA para empresas en Navarra' : 'AI for businesses in Navarra'}</Link></li>
            <li><Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">{isEs ? 'Agentes IA para atención al cliente' : 'AI agents for customer service'}</Link></li>
            <li><Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">{isEs ? 'Automatización de procesos con IA' : 'AI process automation'}</Link></li>
            <li><Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">{isEs ? 'Desarrollo web con IA' : 'AI web development'}</Link></li>
            <li><Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">{isEs ? 'Diagnóstico IA en Navarra' : 'AI diagnostic in Navarra'}</Link></li>
          </ul>
        </section>

        <section className="p-6 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {isEs
              ? 'Convierte tu inmobiliaria en un sistema comercial inteligente'
              : 'Turn your agency into an intelligent sales system'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {isEs
              ? 'Te ayudamos a diseñar e implementar un sistema IA adaptado a tu proceso comercial en Navarra y Pamplona.'
              : 'We help you design and implement an AI system tailored to your commercial process in Navarra and Pamplona.'}
          </p>
          <Link href="/diagnostico-ia-navarra">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnostic'} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">
            {isEs ? 'Evaluación inicial sin coste' : 'Free initial evaluation'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default IAInmobiliariasNavarra;
