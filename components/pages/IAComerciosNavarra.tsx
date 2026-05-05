'use client';

import Link from '@/components/shared/LocalizedLink';
import SectorVisualStory from '@/components/shared/SectorVisualStory';
import { Language } from '@/lib/i18n';
import { getSectorVisualStory } from '@/lib/content/sectorVisualStories';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  language: Language;
}

const LOVABLE = '';

const IAComerciosNavarra = ({ language }: Props) => {
  const isEs = language === 'es';
  const comerciosStory = getSectorVisualStory('comercios', isEs ? 'es' : 'en');

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Inteligencia artificial para comercios en Navarra",
    "description": "Sistemas de inteligencia artificial para comercios en Navarra y Pamplona: automatización de ventas, atención al cliente 24/7, e-commerce inteligente y fidelización.",
    "url": "https://rtpdigitalsolutions.es/ia-comercios-navarra",
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
  };

  return (
    <>
            <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/ia-empresas-navarra" className="hover:text-primary transition-colors">
              ← {isEs ? 'IA para empresas en Navarra' : 'AI for businesses in Navarra'}
            </Link>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
            {isEs ? 'Inteligencia artificial para comercios en Navarra' : 'Artificial intelligence for retail businesses in Navarra'}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-muted-foreground">
            {isEs ? 'Cómo la inteligencia artificial ayuda a los comercios en Navarra' : 'How artificial intelligence helps retail businesses in Navarra'}
          </h2>

          {/* Strategic intro */}
          <div className="text-lg text-muted-foreground mb-16 max-w-2xl space-y-4">
            <p>
              {isEs
                ? 'Los comercios en Navarra se enfrentan a un entorno cada vez más competitivo donde la experiencia del cliente y la velocidad de respuesta marcan la diferencia.'
                : 'Retail businesses in Navarra face an increasingly competitive environment where customer experience and response speed make the difference.'}
            </p>
            <p>
              {isEs
                ? <>Hoy, los negocios más eficientes en Navarra y especialmente en Pamplona funcionan como sistemas digitales: automatizan la atención, recomiendan productos, gestionan ventas y optimizan toda su operativa con <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">inteligencia artificial</Link>.</>
                : <>Today, the most efficient businesses in Navarra and especially in Pamplona operate as digital systems: they automate service, recommend products, manage sales and optimize all operations with <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence</Link>.</>}
            </p>
            <p>
              {isEs
                ? 'La inteligencia artificial permite transformar cualquier comercio —físico o digital— en un sistema conectado que vende más, responde al instante y mejora la experiencia del cliente.'
                : 'Artificial intelligence allows you to transform any retail business —physical or digital— into a connected system that sells more, responds instantly and improves customer experience.'}
            </p>
          </div>

          {/* System vision block */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Tu comercio como sistema inteligente' : 'Your retail business as an intelligent system'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  {isEs ? 'Un cliente puede:' : 'A customer can:'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Consultar productos con descripciones completas, precios y disponibilidad' : 'Check products with full descriptions, prices and availability'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Recibir recomendaciones personalizadas según lo que busca' : 'Receive personalized recommendations based on what they\'re looking for'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Resolver dudas al instante sin depender de atención manual' : 'Resolve questions instantly without relying on manual service'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Comprar directamente o iniciar el proceso de compra' : 'Buy directly or start the purchasing process'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Interactuar en web o WhatsApp de forma automática' : 'Interact on web or WhatsApp automatically'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  {isEs ? 'El negocio puede:' : 'The business can:'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Responder automáticamente a consultas frecuentes' : 'Automatically respond to frequent inquiries'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Gestionar catálogo, stock y disponibilidad en tiempo real' : 'Manage catalog, stock and availability in real time'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Automatizar ventas y procesos de atención' : 'Automate sales and service processes'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Centralizar clientes en una base de datos estructurada' : 'Centralize customers in a structured database'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Lanzar campañas y promociones a clientes existentes' : 'Launch campaigns and promotions to existing customers'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Recuperar clientes que no terminaron una compra' : 'Recover customers who didn\'t complete a purchase'}</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              {isEs
                ? <>Tu comercio deja de depender de atención manual y pasa a funcionar como un sistema que capta, convierte y fideliza clientes. Tu <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web actúa como el sistema central</Link> que conecta clientes, equipo y herramientas.</>
                : <>Your retail business stops depending on manual service and starts operating as a system that captures, converts and retains customers. Your <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">website acts as the central system</Link> connecting customers, team and tools.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {isEs
                ? 'Además, puedes entender qué productos interesan más, qué buscan tus clientes y cómo aumentar tus ventas de forma constante.'
                : 'Plus, you can understand which products interest customers most, what they\'re looking for and how to increase your sales consistently.'}
            </p>
          </section>

          {/* Use cases */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos de uso reales en comercios' : 'Real use cases in retail'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEs
                ? <>Gracias a los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> y la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link>, cualquier comercio en Navarra y Pamplona puede implementar:</>
                : <>Thanks to <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> and <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link>, any retail business in Navarra and Pamplona can implement:</>}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Atención al cliente 24/7:</strong> resolución automática de consultas sobre productos, precios, stock y condiciones de envío.</> : <><strong>24/7 customer service:</strong> automatic resolution of inquiries about products, prices, stock and shipping conditions.</>}</li>
              <li>{isEs ? <><strong>Integración con Shopify y plataformas e-commerce:</strong> conexión directa con tu tienda online para gestionar pedidos, stock y clientes.</> : <><strong>Shopify and e-commerce platform integration:</strong> direct connection with your online store to manage orders, stock and customers.</>}</li>
              <li>{isEs ? <><strong>Recuperación de carritos abandonados:</strong> seguimiento automático de clientes que no completaron su compra.</> : <><strong>Abandoned cart recovery:</strong> automatic follow-up of customers who didn't complete their purchase.</>}</li>
              <li>{isEs ? <><strong>Recomendaciones inteligentes de productos:</strong> el agente sugiere artículos, complementos y alternativas adaptadas al cliente.</> : <><strong>Intelligent product recommendations:</strong> the agent suggests items, accessories and alternatives tailored to the customer.</>}</li>
              <li>{isEs ? <><strong>Automatización del proceso de compra:</strong> desde la consulta hasta la conversión, sin intervención manual.</> : <><strong>Purchase process automation:</strong> from inquiry to conversion, without manual intervention.</>}</li>
              <li>{isEs ? <><strong>Fidelización y campañas automáticas:</strong> descuentos, promociones y comunicaciones personalizadas a clientes existentes.</> : <><strong>Loyalty and automatic campaigns:</strong> discounts, promotions and personalized communications to existing customers.</>}</li>
              <li>{isEs ? <><strong>Seguimiento del cliente hasta la conversión:</strong> base de datos estructurada con historial de interacciones y preferencias.</> : <><strong>Customer tracking to conversion:</strong> structured database with interaction history and preferences.</>}</li>
              <li>{isEs ? <><strong>Incremento de ventas</strong> gracias a recomendaciones automáticas y personalizadas en tiempo real.</> : <><strong>Sales increase</strong> through automatic and personalized real-time recommendations.</>}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              {isEs
                ? <>Estas soluciones no son solo para tiendas online. También aplican a comercios físicos, negocios locales y cualquier empresa que venda productos o servicios en Navarra. La <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">base de conocimiento inteligente (RAG)</Link> permite que el agente conozca tu catálogo, precios y políticas en detalle.</>
                : <>These solutions aren't just for online stores. They also apply to physical shops, local businesses and any company selling products or services in Navarra. The <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">intelligent knowledge base (RAG)</Link> allows the agent to know your catalog, prices and policies in detail.</>}
            </p>
          </section>

          {/* Revenue + urgency block */}
          <section className="mb-16 p-6 md:p-8 rounded-xl border border-primary/20 bg-primary/5">
            <p className="text-lg font-medium text-foreground mb-2">
              {isEs
                ? 'Los comercios que automatizan su atención y ventas están aumentando conversiones, reduciendo pérdidas de clientes y generando más ingresos sin ampliar equipo.'
                : 'Retail businesses that automate their service and sales are increasing conversions, reducing customer losses and generating more revenue without growing their team.'}
            </p>
            <p className="text-muted-foreground font-medium">
              {isEs
                ? 'Cada cliente que no recibe respuesta inmediata es una venta potencial perdida.'
                : 'Every customer who doesn\'t receive an immediate response is a potential lost sale.'}
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios para tu comercio' : 'Benefits for your retail business'}
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Más ventas sin aumentar personal:</strong> la automatización gestiona el volumen de consultas y ventas sin contratar más equipo.</> : <><strong>More sales without more staff:</strong> automation handles inquiry and sales volume without hiring more team.</>}</li>
              <li>{isEs ? <><strong>Atención inmediata que mejora la conversión:</strong> cada consulta se resuelve al instante, reduciendo abandonos.</> : <><strong>Immediate service that improves conversion:</strong> every inquiry is resolved instantly, reducing drop-offs.</>}</li>
              <li>{isEs ? <><strong>Recuperación de clientes indecisos:</strong> seguimiento automático de quienes no completan la compra.</> : <><strong>Recovery of undecided customers:</strong> automatic follow-up of those who don't complete the purchase.</>}</li>
              <li>{isEs ? <><strong>Mayor ticket medio con recomendaciones automáticas:</strong> el agente sugiere productos complementarios y alternativas.</> : <><strong>Higher average ticket with automatic recommendations:</strong> the agent suggests complementary products and alternatives.</>}</li>
              <li>{isEs ? <><strong>Menos carga operativa en el equipo:</strong> las consultas repetitivas se resuelven sin intervención humana.</> : <><strong>Less operational burden on the team:</strong> repetitive inquiries are resolved without human intervention.</>}</li>
              <li>{isEs ? <><strong>Experiencia moderna que diferencia el negocio:</strong> atención profesional, inmediata y disponible 24/7.</> : <><strong>Modern experience that sets your business apart:</strong> professional, immediate service available 24/7.</>}</li>
            </ul>
          </section>

          <section className="mb-16">
            <SectorVisualStory
              title={comerciosStory.title}
              sectorLabel={comerciosStory.sectorLabel}
              slides={comerciosStory.slides}
              problem={comerciosStory.problem}
              solution={comerciosStory.solution}
              result={comerciosStory.result}
              ctaLabel={comerciosStory.ctaLabel}
              ctaHref={comerciosStory.ctaHref}
              autoplayMs={6000}
            />
          </section>

          {/* Casos reales */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos reales de inteligencia artificial en el comercio en Navarra' : 'Real cases of artificial intelligence in retail in Navarra'}
            </h2>

            <div className="space-y-6">
              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'El comercio pamplonés se alía con la inteligencia artificial' : 'Pamplona retail teams up with artificial intelligence'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'La inteligencia artificial está siendo adoptada por el comercio de proximidad y la hostelería de Pamplona para difundir su oferta y potenciar el acceso de la clientela mediante herramientas digitales innovadoras.'
                    : 'Artificial intelligence is being adopted by local commerce and hospitality in Pamplona to promote their offering and enhance customer access through innovative digital tools.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Diario de Navarra
                </p>
                <a href="https://www.diariodenavarra.es/noticias/navarra/pamplona-comarca/2025/11/29/comercio-pamplones-alia-inteligencia-artificial-801870-16.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Programa Comercio IA Lab de la Cámara de Comercio de Navarra' : 'Commerce AI Lab Program by the Chamber of Commerce of Navarra'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'La Cámara de Comercio de Navarra ha lanzado el programa Comercio IA Lab, diseñado para ayudar a los comercios navarros a aprovechar el poder de la inteligencia artificial mediante formación y asesoramiento gratuito.'
                    : 'The Chamber of Commerce of Navarra has launched the Commerce AI Lab program, designed to help Navarrese retailers harness the power of artificial intelligence through free training and consulting.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> {isEs ? 'Cámara de Comercio de Navarra' : 'Chamber of Commerce of Navarra'}
                </p>
                <a href="https://camaranavarra.com/programa-comercio-ia-lab/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Talleres IA Boosts Navarra para comercios' : 'AI Boosts Navarra workshops for retailers'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'La Cámara de Comercio de Navarra organizó un ciclo de talleres gratuitos bajo el programa IA Boosts Navarra, dirigidos a comercios que quieren aprender a utilizar la inteligencia artificial como herramienta para potenciar su negocio.'
                    : 'The Chamber of Commerce of Navarra organized a series of free workshops under the AI Boosts Navarra program, aimed at retailers wanting to learn how to use artificial intelligence as a tool to boost their business.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> {isEs ? 'Cámara de Comercio de Navarra' : 'Chamber of Commerce of Navarra'}
                </p>
                <a href="https://camaranavarra.com/tallleres-ia-comercio/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>
            </div>
          </section>

          {/* Demo section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              {isEs ? 'Así funciona en un negocio real' : 'How it works in a real business'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              {isEs
                ? 'Este es un ejemplo real aplicado a una peluquería o negocio local: desde la experiencia del cliente hasta la gestión interna del equipo.'
                : 'This is a real example applied to a hair salon or local business: from the customer experience to the team\'s internal management.'}
            </p>

            {/* Demo Block 1 — Client side */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {isEs ? 'Experiencia del cliente' : 'Customer experience'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isEs
                  ? 'El cliente puede consultar servicios, reservar citas y recibir respuestas automáticamente sin necesidad de llamadas ni esperas.'
                  : 'The customer can check services, book appointments and receive automatic responses without calls or waiting.'}
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <video className="w-full aspect-video object-cover" controls preload="metadata" playsInline>
                  <source src="/videos/demo-comercio-cliente.mp4" type="video/mp4" />
                </video>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Reserva citas en segundos' : 'Book appointments in seconds'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Respuestas automáticas 24/7' : 'Automatic responses 24/7'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Acceso fácil desde móvil o web' : 'Easy access from mobile or web'}</li>
              </ul>
            </div>

            {/* Demo Block 2 — Admin side */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {isEs ? 'Gestión del negocio' : 'Business management'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isEs
                  ? 'Así lo gestiona el negocio por dentro: agenda, clientes, servicios y control operativo desde un único panel.'
                  : 'This is how the business manages it internally: schedule, clients, services and operational control from a single panel.'}
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <video className="w-full aspect-video object-cover" controls preload="metadata" playsInline>
                  <source src="/videos/demo-comercio-admin.mp4" type="video/mp4" />
                </video>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Control total de la agenda' : 'Full schedule control'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Gestión de clientes y servicios' : 'Client and service management'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Menos tiempo en tareas repetitivas' : 'Less time on repetitive tasks'}</li>
              </ul>
            </div>

            {/* Bridge text */}
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto italic">
              {isEs
                ? 'No se trata solo de responder mensajes. Se trata de convertir la captación, las citas y la gestión diaria en un sistema automatizado que hace crecer el negocio.'
                : 'It\'s not just about answering messages. It\'s about turning lead capture, appointments and daily management into an automated system that grows the business.'}
            </p>

            {/* Demo CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`${LOVABLE}/diagnostico-ia-navarra`}>
                <Button size="sm" className="gap-2 w-full sm:w-auto font-bold">
                  {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <button
                onClick={() => {
                  const chatBar = document.querySelector('[data-chat-trigger]') as HTMLElement;
                  chatBar?.click();
                }}
              >
                <Button size="sm" variant="outline" className="gap-2 w-full sm:w-auto font-bold border-secondary text-secondary hover:bg-secondary/10">
                  <Sparkles className="w-4 h-4" /> {isEs ? 'Probar Centro Inteligente' : 'Try the AI Center'}
                </Button>
              </button>
            </div>
          </section>

          {/* Differentiation + urgency */}
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            {isEs
              ? 'Los comercios que implementan estos sistemas destacan frente a su competencia y ofrecen una experiencia que los clientes valoran y recuerdan.'
              : 'Retail businesses that implement these systems stand out from their competition and offer an experience that customers value and remember.'}
          </p>
          <p className="text-center text-lg font-medium text-foreground mb-8">
            {isEs
              ? 'Cada día sin automatización son clientes y ventas que estás perdiendo frente a tu competencia.'
              : 'Every day without automation means customers and sales you\'re losing to your competition.'}
          </p>

          {/* CTA */}
          <section className="p-6 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Convierte tu comercio en un sistema inteligente que vende y responde automáticamente' : 'Turn your retail business into an intelligent system that sells and responds automatically'}
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              {isEs
                ? 'Descubre cómo automatizar la atención, aumentar ventas y mejorar la experiencia del cliente en tu comercio en Navarra y Pamplona.'
                : 'Discover how to automate service, increase sales and improve customer experience in your retail business in Navarra and Pamplona.'}
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto italic">
              {isEs
                ? 'No es una web. Es un sistema adaptado a cómo funciona tu negocio.'
                : 'It\'s not a website. It\'s a system adapted to how your business works.'}
            </p>
            <Link href={`${LOVABLE}/diagnostico-ia-navarra`}>
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

export default IAComerciosNavarra;



