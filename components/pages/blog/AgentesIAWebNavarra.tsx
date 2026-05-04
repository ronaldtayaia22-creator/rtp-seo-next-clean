'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleProps {
  language: Language;
}
const AgentesIAWebNavarra = ({ language }: ArticleProps) => {
  const isEs = language === 'es';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Agentes de IA para páginas web en Navarra: atención inteligente 24/7",
    "description": "Descubre cómo integrar agentes de inteligencia artificial en páginas web para mejorar la atención al cliente y automatizar procesos empresariales.",
    "author": { "@type": "Organization", "name": "RTP Digital Solutions" },
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
    "datePublished": "2026-02-20",
    "dateModified": "2026-02-20",
    "mainEntityOfPage": "https://rtpdigitalsolutions.es/blog/agentes-ia-para-paginas-web-navarra",
    "inLanguage": isEs ? "es" : "en"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
            <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-primary transition-colors">â† {isEs ? 'Volver al blog' : 'Back to blog'}</Link>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {isEs ? 'Agentes de IA para páginas web en Navarra' : 'AI Agents for websites in Navarra'}
          </h1>
          <time className="text-sm text-muted-foreground block mb-12">2026-02-20</time>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Qué es un agente de IA para una página web' : 'What is an AI agent for a website'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Un agente de IA para páginas web es un sistema de inteligencia artificial integrado directamente en un sitio web que puede interactuar con los visitantes de forma autónoma. A diferencia de un chatbot tradicional basado en reglas, un agente de IA comprende el lenguaje natural, interpreta la intención del usuario y ofrece respuestas personalizadas en tiempo real.'
                : 'An AI agent for websites is an artificial intelligence system integrated directly into a website that can interact with visitors autonomously. Unlike a traditional rule-based chatbot, an AI agent understands natural language, interprets user intent and provides personalized responses in real time.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Estos agentes pueden conectarse a bases de datos, sistemas internos y <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">bases de conocimiento empresariales</Link> para ofrecer información precisa y actualizada a cada visitante.</>
                : <>These agents can connect to databases, internal systems and <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">enterprise knowledge bases</Link> to provide accurate and up-to-date information to each visitor.</>}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo funcionan los agentes de IA integrados en una web' : 'How AI agents integrated in a website work'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Cuando un visitante accede a una página web con un agente de IA, el sistema analiza su consulta utilizando procesamiento de lenguaje natural. A partir de ahí, busca la información más relevante en las fuentes de datos conectadas y genera una respuesta clara y contextualizada.'
                : 'When a visitor accesses a website with an AI agent, the system analyzes their query using natural language processing. From there, it searches for the most relevant information in connected data sources and generates a clear, contextualized response.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>El agente puede realizar acciones como agendar citas, recoger datos de contacto, derivar consultas complejas a un humano o guiar al usuario hacia los productos y servicios más adecuados. Todo esto se integra de forma fluida en el <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link>.</>
                : <>The agent can perform actions like scheduling appointments, collecting contact data, routing complex queries to a human or guiding users to the most suitable products and services. All of this integrates seamlessly into <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web development with artificial intelligence</Link>.</>}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios de integrar un agente de IA en una página web' : 'Benefits of integrating an AI agent in a website'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Integrar un agente de IA en una página web aporta ventajas inmediatas para cualquier empresa:'
                : 'Integrating an AI agent in a website provides immediate advantages for any business:'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Atención al cliente 24/7:</strong> el agente está disponible en todo momento, incluso fuera del horario laboral, fines de semana y festivos.</> : <><strong>24/7 customer service:</strong> the agent is available at all times, even outside business hours, weekends and holidays.</>}</li>
              <li>{isEs ? <><strong>Respuestas automáticas e inmediatas:</strong> los visitantes obtienen respuestas al instante sin tiempos de espera.</> : <><strong>Instant automatic responses:</strong> visitors get answers instantly without waiting times.</>}</li>
              <li>{isEs ? <><strong>Generación de leads:</strong> el agente puede recoger datos de contacto y cualificar potenciales clientes de forma automática.</> : <><strong>Lead generation:</strong> the agent can collect contact data and qualify potential customers automatically.</>}</li>
              <li>{isEs ? <><strong>Automatización de consultas frecuentes:</strong> las preguntas más comunes se resuelven sin intervención humana, liberando al equipo para tareas de mayor valor.</> : <><strong>FAQ automation:</strong> the most common questions are resolved without human intervention, freeing the team for higher-value tasks.</>}</li>
              <li>{isEs ? <><strong>Experiencia personalizada:</strong> cada interacción se adapta al contexto y las necesidades del visitante.</> : <><strong>Personalized experience:</strong> each interaction adapts to the visitor&apos;s context and needs.</>}</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos de uso de agentes de IA en páginas web' : 'Use cases of AI agents on websites'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> pueden adaptarse a múltiples sectores y tipos de negocio:</>
                : <>The <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> can adapt to multiple sectors and business types:</>}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Clínicas y centros de salud:</strong> gestión de citas online, resolución de dudas sobre servicios y seguimiento de pacientes.</> : <><strong>Clinics and health centers:</strong> online appointment management, answering questions about services and patient follow-up.</>}</li>
              <li>{isEs ? <><strong>Tiendas online:</strong> asistencia en el proceso de compra, recomendaciones de productos y resolución de incidencias postventa.</> : <><strong>Online stores:</strong> purchase process assistance, product recommendations and post-sale issue resolution.</>}</li>
              <li>{isEs ? <><strong>Empresas de servicios:</strong> presupuestos automáticos, reservas y atención personalizada según el tipo de servicio.</> : <><strong>Service companies:</strong> automatic quotes, bookings and personalized attention based on service type.</>}</li>
              <li>{isEs ? <><strong>Academias y centros de formación:</strong> información sobre cursos, inscripciones y seguimiento del progreso de los alumnos.</> : <><strong>Academies and training centers:</strong> course information, enrollments and student progress tracking.</>}</li>
              <li>{isEs ? <><strong>Inmobiliarias:</strong> filtrado de propiedades según preferencias, programación de visitas y resolución de consultas sobre inmuebles.</> : <><strong>Real estate agencies:</strong> property filtering by preferences, visit scheduling and property query resolution.</>}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo integrar un agente de IA en una web empresarial' : 'How to integrate an AI agent in a business website'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'La integración de un agente de IA en una página web empresarial sigue un proceso estructurado:'
                : 'Integrating an AI agent in a business website follows a structured process:'}
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Análisis de necesidades:</strong> identificar qué tareas debe resolver el agente y qué información necesita para funcionar.</> : <><strong>Needs analysis:</strong> identify what tasks the agent should handle and what information it needs to function.</>}</li>
              <li>{isEs ? <><strong>Configuración de la base de conocimiento:</strong> conectar el agente a los datos de la empresa, documentos, FAQs y sistemas internos mediante <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">tecnología RAG</Link>.</> : <><strong>Knowledge base setup:</strong> connect the agent to company data, documents, FAQs and internal systems using <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">RAG technology</Link>.</>}</li>
              <li>{isEs ? <><strong>Diseño de la experiencia:</strong> definir cómo interactúa el agente con los visitantes, qué tono utiliza y qué acciones puede ejecutar.</> : <><strong>Experience design:</strong> define how the agent interacts with visitors, what tone it uses and what actions it can perform.</>}</li>
              <li>{isEs ? <><strong>Integración técnica:</strong> implementar el agente en la web existente de forma que funcione de manera fluida y sin afectar al rendimiento del sitio.</> : <><strong>Technical integration:</strong> implement the agent on the existing website so it works smoothly without affecting site performance.</>}</li>
              <li>{isEs ? <><strong>Pruebas y optimización:</strong> validar el funcionamiento con usuarios reales y ajustar las respuestas y flujos según los resultados.</> : <><strong>Testing and optimization:</strong> validate operation with real users and adjust responses and flows based on results.</>}</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Ejemplo de implementación para empresas en Navarra' : 'Implementation example for businesses in Navarra'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Imaginemos una clínica dental en Pamplona que recibe decenas de llamadas y correos diarios para agendar citas, consultar horarios o resolver dudas sobre tratamientos. Al integrar un agente de IA en su página web, la clínica puede <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatizar estos procesos</Link> por completo.</>
                : <>Imagine a dental clinic in Pamplona that receives dozens of daily calls and emails to schedule appointments, check hours or answer questions about treatments. By integrating an AI agent on their website, the clinic can <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">fully automate these processes</Link>.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'El agente responde instantáneamente a las consultas de los pacientes, les permite reservar cita directamente desde la web, envía recordatorios automáticos y resuelve las preguntas más frecuentes sin necesidad de que el personal de recepción intervenga.'
                : 'The agent instantly responds to patient queries, allows them to book appointments directly from the website, sends automatic reminders and resolves the most frequently asked questions without reception staff intervention.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? 'El resultado: menos llamadas, menos carga administrativa, mejor experiencia para el paciente y más tiempo para que el equipo se centre en la atención presencial.'
                : 'The result: fewer calls, less administrative burden, better patient experience and more time for the team to focus on in-person care.'}
            </p>
          </section>

          {/* Authority link */}
          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Integrar agentes de IA en páginas web es una de las formas más efectivas de <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">implementar inteligencia artificial en Navarra</Link>. Tu web pasa de ser un escaparate estático a un sistema inteligente que capta y atiende clientes de forma autónoma.</>
                : <>Integrating AI agents into websites is one of the most effective ways to <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">implement artificial intelligence in Navarra</Link>. Your website goes from a static showcase to an intelligent system that captures and serves customers autonomously.</>}
            </p>
          </section>

          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Para definir el mejor enfoque para tu web, puedes revisar nuestros <Link href="/servicios" className="text-primary hover:underline font-medium">servicios</Link>, la solución principal de <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">IA para empresas en Navarra</Link> y comenzar por un <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">diagnóstico estratégico</Link>.</>
                : <>To define the best approach for your website, review our <Link href="/servicios" className="text-primary hover:underline font-medium">services</Link>, the main <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">AI for businesses in Navarra</Link> solution, and start with a <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">strategic diagnosis</Link>.</>}
            </p>
          </section>

          {/* CTA Section */}
          <section className="mt-16 p-4 sm:p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Integra un agente de IA en tu página web' : 'Integrate an AI agent in your website'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Si quieres implementar inteligencia artificial en tu empresa en Navarra, solicita un diagnóstico estratégico personalizado.'
                : 'If you want to implement artificial intelligence in your business in Navarra, request a personalized strategic diagnosis.'}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto gap-2">
              <Link href="/diagnostico-ia-navarra">
                {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </section>
        </div>
      </article>
    </>
  );
};

export default AgentesIAWebNavarra;





