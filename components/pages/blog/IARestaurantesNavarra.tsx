'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleProps {
  language: Language;
}
const IARestaurantesNavarra = ({ language }: ArticleProps) => {
  const isEs = language === 'es';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cómo aplicar inteligencia artificial en restaurantes de Navarra: guía práctica",
    "description": "Descubre cómo la inteligencia artificial puede ayudar a restaurantes en Navarra a gestionar reservas, responder clientes y automatizar tareas.",
    "author": { "@type": "Organization", "name": "RTP Digital Solutions" },
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
    "datePublished": "2026-02-06",
    "dateModified": "2026-02-06",
    "mainEntityOfPage": "https://rtpdigitalsolutions.es/blog/ia-para-restaurantes-navarra",
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
            {isEs ? 'Cómo aplicar inteligencia artificial en restaurantes de Navarra' : 'How to apply artificial intelligence in restaurants in Navarra'}
          </h1>
          <time className="text-sm text-muted-foreground block mb-12">2026-02-06</time>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo la inteligencia artificial está transformando los restaurantes' : 'How artificial intelligence is transforming restaurants'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'La hostelería es uno de los sectores donde la inteligencia artificial puede generar un mayor impacto operativo. Los restaurantes gestionan diariamente decenas de reservas, consultas sobre el menú, horarios y disponibilidad, tareas que consumen tiempo y recursos del equipo.'
                : 'Hospitality is one of the sectors where artificial intelligence can generate the greatest operational impact. Restaurants manage dozens of reservations, menu inquiries, schedules and availability daily â€” tasks that consume team time and resources.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Con la IA, los restaurantes en Navarra pueden automatizar estas gestiones, mejorar la experiencia del cliente y liberar al personal para centrarse en lo que realmente importa: la atención presencial y la calidad del servicio. Descubre todas las <Link href="/ia-restaurantes-navarra" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial para restaurantes en Navarra</Link>.</>
                : <>With AI, restaurants in Navarra can automate these tasks, improve the customer experience and free staff to focus on what really matters: in-person service and quality. Discover all the <Link href="/ia-restaurantes-navarra" className="text-primary hover:underline font-medium">AI solutions for restaurants in Navarra</Link>.</>}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Automatización de reservas y atención al cliente' : 'Reservation automation and customer service'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>La <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link> en un restaurante permite gestionar reservas sin intervención humana. Un agente de IA puede recibir solicitudes de reserva a través de la web, confirmar disponibilidad en tiempo real, enviar confirmaciones automáticas y recordatorios antes de la fecha.</>
                : <>The <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link> in a restaurant enables managing reservations without human intervention. An AI agent can receive booking requests through the website, confirm availability in real time, send automatic confirmations and reminders before the date.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? 'Además, el agente puede responder preguntas frecuentes como horarios de apertura, opciones para alérgenos, menús del día o disponibilidad para grupos, todo ello de forma inmediata y sin necesidad de que el personal del restaurante atienda el teléfono.'
                : 'Additionally, the agent can answer frequently asked questions such as opening hours, allergen options, daily menus or group availability â€” all immediately and without restaurant staff needing to answer the phone.'}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Agentes de IA para páginas web de restaurantes' : 'AI agents for restaurant websites'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Integrar un <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">agente de IA en la página web de un restaurante</Link> transforma la web en un canal de atención activo. En lugar de ser un sitio estático con información, la web se convierte en un asistente que interactúa con los clientes y resuelve sus necesidades al instante.</>
                : <>Integrating an <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">AI agent on a restaurant&apos;s website</Link> transforms the site into an active service channel. Instead of being a static site with information, the website becomes an assistant that interacts with customers and resolves their needs instantly.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>El agente puede integrarse con el sistema de reservas existente y conectarse a la información del restaurante mediante <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link>, ofreciendo una experiencia fluida y profesional.</>
                : <>The agent can integrate with the existing reservation system and connect to the restaurant&apos;s information through <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web development with artificial intelligence</Link>, offering a smooth and professional experience.</>}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios de implementar IA en restaurantes' : 'Benefits of implementing AI in restaurants'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Los restaurantes que adoptan inteligencia artificial obtienen ventajas competitivas claras:'
                : 'Restaurants that adopt artificial intelligence gain clear competitive advantages:'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Atención al cliente 24/7:</strong> los clientes pueden consultar disponibilidad, ver el menú y reservar mesa en cualquier momento, incluso cuando el restaurante está cerrado.</> : <><strong>24/7 customer service:</strong> customers can check availability, view the menu and book a table at any time, even when the restaurant is closed.</>}</li>
              <li>{isEs ? <><strong>Automatización de reservas:</strong> el sistema gestiona reservas, confirmaciones y cancelaciones sin necesidad de atención manual.</> : <><strong>Reservation automation:</strong> the system manages bookings, confirmations and cancellations without manual attention.</>}</li>
              <li>{isEs ? <><strong>Reducción de llamadas:</strong> al resolver las consultas más frecuentes de forma automática, el volumen de llamadas telefónicas se reduce significativamente.</> : <><strong>Fewer phone calls:</strong> by automatically resolving the most frequent inquiries, the volume of phone calls is significantly reduced.</>}</li>
              <li>{isEs ? <><strong>Mejora de la experiencia del cliente:</strong> respuestas inmediatas, atención personalizada y gestión ágil generan una impresión profesional y moderna.</> : <><strong>Better customer experience:</strong> immediate responses, personalized attention and agile management create a professional and modern impression.</>}</li>
              <li>{isEs ? <><strong>Más tiempo para el servicio:</strong> el equipo del restaurante puede dedicar toda su atención al servicio en sala en lugar de gestionar consultas repetitivas.</> : <><strong>More time for service:</strong> the restaurant team can dedicate all their attention to table service instead of managing repetitive inquiries.</>}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Ejemplos de uso de IA en restaurantes' : 'Examples of AI use in restaurants'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> se adaptan perfectamente al sector de la hostelería:</>
                : <>The <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> adapt perfectly to the hospitality sector:</>}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Gestión automática de reservas:</strong> el agente recibe solicitudes, comprueba disponibilidad y confirma la reserva de forma instantánea, incluyendo opciones para grupos grandes o eventos especiales.</> : <><strong>Automatic reservation management:</strong> the agent receives requests, checks availability and confirms the booking instantly, including options for large groups or special events.</>}</li>
              <li>{isEs ? <><strong>Respuestas automáticas en la web:</strong> información sobre el menú, alérgenos, horarios, ubicación y opciones de parking, disponible al instante para cada visitante.</> : <><strong>Automatic website responses:</strong> information about the menu, allergens, hours, location and parking options, instantly available to every visitor.</>}</li>
              <li>{isEs ? <><strong>Asistente para preguntas frecuentes:</strong> el agente resuelve las dudas más comunes como si hay terraza, si admiten mascotas, si ofrecen menú infantil o si disponen de opciones vegetarianas.</> : <><strong>FAQ assistant:</strong> the agent resolves the most common questions such as whether there&apos;s a terrace, if pets are allowed, if they offer a children&apos;s menu or if vegetarian options are available.</>}</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo un restaurante en Navarra puede implementar IA' : 'How a restaurant in Navarra can implement AI'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Implementar inteligencia artificial en un restaurante es un proceso sencillo y progresivo:'
                : 'Implementing artificial intelligence in a restaurant is a simple and progressive process:'}
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Análisis de necesidades:</strong> identificar qué tareas consumen más tiempo del equipo, como atender llamadas para reservas o responder preguntas repetitivas.</> : <><strong>Needs analysis:</strong> identify which tasks consume the most team time, such as answering reservation calls or responding to repetitive questions.</>}</li>
              <li>{isEs ? <><strong>Diseño del agente:</strong> configurar el agente de IA con la información del restaurante: menú, horarios, política de reservas, servicios especiales y preguntas frecuentes.</> : <><strong>Agent design:</strong> configure the AI agent with restaurant information: menu, hours, reservation policy, special services and frequently asked questions.</>}</li>
              <li>{isEs ? <><strong>Integración en la web:</strong> implementar el agente en la página web del restaurante para que los clientes puedan interactuar con él de forma natural.</> : <><strong>Website integration:</strong> implement the agent on the restaurant&apos;s website so customers can interact with it naturally.</>}</li>
              <li>{isEs ? <><strong>Pruebas con clientes reales:</strong> validar el funcionamiento del agente con situaciones reales y ajustar las respuestas según el feedback recibido.</> : <><strong>Testing with real customers:</strong> validate the agent&apos;s operation with real situations and adjust responses based on feedback received.</>}</li>
              <li>{isEs ? <><strong>Optimización continua:</strong> mejorar el agente con el tiempo, añadiendo nuevas capacidades como gestión de eventos, promociones o encuestas de satisfacción.</> : <><strong>Continuous optimization:</strong> improve the agent over time, adding new capabilities such as event management, promotions or satisfaction surveys.</>}</li>
            </ol>
          </section>

          {/* Authority link */}
          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>La hostelería es uno de los sectores con mayor potencial para <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">implementar inteligencia artificial en Navarra</Link>. Automatizar reservas, atención al cliente y gestión interna permite a los restaurantes centrarse en lo que mejor saben hacer.</>
                : <>Hospitality is one of the sectors with the greatest potential to <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">implement artificial intelligence in Navarra</Link>. Automating reservations, customer service and internal management allows restaurants to focus on what they do best.</>}
            </p>
          </section>

          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Para implementarlo de forma rentable, revisa nuestros <Link href="/servicios" className="text-primary hover:underline font-medium">servicios</Link>, la estrategia de <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">IA para empresas en Navarra</Link> y comienza con un <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">diagnóstico estratégico</Link>.</>
                : <>To implement it profitably, review our <Link href="/servicios" className="text-primary hover:underline font-medium">services</Link>, the <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">AI for businesses in Navarra</Link> strategy, and start with a <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">strategic diagnosis</Link>.</>}
            </p>
          </section>

          {/* CTA Section */}
          <section className="mt-16 p-4 sm:p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Implementa inteligencia artificial en tu restaurante' : 'Implement artificial intelligence in your restaurant'}
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

export default IARestaurantesNavarra;





