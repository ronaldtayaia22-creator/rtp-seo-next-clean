'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Props {
  language: Language;
}

const IAEmpresasPamplona = ({ language }: Props) => {
  const isEs = language === 'es';

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Inteligencia artificial para empresas en Pamplona",
    "description": "Soluciones de inteligencia artificial para empresas en Pamplona: automatización de procesos, agentes IA y asistentes inteligentes.",
    "url": "https://rtpdigitalsolutions.es/ia-empresas-pamplona",
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {isEs ? 'Inteligencia artificial para empresas en Pamplona' : 'Artificial intelligence for businesses in Pamplona'}
          </h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            {isEs
              ? <>Automatiza procesos, activa estrategias de <strong>marketing automation Pamplona</strong> y mejora la atencion al cliente para captar mas oportunidades en tu empresa. Descubre como lo aplicamos en nuestras <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial en Navarra</Link>.</>
              : <>Automate processes, improve customer service and increase your business efficiency in Pamplona with our <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence solutions in Navarra</Link>.</>}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-16">
            {isEs
              ? <>Si buscas implementar ya, revisa la <Link href="/servicios" className="text-primary hover:underline font-medium">pagina de servicios de IA para empresas en Navarra</Link>, donde explicamos alcance, metodologia y siguientes pasos.</>
              : <>If you are ready to implement now, review the <Link href="/servicios" className="text-primary hover:underline font-medium">AI services page for businesses in Navarra</Link>, where we explain scope, methodology and next steps.</>}
          </p>

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo la inteligencia artificial ayuda a empresas en Pamplona' : 'How artificial intelligence helps businesses in Pamplona'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Las empresas en Pamplona se enfrentan a los mismos retos que cualquier negocio moderno: clientes que esperan respuestas inmediatas, procesos internos que consumen demasiado tiempo y la necesidad de hacer más con menos recursos.'
                : 'Businesses in Pamplona face the same challenges as any modern business: customers who expect immediate responses, internal processes that consume too much time and the need to do more with fewer resources.'}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>La inteligencia artificial permite abordar estos retos de forma práctica. Los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> pueden responder consultas las 24 horas del día, mientras que la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link> elimina tareas repetitivas que consumen tiempo del equipo.</>
                : <>Artificial intelligence allows addressing these challenges practically. <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> can answer queries 24 hours a day, while <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link> eliminates repetitive tasks that consume team time.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? 'Ya no es necesario ser una gran empresa para acceder a estas tecnologías. Hoy, cualquier negocio en Pamplona puede implementar soluciones de IA de forma progresiva y con resultados medibles desde el primer día.'
                : 'It is no longer necessary to be a large company to access these technologies. Today, any business in Pamplona can implement AI solutions progressively with measurable results from day one.'}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Soluciones de inteligencia artificial y marketing automation en Pamplona' : 'Artificial intelligence and marketing automation solutions in Pamplona'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Existen diferentes soluciones de IA que se adaptan a las necesidades de cada empresa en Pamplona:'
                : 'There are different AI solutions that adapt to the needs of each business in Pamplona:'}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Una linea prioritaria para muchas pymes locales es el marketing automation Pamplona: seguimiento automatico de leads, recuperacion de oportunidades y nutricion comercial sin depender de tareas manuales.'
                : 'A priority line for many local SMBs is marketing automation in Pamplona: automatic lead follow-up, opportunity recovery, and commercial nurturing without relying on manual tasks.'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Agentes de IA:</strong> asistentes inteligentes que interactúan con clientes de forma autónoma, resolviendo consultas, gestionando solicitudes y derivando casos complejos al equipo humano.</> : <><strong>AI agents:</strong> intelligent assistants that interact with customers autonomously, resolving queries, managing requests and routing complex cases to the human team.</>}</li>
              <li>{isEs ? <><strong>Automatización de procesos:</strong> sistemas que ejecutan tareas repetitivas como gestión de correos, programación de citas, generación de informes o procesamiento de documentos.</> : <><strong>Process automation:</strong> systems that execute repetitive tasks such as email management, appointment scheduling, report generation or document processing.</>}</li>
              <li>{isEs ? <><strong>Asistentes en páginas web:</strong> agentes de IA integrados en el sitio web de la empresa que atienden a los visitantes en tiempo real, gracias al <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link>.</> : <><strong>Website assistants:</strong> AI agents integrated into the company website that serve visitors in real time, thanks to <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web development with artificial intelligence</Link>.</>}</li>
              <li>{isEs ? <><strong>Sistemas de conocimiento con IA:</strong> bases de datos inteligentes que centralizan toda la información de la empresa y permiten a los agentes responder con precisión y contexto.</> : <><strong>AI knowledge systems:</strong> intelligent databases that centralize all company information and allow agents to respond with precision and context.</>}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Sectores en Pamplona que pueden beneficiarse de la IA' : 'Sectors in Pamplona that can benefit from AI'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'La inteligencia artificial se adapta a todo tipo de sectores. En Pamplona, estos son algunos de los que más pueden beneficiarse:'
                : 'Artificial intelligence adapts to all types of sectors. In Pamplona, these are some of those that can benefit the most:'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Clínicas y centros de salud:</strong> automatización de citas, atención al paciente 24/7 y gestión de consultas frecuentes.</> : <><strong>Clinics and health centers:</strong> appointment automation, 24/7 patient care and FAQ management.</>}</li>
              <li>{isEs ? <><strong>Restaurantes:</strong> gestión automática de reservas, respuestas sobre menú y disponibilidad, y atención al cliente fuera de horario.</> : <><strong>Restaurants:</strong> automatic reservation management, menu and availability responses, and off-hours customer service.</>}</li>
              <li>{isEs ? <><strong>Comercios:</strong> asistencia en la web, recomendaciones de productos, resolución de dudas sobre envíos y devoluciones.</> : <><strong>Retail:</strong> website assistance, product recommendations, shipping and return query resolution.</>}</li>
              <li>{isEs ? <><strong>Empresas de servicios:</strong> presupuestos automáticos, gestión de reservas y atención personalizada a cada cliente.</> : <><strong>Service companies:</strong> automatic quotes, booking management and personalized attention to each client.</>}</li>
              <li>{isEs ? <><strong>Empresas industriales:</strong> monitorización de producción, gestión de incidencias y automatización de informes internos.</> : <><strong>Industrial companies:</strong> production monitoring, incident management and internal report automation.</>}</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo implementar inteligencia artificial en una empresa' : 'How to implement artificial intelligence in a business'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Implementar IA en una empresa en Pamplona es un proceso progresivo y accesible:'
                : 'Implementing AI in a business in Pamplona is a progressive and accessible process:'}
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Diagnóstico estratégico:</strong> identificar los procesos que más tiempo y recursos consumen. Puedes empezar con un <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">diagnóstico estratégico gratuito</Link>.</> : <><strong>Strategic diagnosis:</strong> identify the processes that consume the most time and resources. You can start with a <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">free strategic diagnosis</Link>.</>}</li>
              <li>{isEs ? <><strong>Diseño de la solución:</strong> seleccionar las herramientas de IA más adecuadas para cada necesidad específica de la empresa.</> : <><strong>Solution design:</strong> select the most appropriate AI tools for each specific business need.</>}</li>
              <li>{isEs ? <><strong>Desarrollo e integración:</strong> construir los agentes o automatizaciones e integrarlos con los sistemas existentes de la empresa.</> : <><strong>Development and integration:</strong> build the agents or automations and integrate them with the existing company systems.</>}</li>
              <li>{isEs ? <><strong>Pruebas y ajustes:</strong> validar el funcionamiento con situaciones reales y ajustar los parámetros para optimizar los resultados.</> : <><strong>Testing and adjustments:</strong> validate operation with real situations and adjust parameters to optimize results.</>}</li>
              <li>{isEs ? <><strong>Escalado:</strong> una vez validada la solución, ampliarla a otros procesos y áreas del negocio.</> : <><strong>Scaling:</strong> once the solution is validated, extend it to other processes and business areas.</>}</li>
            </ol>
          </section>

          {/* Casos reales */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos reales de inteligencia artificial en Pamplona' : 'Real cases of artificial intelligence in Pamplona'}
            </h2>

            <div className="space-y-6">
              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Plataforma inteligente de destino turístico en Pamplona' : 'Intelligent tourist destination platform in Pamplona'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'El Ayuntamiento de Pamplona ha adjudicado el contrato para diseñar una plataforma inteligente de destino (PAM-IRU DIG) que recopilará y analizará información sobre eficiencia, seguridad y calidad en la gestión turística mediante inteligencia artificial.'
                    : 'Pamplona City Council has awarded the contract to design an intelligent destination platform (PAM-IRU DIG) that will collect and analyze information on efficiency, safety and quality in tourism management through artificial intelligence.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Diario de Navarra
                </p>
                <a href="https://www.diariodenavarra.es/noticias/navarra/pamplona-comarca/2026/02/18/adjudicado-contrato-disenar-plataforma-inteligente-destino-mejore-experiencia-turistica-pamplona-810615-16.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Proyecto TwIN: gemelos digitales en Navarra y Pamplona' : 'TwIN Project: digital twins in Navarra and Pamplona'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'El Gobierno foral y el Ayuntamiento de Pamplona han presentado el proyecto TwIN, que impulsa la innovación mediante gemelos digitales territoriales, combinando inteligencia artificial y datos para mejorar la toma de decisiones.'
                    : 'The regional Government and Pamplona City Council have presented the TwIN project, which drives innovation through territorial digital twins, combining artificial intelligence and data to improve decision-making.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Diario de Navarra
                </p>
                <a href="https://www.diariodenavarra.es/noticias/negocios/dn-management/retos/2025/05/26/navarra-pamplona-impulsan-futuro-el-proyecto-twin-gemelos-digitales-servicio-innovacion-el-emprendimiento-648650-3382.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Irati: agente inteligente de la Cámara de Comercio de Navarra' : 'Irati: intelligent agent by the Chamber of Commerce of Navarra'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'La Cámara de Comercio de Navarra ha presentado Irati, un agente inteligente desarrollado con inteligencia artificial para impulsar el emprendimiento, ofreciendo información contrastada a partir del conocimiento acumulado durante 27 años.'
                    : 'The Chamber of Commerce of Navarra has presented Irati, an intelligent agent developed with artificial intelligence to boost entrepreneurship, offering verified information based on 27 years of accumulated knowledge.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> {isEs ? 'Cámara de Comercio de Navarra' : 'Chamber of Commerce of Navarra'}
                </p>
                <a href="https://camaranavarra.com/category/digitalizacion/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Implementa inteligencia artificial en tu empresa en Pamplona' : 'Implement artificial intelligence in your business in Pamplona'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Solicita un diagnóstico estratégico gratuito y descubre qué soluciones de IA y marketing automation pueden transformar tu empresa en Pamplona.'
                : 'Request a free strategic diagnosis and discover which AI and marketing automation solutions can transform your business in Pamplona.'}
            </p>
            <Link href="/diagnostico-ia-navarra">
              <Button size="lg" className="gap-2">
                {isEs ? 'Solicitar diagnóstico gratuito' : 'Request free diagnosis'} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default IAEmpresasPamplona;



