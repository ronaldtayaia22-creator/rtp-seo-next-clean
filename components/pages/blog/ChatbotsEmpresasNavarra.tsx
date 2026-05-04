'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleProps {
  language: Language;
}
const ChatbotsEmpresasNavarra = ({ language }: ArticleProps) => {
  const isEs = language === 'es';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Chatbots para empresas en Navarra: atención automática con inteligencia artificial",
    "description": "Descubre cómo los chatbots y agentes de inteligencia artificial pueden ayudar a empresas en Navarra a mejorar la atención al cliente y automatizar consultas.",
    "author": { "@type": "Organization", "name": "RTP Digital Solutions" },
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
    "datePublished": "2026-01-23",
    "dateModified": "2026-01-23",
    "mainEntityOfPage": "https://rtpdigitalsolutions.es/blog/chatbots-empresas-navarra",
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
            {isEs ? 'Chatbots para empresas en Navarra' : 'Chatbots for businesses in Navarra'}
          </h1>
          <time className="text-sm text-muted-foreground block mb-12">2026-01-23</time>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Qué es un chatbot empresarial' : 'What is a business chatbot'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Un chatbot empresarial es un programa de software diseñado para interactuar con clientes o empleados de forma automatizada a través de texto o voz. Tradicionalmente, los chatbots funcionan con reglas predefinidas: detectan palabras clave en las consultas y responden con mensajes previamente configurados.'
                : 'A business chatbot is a software program designed to interact with customers or employees in an automated way through text or voice. Traditionally, chatbots work with predefined rules: they detect keywords in queries and respond with pre-configured messages.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? 'En el entorno empresarial, los chatbots se utilizan principalmente para gestionar consultas frecuentes, ofrecer soporte básico y derivar conversaciones complejas al equipo humano. Sin embargo, la evolución de la inteligencia artificial ha transformado lo que estos sistemas pueden hacer.'
                : 'In the business environment, chatbots are primarily used to handle frequent inquiries, offer basic support and route complex conversations to the human team. However, the evolution of artificial intelligence has transformed what these systems can do.'}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo los chatbots ayudan a las empresas' : 'How chatbots help businesses'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Las empresas reciben diariamente decenas o cientos de consultas repetitivas que consumen tiempo y recursos del equipo. Los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> permiten automatizar estas interacciones, ofreciendo respuestas inmediatas y precisas sin intervención humana.</>
                : <>Businesses receive dozens or hundreds of repetitive inquiries daily that consume team time and resources. <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> allow automating these interactions, offering immediate and accurate responses without human intervention.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? 'Un chatbot bien implementado puede resolver el 70-80% de las consultas de forma autónoma, permitiendo que el equipo humano se centre en las situaciones que realmente requieren atención personalizada.'
                : 'A well-implemented chatbot can resolve 70-80% of inquiries autonomously, allowing the human team to focus on situations that truly require personalized attention.'}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Diferencia entre chatbot tradicional y agente de IA' : 'Difference between traditional chatbot and AI agent'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Aunque a menudo se usan como sinónimos, un chatbot tradicional y un agente de IA son tecnologías muy diferentes. Un chatbot clásico funciona con árboles de decisión y respuestas predefinidas: solo puede responder a lo que ha sido programado explícitamente.'
                : 'Although often used as synonyms, a traditional chatbot and an AI agent are very different technologies. A classic chatbot works with decision trees and predefined responses: it can only answer what has been explicitly programmed.'}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Un agente de IA, en cambio, utiliza modelos de lenguaje avanzados para comprender el contexto, interpretar la intención del usuario y generar respuestas naturales y adaptadas a cada situación. Puede acceder a bases de datos, ejecutar acciones y aprender de las interacciones.'
                : 'An AI agent, on the other hand, uses advanced language models to understand context, interpret user intent and generate natural responses adapted to each situation. It can access databases, execute actions and learn from interactions.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Integrar un <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">agente de IA en una página web</Link> ofrece una experiencia conversacional mucho más avanzada que un chatbot básico, con capacidad para resolver consultas complejas de forma autónoma.</>
                : <>Integrating an <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">AI agent on a website</Link> offers a much more advanced conversational experience than a basic chatbot, with the ability to resolve complex queries autonomously.</>}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Usos de chatbots en empresas' : 'Uses of chatbots in businesses'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Los chatbots y agentes de IA se aplican en múltiples áreas dentro de una empresa:'
                : 'Chatbots and AI agents are applied in multiple areas within a business:'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Atención al cliente:</strong> resolución automática de consultas sobre productos, servicios, horarios, precios y disponibilidad.</> : <><strong>Customer service:</strong> automatic resolution of inquiries about products, services, hours, prices and availability.</>}</li>
              <li>{isEs ? <><strong>Soporte en páginas web:</strong> asistencia en tiempo real a los visitantes del sitio web, guiándolos hacia la información o el producto que necesitan.</> : <><strong>Website support:</strong> real-time assistance to website visitors, guiding them to the information or product they need.</>}</li>
              <li>{isEs ? <><strong>Respuestas automáticas:</strong> gestión de preguntas frecuentes sin intervención humana, disponible las 24 horas del día.</> : <><strong>Automatic responses:</strong> FAQ management without human intervention, available 24 hours a day.</>}</li>
              <li>{isEs ? <><strong>Generación de leads:</strong> el agente puede recoger datos de contacto de clientes potenciales, cualificarlos y enviar la información al equipo comercial mediante <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link>.</> : <><strong>Lead generation:</strong> the agent can collect contact data from potential customers, qualify them and send the information to the sales team through <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link>.</>}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios de implementar chatbots en empresas en Navarra' : 'Benefits of implementing chatbots in businesses in Navarra'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Las empresas en Navarra que implementan chatbots o agentes de IA obtienen ventajas competitivas claras:'
                : 'Businesses in Navarra that implement chatbots or AI agents gain clear competitive advantages:'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Disponibilidad 24/7:</strong> los clientes pueden obtener respuestas en cualquier momento, incluso fuera del horario laboral, fines de semana y festivos.</> : <><strong>24/7 availability:</strong> customers can get answers at any time, even outside business hours, weekends and holidays.</>}</li>
              <li>{isEs ? <><strong>Reducción de llamadas:</strong> al resolver automáticamente las consultas más comunes, el volumen de llamadas telefónicas se reduce significativamente.</> : <><strong>Fewer phone calls:</strong> by automatically resolving the most common inquiries, the volume of phone calls is significantly reduced.</>}</li>
              <li>{isEs ? <><strong>Respuestas inmediatas:</strong> los clientes no tienen que esperar en cola ni aguardar a que un agente humano esté disponible.</> : <><strong>Immediate responses:</strong> customers don&apos;t have to wait in line or wait for a human agent to become available.</>}</li>
              <li>{isEs ? <><strong>Mejora de la experiencia del cliente:</strong> atención rápida, personalizada y coherente que genera confianza y profesionalidad.</> : <><strong>Better customer experience:</strong> fast, personalized and consistent service that builds trust and professionalism.</>}</li>
              <li>{isEs ? <><strong>Ahorro de recursos:</strong> el equipo puede dedicar su tiempo a tareas de mayor valor en lugar de gestionar consultas repetitivas.</> : <><strong>Resource savings:</strong> the team can dedicate their time to higher-value tasks instead of managing repetitive inquiries.</>}</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo implementar chatbots o agentes de IA en una empresa' : 'How to implement chatbots or AI agents in a business'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Implementar un chatbot o agente de IA en una empresa es un proceso estructurado y accesible:'
                : 'Implementing a chatbot or AI agent in a business is a structured and accessible process:'}
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Análisis de necesidades:</strong> identificar qué consultas recibe la empresa con más frecuencia y qué tareas pueden automatizarse.</> : <><strong>Needs analysis:</strong> identify which inquiries the business receives most frequently and which tasks can be automated.</>}</li>
              <li>{isEs ? <><strong>Elección de la tecnología:</strong> decidir entre un chatbot basado en reglas o un agente de IA avanzado según la complejidad de las interacciones.</> : <><strong>Technology choice:</strong> decide between a rule-based chatbot or an advanced AI agent based on the complexity of interactions.</>}</li>
              <li>{isEs ? <><strong>Configuración y entrenamiento:</strong> alimentar al sistema con la información de la empresa y configurar los flujos de conversación mediante <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link>.</> : <><strong>Configuration and training:</strong> feed the system with company information and configure conversation flows through <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web development with artificial intelligence</Link>.</>}</li>
              <li>{isEs ? <><strong>Integración en canales:</strong> implementar el chatbot en la web, WhatsApp u otros canales donde los clientes interactúan con la empresa.</> : <><strong>Channel integration:</strong> implement the chatbot on the website, WhatsApp or other channels where customers interact with the business.</>}</li>
              <li>{isEs ? <><strong>Pruebas y optimización:</strong> validar el funcionamiento con usuarios reales y mejorar continuamente las respuestas según los resultados.</> : <><strong>Testing and optimization:</strong> validate operation with real users and continuously improve responses based on results.</>}</li>
            </ol>
          </section>

          {/* Authority link */}
          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Los chatbots y agentes de IA son herramientas clave dentro de las <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">soluciones de IA para empresas en Navarra</Link>. Permiten atender clientes de forma inmediata, reducir costes y escalar la operativa sin ampliar equipo.</>
                : <>Chatbots and AI agents are key tools within <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">AI solutions for businesses in Navarra</Link>. They enable immediate customer service, cost reduction and scaling operations without expanding the team.</>}
            </p>
          </section>

          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Si quieres decidir entre chatbot y agente avanzado, revisa nuestros <Link href="/servicios" className="text-primary hover:underline font-medium">servicios</Link>, la página de <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">IA para empresas en Navarra</Link> y empieza con un <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">diagnóstico estratégico</Link>.</>
                : <>If you want to choose between a chatbot and an advanced agent, review our <Link href="/servicios" className="text-primary hover:underline font-medium">services</Link>, the <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">AI for businesses in Navarra</Link> page, and start with a <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">strategic diagnosis</Link>.</>}
            </p>
          </section>

          {/* CTA Section */}
          <section className="mt-16 p-4 sm:p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Implementa un chatbot o agente de IA en tu empresa' : 'Implement a chatbot or AI agent in your business'}
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

export default ChatbotsEmpresasNavarra;





