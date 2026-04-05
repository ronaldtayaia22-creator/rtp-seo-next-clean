'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Props {
  language: Language;
}

const LOVABLE = process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app';

const IARestaurantesNavarra = ({ language }: Props) => {
  const isEs = language === 'es';

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Inteligencia artificial para restaurantes en Navarra",
    "description": "Sistemas de inteligencia artificial para restaurantes en Navarra y Pamplona: automatización de reservas, atención al cliente 24/7, cartas digitales inteligentes y fidelización.",
    "url": "https://rtpdigitalsolutions.es/ia-restaurantes-navarra",
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
  };

  return (
    <>
            <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {isEs ? 'Inteligencia artificial para restaurantes en Navarra' : 'Artificial intelligence for restaurants in Navarra'}
          </h1>

          {/* Strategic intro */}
          <div className="text-lg text-muted-foreground mb-6 max-w-2xl space-y-4">
            <p>
              {isEs
                ? 'La gestión de un restaurante ya no puede depender de llamadas, reservas manuales y atención limitada.'
                : 'Restaurant management can no longer rely on phone calls, manual reservations and limited service.'}
            </p>
            <p>
              {isEs
                ? <>Hoy, los restaurantes más eficientes en Navarra y especialmente en Pamplona funcionan como sistemas digitales: automatizan reservas, responden a clientes al instante, gestionan pedidos y optimizan toda su operativa diaria con <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">inteligencia artificial</Link>.</>
                : <>Today, the most efficient restaurants in Navarra and especially in Pamplona operate as digital systems: they automate reservations, respond to customers instantly, manage orders and optimize all daily operations with <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence</Link>.</>}
            </p>
            <p>
              {isEs
                ? 'La inteligencia artificial permite convertir tu restaurante en un sistema conectado que trabaja 24/7, mejora la experiencia del cliente y aumenta la facturación.'
                : 'Artificial intelligence allows you to turn your restaurant into a connected system that works 24/7, improves the customer experience and increases revenue.'}
            </p>
          </div>

          {/* System vision block */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Tu restaurante como sistema inteligente' : 'Your restaurant as an intelligent system'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  {isEs ? 'Un cliente puede:' : 'A customer can:'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Consultar el menú completo con descripciones, ingredientes y alérgenos' : 'Check the full menu with descriptions, ingredients and allergens'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Saber si un plato es picante, vegano o apto para intolerancias' : 'Know if a dish is spicy, vegan or suitable for intolerances'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Reservar mesa automáticamente en segundos' : 'Book a table automatically in seconds'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Recibir recomendaciones personalizadas según preferencias' : 'Receive personalized recommendations based on preferences'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Hacer pedidos o consultas sin esperar respuesta humana' : 'Place orders or make inquiries without waiting for a human response'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  {isEs ? 'El negocio puede:' : 'The business can:'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Gestionar reservas sin llamadas ni errores' : 'Manage reservations without calls or errors'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Automatizar confirmaciones y recordatorios' : 'Automate confirmations and reminders'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Organizar turnos y disponibilidad de mesas' : 'Organize shifts and table availability'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Centralizar clientes y datos en una base estructurada' : 'Centralize customers and data in a structured database'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Enviar promociones, eventos o campañas a su base de datos' : 'Send promotions, events or campaigns to their database'}</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              {isEs
                ? <>Tu restaurante deja de ser solo un local físico y pasa a funcionar como un sistema digital que capta, gestiona y fideliza clientes. Tu <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web actúa como el sistema central</Link> que conecta clientes, equipo y herramientas.</>
                : <>Your restaurant stops being just a physical venue and starts operating as a digital system that captures, manages and retains customers. Your <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">website acts as the central system</Link> connecting customers, team and tools.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {isEs
                ? 'Además, puedes entender mejor a tus clientes: qué piden, cuándo reservan y cómo aumentar su frecuencia de visita.'
                : 'Plus, you can better understand your customers: what they order, when they book and how to increase their visit frequency.'}
            </p>
          </section>

          {/* Use cases - business focused */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos de uso reales en restaurantes' : 'Real use cases in restaurants'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEs
                ? <>Gracias a los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> y la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link>, cualquier restaurante en Navarra y Pamplona puede implementar:</>
                : <>Thanks to <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> and <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link>, any restaurant in Navarra and Pamplona can implement:</>}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Automatización de reservas online y WhatsApp</strong> sin intervención manual, con confirmaciones y recordatorios integrados.</> : <><strong>Online and WhatsApp reservation automation</strong> without manual intervention, with integrated confirmations and reminders.</>}</li>
              <li>{isEs ? <><strong>Gestión de alérgenos, ingredientes y detalles de cada plato:</strong> el agente responde al instante sobre composición y opciones disponibles.</> : <><strong>Allergen, ingredient and dish detail management:</strong> the agent instantly responds about composition and available options.</>}</li>
              <li>{isEs ? <><strong>Cartas digitales inteligentes</strong> con información ampliada, fotos y recomendaciones personalizadas.</> : <><strong>Intelligent digital menus</strong> with extended information, photos and personalized recommendations.</>}</li>
              <li>{isEs ? <><strong>Fidelización de clientes:</strong> descuentos automáticos, promociones personalizadas y campañas por email o WhatsApp.</> : <><strong>Customer loyalty:</strong> automatic discounts, personalized promotions and email or WhatsApp campaigns.</>}</li>
              <li>{isEs ? <><strong>Base de datos de clientes</strong> para marketing automatizado y seguimiento de clientes habituales.</> : <><strong>Customer database</strong> for automated marketing and regular customer follow-up.</>}</li>
              <li>{isEs ? <><strong>Campañas automáticas en fechas clave:</strong> festivos, eventos, aniversarios y promociones estacionales.</> : <><strong>Automatic campaigns on key dates:</strong> holidays, events, anniversaries and seasonal promotions.</>}</li>
              <li>{isEs ? <><strong>Incremento del ticket medio</strong> mediante recomendaciones automáticas de platos, menús o extras.</> : <><strong>Higher average ticket</strong> through automatic recommendations of dishes, menus or extras.</>}</li>
            </ul>
          </section>

          {/* Revenue + urgency block */}
          <section className="mb-16 p-6 md:p-8 rounded-xl border border-primary/20 bg-primary/5">
            <p className="text-lg font-medium text-foreground mb-2">
              {isEs
                ? 'Los restaurantes que automatizan su operativa están gestionando más reservas, reduciendo errores y aumentando ingresos sin necesidad de ampliar equipo.'
                : 'Restaurants that automate their operations are managing more reservations, reducing errors and increasing revenue without needing to grow their team.'}
            </p>
            <p className="text-muted-foreground font-medium">
              {isEs
                ? 'Cada reserva que no se gestiona automáticamente es una oportunidad perdida.'
                : 'Every reservation that isn\'t managed automatically is a missed opportunity.'}
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios para tu restaurante' : 'Benefits for your restaurant'}
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Más reservas sin aumentar personal:</strong> la automatización gestiona el volumen sin contratar más equipo.</> : <><strong>More reservations without more staff:</strong> automation handles volume without hiring more team.</>}</li>
              <li>{isEs ? <><strong>Menos llamadas y menos carga operativa:</strong> las consultas frecuentes se resuelven automáticamente.</> : <><strong>Fewer calls and less operational burden:</strong> frequent inquiries are resolved automatically.</>}</li>
              <li>{isEs ? <><strong>Reducción de errores en reservas:</strong> confirmaciones automáticas eliminan duplicados y confusiones.</> : <><strong>Fewer reservation errors:</strong> automatic confirmations eliminate duplicates and confusion.</>}</li>
              <li>{isEs ? <><strong>Mayor ticket medio con recomendaciones inteligentes:</strong> el agente sugiere platos, menús y extras adaptados al cliente.</> : <><strong>Higher average ticket with smart recommendations:</strong> the agent suggests dishes, menus and extras tailored to the customer.</>}</li>
              <li>{isEs ? <><strong>Fidelización automática de clientes:</strong> campañas, descuentos y comunicaciones sin gestión manual.</> : <><strong>Automatic customer loyalty:</strong> campaigns, discounts and communications without manual management.</>}</li>
              <li>{isEs ? <><strong>Experiencia moderna que diferencia tu restaurante:</strong> atención inmediata, profesional y disponible 24/7.</> : <><strong>Modern experience that sets your restaurant apart:</strong> immediate, professional service available 24/7.</>}</li>
            </ul>
          </section>

          {/* Casos reales */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos reales de inteligencia artificial en hostelería en Navarra' : 'Real cases of artificial intelligence in hospitality in Navarra'}
            </h2>

            <div className="space-y-6">
              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'App navarra para gestión de reservas en restaurantes' : 'Navarra app for restaurant reservation management'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'Dos jóvenes emprendedores navarros han desarrollado Selectamesa, una aplicación que ayuda a hosteleros a gestionar reservas de forma sencilla, optimizar la distribución de comedores y obtener datos sobre sus clientes.'
                    : 'Two young Navarrese entrepreneurs have developed Selectamesa, an application that helps restaurant owners manage reservations easily, optimize dining room distribution and obtain customer data.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Navarra Capital
                </p>
                <a href="https://valorestop.navarracapital.es/la-app-navarra-que-ayuda-a-gestionar-restaurantes-y-hacer-reservas-de-manera-sencilla/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'El comercio y la hostelería de Pamplona se alían con la IA' : 'Pamplona commerce and hospitality team up with AI'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'Iniciativas en Pamplona están explorando cómo la inteligencia artificial puede contribuir a difundir la variedad del comercio de proximidad y la hostelería, potenciando el acceso de la clientela mediante herramientas digitales.'
                    : 'Initiatives in Pamplona are exploring how artificial intelligence can help promote the variety of local commerce and hospitality, enhancing customer access through digital tools.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Diario de Navarra
                </p>
                <a href="https://www.diariodenavarra.es/noticias/navarra/pamplona-comarca/2025/11/29/comercio-pamplones-alia-inteligencia-artificial-801870-16.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>
            </div>
          </section>

          {/* Differentiation */}
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            {isEs
              ? 'Los restaurantes que implementan este tipo de sistemas destacan frente a su competencia y ofrecen una experiencia moderna que los clientes valoran.'
              : 'Restaurants that implement these systems stand out from their competition and offer a modern experience that customers value.'}
          </p>

          {/* Urgency before CTA */}
          <p className="text-center text-lg font-medium text-foreground mb-8">
            {isEs
              ? 'Cada día sin automatización son reservas que podrías estar perdiendo.'
              : 'Every day without automation means reservations you could be losing.'}
          </p>

          {/* CTA Section */}
          <section className="p-6 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Convierte tu restaurante en un sistema inteligente que genera reservas automáticamente' : 'Turn your restaurant into an intelligent system that generates reservations automatically'}
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              {isEs
                ? 'Descubre cómo automatizar reservas, fidelizar clientes y aumentar la facturación de tu restaurante en Navarra.'
                : 'Discover how to automate reservations, retain customers and increase your restaurant\'s revenue in Navarra.'}
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto italic">
              {isEs
                ? 'No es una web. Es un sistema adaptado a cómo funciona tu restaurante.'
                : 'It\'s not a website. It\'s a system adapted to how your restaurant works.'}
            </p>
            <Link href={`${LOVABLE}/automatizacion-ia-navarra`}>
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              {isEs ? 'Evaluación inicial sin coste' : 'Free initial evaluation'}
            </p>
          </section>

          {/* Internal linking */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              {isEs ? 'Más soluciones de inteligencia artificial' : 'More AI solutions'}
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">{isEs ? 'Inteligencia artificial para empresas en Navarra' : 'AI for businesses in Navarra'}</Link></li>
              <li><Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">{isEs ? 'Agentes de IA para atención al cliente' : 'AI agents for customer service'}</Link></li>
              <li><Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">{isEs ? 'Automatización de procesos para empresas' : 'Process automation for businesses'}</Link></li>
              <li><Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">{isEs ? 'Desarrollo web con inteligencia artificial' : 'Web development with AI'}</Link></li>
              <li><Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">{isEs ? 'RAG: base de conocimiento inteligente' : 'RAG: intelligent knowledge base'}</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default IARestaurantesNavarra;



