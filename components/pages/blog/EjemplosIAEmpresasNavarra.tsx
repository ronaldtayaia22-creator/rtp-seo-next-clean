'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ArticleProps {
  language: Language;
}
const EjemplosIAEmpresasNavarra = ({ language }: ArticleProps) => {
  const isEs = language === 'es';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ejemplos reales de inteligencia artificial en empresas en Navarra",
    "description": "Descubre ejemplos reales de cÃ³mo empresas en Navarra y Pamplona estÃ¡n usando inteligencia artificial para automatizar procesos, captar clientes y crecer.",
    "author": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
    "datePublished": "2026-03-23",
    "dateModified": "2026-03-23",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://rtpdigitalsolutions.es/blog/ejemplos-inteligencia-artificial-empresas-navarra" },
    "inLanguage": isEs ? "es" : "en"
  };

  return (
    <>
            <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {isEs ? 'Volver al blog' : 'Back to blog'}
          </Link>

          <time className="text-sm text-muted-foreground block mb-4">2026-03-23</time>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight">
            {isEs
              ? 'Ejemplos reales de inteligencia artificial en empresas en Navarra'
              : 'Real examples of artificial intelligence in businesses in Navarra'}
          </h1>

          <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed text-base md:text-lg">

            {/* Intro */}
            <section>
              <p>
                {isEs
                  ? 'La inteligencia artificial ya no es algo exclusivo de grandes corporaciones. Empresas de todos los tamaÃ±os en Navarra y en Pamplona estÃ¡n utilizando sistemas de IA para automatizar tareas, mejorar la atenciÃ³n al cliente y aumentar sus ingresos.'
                  : 'Artificial intelligence is no longer exclusive to large corporations. Businesses of all sizes in Navarra and Pamplona are using AI systems to automate tasks, improve customer service and increase their revenue.'}
              </p>
              <p className="mt-4">
                {isEs
                  ? 'En este artÃ­culo te mostramos ejemplos concretos de cÃ³mo se aplica la inteligencia artificial en empresas en Navarra, clasificados por sector, para que puedas ver quÃ© tipo de soluciÃ³n encajarÃ­a en tu negocio.'
                  : 'In this article we show you concrete examples of how artificial intelligence is applied in businesses in Navarra, classified by sector, so you can see what type of solution would fit your business.'}
              </p>
            </section>

            {/* CÃ³mo se estÃ¡ usando */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isEs ? 'CÃ³mo se estÃ¡ usando la inteligencia artificial en Navarra' : 'How artificial intelligence is being used in Navarra'}
              </h2>
              <p>
                {isEs
                  ? 'Las aplicaciones mÃ¡s comunes de la inteligencia artificial en empresas en Navarra y Pamplona se centran en cuatro Ã¡reas principales:'
                  : 'The most common applications of artificial intelligence in businesses in Navarra and Pamplona focus on four main areas:'}
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>{isEs ? <><strong>AtenciÃ³n al cliente automatizada:</strong> agentes de IA que responden preguntas, resuelven dudas y gestionan solicitudes a travÃ©s de web, WhatsApp o telÃ©fono, disponibles las 24 horas.</> : <><strong>Automated customer service:</strong> AI agents that answer questions, resolve doubts and manage requests via web, WhatsApp or phone, available 24/7.</>}</li>
                <li>{isEs ? <><strong>AutomatizaciÃ³n de procesos:</strong> flujos automÃ¡ticos que eliminan tareas manuales como el envÃ­o de emails, la sincronizaciÃ³n de datos o la generaciÃ³n de informes.</> : <><strong>Process automation:</strong> automated workflows that eliminate manual tasks like sending emails, data synchronization or report generation.</>}</li>
                <li>{isEs ? <><strong>CaptaciÃ³n de clientes:</strong> sistemas que cualifican leads, programan reuniones y hacen seguimiento comercial de forma autÃ³noma.</> : <><strong>Customer acquisition:</strong> systems that qualify leads, schedule meetings and follow up commercially on their own.</>}</li>
                <li>{isEs ? <><strong>AnÃ¡lisis de datos:</strong> herramientas que procesan informaciÃ³n de clientes, ventas y operaciones para identificar oportunidades y tomar mejores decisiones.</> : <><strong>Data analysis:</strong> tools that process customer, sales and operations data to identify opportunities and make better decisions.</>}</li>
              </ul>
            </section>

            {/* Ejemplos por sectores */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isEs ? 'Ejemplos de inteligencia artificial por sectores en Navarra' : 'AI examples by sector in Navarra'}
              </h2>

              {/* ClÃ­nicas */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {isEs ? 'ClÃ­nicas y centros de salud' : 'Clinics and health centers'}
                </h3>
                <p>
                  {isEs
                    ? 'Las clÃ­nicas en Navarra estÃ¡n entre las primeras en adoptar inteligencia artificial para mejorar la experiencia del paciente y reducir la carga administrativa:'
                    : 'Clinics in Navarra are among the first to adopt artificial intelligence to improve patient experience and reduce administrative burden:'}
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>{isEs ? <><strong>GestiÃ³n de citas automÃ¡tica:</strong> un agente de IA permite a los pacientes agendar, modificar o cancelar citas directamente desde la web o WhatsApp, sin necesidad de llamar.</> : <><strong>Automatic appointment management:</strong> an AI agent allows patients to schedule, modify or cancel appointments directly from the website or WhatsApp, without needing to call.</>}</li>
                  <li>{isEs ? <><strong>Recordatorios inteligentes:</strong> el sistema envÃ­a recordatorios personalizados antes de cada cita para reducir las ausencias.</> : <><strong>Smart reminders:</strong> the system sends personalized reminders before each appointment to reduce no-shows.</>}</li>
                  <li>{isEs ? <><strong>AtenciÃ³n 24/7:</strong> los pacientes pueden resolver sus dudas sobre servicios, horarios y preparaciÃ³n de pruebas a cualquier hora del dÃ­a.</> : <><strong>24/7 support:</strong> patients can resolve their questions about services, schedules and test preparation at any time of day.</>}</li>
                </ul>
              </div>

              {/* Restaurantes */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {isEs ? 'Restaurantes y hostelerÃ­a' : 'Restaurants and hospitality'}
                </h3>
                <p>
                  {isEs
                    ? 'El sector hostelero en Navarra estÃ¡ utilizando la inteligencia artificial para simplificar operaciones y mejorar la relaciÃ³n con el cliente:'
                    : 'The hospitality sector in Navarra is using artificial intelligence to simplify operations and improve customer relationships:'}
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>{isEs ? <><strong>Reservas automatizadas:</strong> los clientes pueden reservar mesa directamente a travÃ©s de un agente conversacional en la web o por WhatsApp, con confirmaciÃ³n instantÃ¡nea.</> : <><strong>Automated reservations:</strong> customers can book a table directly through a conversational agent on the website or via WhatsApp, with instant confirmation.</>}</li>
                  <li>{isEs ? <><strong>AtenciÃ³n por WhatsApp:</strong> el agente responde consultas sobre menÃº, alÃ©rgenos, horarios y eventos sin intervenciÃ³n del personal.</> : <><strong>WhatsApp support:</strong> the agent responds to queries about menu, allergens, hours and events without staff intervention.</>}</li>
                  <li>{isEs ? <><strong>FidelizaciÃ³n:</strong> seguimiento automÃ¡tico de clientes habituales con ofertas personalizadas y recordatorios de eventos especiales.</> : <><strong>Loyalty:</strong> automatic follow-up of regular customers with personalized offers and reminders for special events.</>}</li>
                </ul>
              </div>

              {/* Comercios */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {isEs ? 'Comercios y retail' : 'Retail businesses'}
                </h3>
                <p>
                  {isEs
                    ? 'Los comercios en Navarra y Pamplona estÃ¡n descubriendo que la inteligencia artificial puede mejorar su atenciÃ³n y aumentar ventas de forma directa:'
                    : 'Retail businesses in Navarra and Pamplona are discovering that artificial intelligence can improve their service and directly increase sales:'}
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>{isEs ? <><strong>Recomendaciones personalizadas:</strong> el agente analiza las preferencias del cliente y sugiere productos relevantes de forma automÃ¡tica.</> : <><strong>Personalized recommendations:</strong> the agent analyzes customer preferences and automatically suggests relevant products.</>}</li>
                  <li>{isEs ? <><strong>AtenciÃ³n automÃ¡tica:</strong> resoluciÃ³n de dudas sobre disponibilidad, precios, envÃ­os y devoluciones sin intervenciÃ³n del equipo.</> : <><strong>Automatic support:</strong> resolution of questions about availability, prices, shipping and returns without team intervention.</>}</li>
                  <li>{isEs ? <><strong>RecuperaciÃ³n de clientes:</strong> seguimiento automÃ¡tico de carritos abandonados y contacto proactivo con clientes inactivos.</> : <><strong>Customer recovery:</strong> automatic follow-up of abandoned carts and proactive contact with inactive customers.</>}</li>
                </ul>
              </div>
            </section>

            {/* QuÃ© tienen en comÃºn */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {isEs ? 'QuÃ© tienen en comÃºn estas empresas' : 'What these businesses have in common'}
              </h2>
              <p>
                {isEs
                  ? 'Aunque operan en sectores muy diferentes, todas las empresas en Navarra que implementan inteligencia artificial comparten tres resultados clave:'
                  : 'Although they operate in very different sectors, all businesses in Navarra that implement artificial intelligence share three key results:'}
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>{isEs ? <><strong>Automatizan tareas repetitivas:</strong> liberan tiempo del equipo para centrarse en lo que realmente importa.</> : <><strong>They automate repetitive tasks:</strong> freeing team time to focus on what really matters.</>}</li>
                <li>{isEs ? <><strong>Mejoran la atenciÃ³n al cliente:</strong> respuestas inmediatas, coherentes y disponibles en todo momento.</> : <><strong>They improve customer service:</strong> immediate, consistent responses available at all times.</>}</li>
                <li>{isEs ? <><strong>Aumentan ingresos sin contratar mÃ¡s personal:</strong> el sistema trabaja de forma continua generando oportunidades de negocio.</> : <><strong>They increase revenue without hiring more staff:</strong> the system works continuously generating business opportunities.</>}</li>
              </ul>
            </section>

            {/* Authority link */}
            <section>
              <p>
                {isEs
                  ? <>Estos son solo algunos ejemplos de lo que la inteligencia artificial puede hacer por una empresa. Si quieres ver todas las opciones disponibles y cÃ³mo adaptarlas a tu negocio, explora nuestras <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial en Navarra</Link>.</>
                  : <>These are just some examples of what artificial intelligence can do for a business. If you want to see all available options and how to adapt them to your business, explore our <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence solutions in Navarra</Link>.</>}
              </p>
            </section>

            {/* Opportunity paragraph */}
            <section>
              <p>
                {isEs
                  ? 'Aunque muchos de estos sistemas ya se estÃ¡n implementando en empresas de Navarra y Pamplona, la mayorÃ­a de negocios todavÃ­a no los estÃ¡n aprovechando. Esto supone una gran oportunidad para diferenciarse y crecer mÃ¡s rÃ¡pido que la competencia.'
                  : 'Although many of these systems are already being implemented in businesses in Navarra and Pamplona, most businesses are still not taking advantage of them. This represents a great opportunity to differentiate and grow faster than the competition.'}
              </p>
            </section>

            <section>
              <p>
                {isEs
                  ? <>Si quieres aplicar estos casos en tu empresa, revisa nuestros <Link href="/servicios" className="text-primary hover:underline font-medium">servicios</Link>, la estrategia de <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">IA para empresas en Navarra</Link> y activa primero un <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">diagnóstico estratégico</Link>.</>
                  : <>If you want to apply these use cases to your business, review our <Link href="/servicios" className="text-primary hover:underline font-medium">services</Link>, the <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">AI for businesses in Navarra</Link> strategy, and start with a <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">strategic diagnosis</Link>.</>}
              </p>
            </section>

            {/* CTA */}
            <section className="not-prose mt-16 p-4 sm:p-8 rounded-2xl border border-border bg-card text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {isEs ? 'Â¿Quieres implementar algo similar en tu empresa?' : 'Want to implement something similar in your business?'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {isEs
                  ? 'Si quieres implementar algo similar en tu empresa, solicita un diagnÃ³stico estratÃ©gico personalizado.'
                  : 'If you want to implement something similar in your business, request a personalized strategic diagnosis.'}
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto px-8 gap-2">
                <Link href="/diagnostico-ia-navarra">
                  {isEs ? 'Solicitar diagnÃ³stico estratÃ©gico' : 'Request strategic diagnosis'} <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default EjemplosIAEmpresasNavarra;





