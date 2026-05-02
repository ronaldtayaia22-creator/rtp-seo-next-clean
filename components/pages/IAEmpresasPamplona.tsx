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
              ? 'En la practica, no se trata solo de aplicar herramientas sueltas como automatizaciones o chatbots. Para que tenga impacto real en una empresa en Pamplona, es necesario implantar un sistema completo que conecte procesos, clientes y operaciones.'
              : 'In practice, it is not only about applying isolated tools such as automations or chatbots. For it to have real impact in a company in Pamplona, it is necessary to implement a complete system that connects processes, customers and operations.'}
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

          {/* Local proof block */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo aplicamos IA en empresas de Pamplona' : 'How we apply AI in businesses in Pamplona'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Trabajamos con un enfoque operativo: priorizamos tareas que afectan ventas, atencion y tiempos de respuesta para que la IA impacte en resultados desde el inicio.'
                : 'We work with an operational approach: we prioritize tasks that affect sales, support, and response times so AI impacts results from the start.'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Clinicas:</strong> gestion de citas, recordatorios y captacion de primeras consultas sin saturar recepcion.</> : <><strong>Clinics:</strong> appointment handling, reminders, and first-visit lead capture without overloading reception.</>}</li>
              <li>{isEs ? <><strong>Comercios:</strong> atencion automatizada por web y WhatsApp para responder rapido y mejorar conversion en momentos de alta demanda.</> : <><strong>Retail:</strong> automated support on web and WhatsApp to respond quickly and improve conversion during peak demand.</>}</li>
              <li>{isEs ? <><strong>Restaurantes:</strong> reservas y respuestas frecuentes automatizadas para reducir llamadas perdidas y errores de coordinacion.</> : <><strong>Restaurants:</strong> automated reservations and frequent responses to reduce missed calls and coordination errors.</>}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {isEs
                ? 'En Pamplona esto es clave para negocio de barrio: competir mejor en un mercado con competencia local y sostener captacion constante en el entorno Pamplona sin depender de mas carga manual.'
                : 'In Pamplona this is key for neighborhood businesses: competing better in a local market and sustaining lead capture in the Pamplona area without adding manual workload.'}
            </p>
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
                  {isEs ? 'Clínica en Pamplona' : 'Clinic in Pamplona'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'Problema: pacientes que no confirman cita o no vuelven tras la primera visita. Solución: automatización de recordatorios, confirmación de asistencia y seguimiento post-consulta. Resultado esperado: más citas confirmadas, menos huecos en agenda y mayor recurrencia de pacientes.'
                    : 'Problem: patients who do not confirm appointments or do not return after the first visit. Solution: automated reminders, attendance confirmation, and post-visit follow-up. Expected result: more confirmed appointments, fewer empty slots, and higher patient recurrence.'}
                </p>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Comercio en Pamplona' : 'Retail business in Pamplona'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'Problema: consultas repetidas por WhatsApp y web sin respuesta rápida, con pérdida de oportunidades de venta. Solución: asistente IA para atención inmediata, clasificación de consultas y seguimiento automático de interesados. Resultado esperado: más conversiones, menos abandono y ahorro de tiempo del equipo.'
                    : 'Problem: repeated WhatsApp and web inquiries without fast responses, causing lost sales opportunities. Solution: AI assistant for immediate support, inquiry classification, and automated follow-up for interested leads. Expected result: more conversions, less drop-off, and team time savings.'}
                </p>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Restaurante en Pamplona' : 'Restaurant in Pamplona'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'Problema: llamadas perdidas en horas punta y reservas desordenadas en varios canales. Solución: automatización de reservas, respuestas frecuentes y confirmaciones previas al servicio. Resultado esperado: más mesas ocupadas, menos errores operativos y mejor experiencia del cliente.'
                    : 'Problem: missed calls at peak times and disorganized reservations across multiple channels. Solution: reservation automation, frequent answer handling, and pre-service confirmations. Expected result: more occupied tables, fewer operational errors, and a better customer experience.'}
                </p>
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



