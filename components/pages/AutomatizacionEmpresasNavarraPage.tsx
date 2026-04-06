'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Props {
  language: Language;
}

const LOVABLE = '';

const AutomatizacionEmpresasNavarraPage = ({ language }: Props) => {
  const isEs = language === 'es';

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Automatización para empresas en Navarra con inteligencia artificial",
    "description": "Automatización empresarial con inteligencia artificial para empresas en Navarra. Optimiza procesos, atención al cliente y tareas repetitivas con soluciones inteligentes.",
    "url": "https://rtpdigitalsolutions.es/automatizacion-empresas-navarra",
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
  };

  return (
    <>
            <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/ia-empresas-navarra" className="hover:text-primary transition-colors">
              ← {isEs ? 'IA para empresas en Navarra' : 'AI for businesses in Navarra'}
            </Link>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {isEs ? 'Automatización empresarial con inteligencia artificial en Navarra' : 'Business automation with artificial intelligence in Navarra'}
          </h1>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Qué es la automatización empresarial' : 'What is business automation'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'La automatización empresarial consiste en utilizar tecnología para ejecutar tareas repetitivas sin intervención humana. Esto permite a las empresas reducir errores, ahorrar tiempo y dedicar sus recursos a actividades de mayor valor estratégico.'
                : 'Business automation involves using technology to execute repetitive tasks without human intervention. This allows companies to reduce errors, save time and dedicate their resources to higher strategic value activities.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>En Navarra, cada vez más empresas están adoptando soluciones de <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">inteligencia artificial para empresas</Link> que les permiten automatizar procesos clave y mejorar su competitividad en el mercado.</>
                : <>In Navarra, more and more companies are adopting <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">artificial intelligence solutions for businesses</Link> that allow them to automate key processes and improve their market competitiveness.</>}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo la inteligencia artificial mejora la automatización' : 'How artificial intelligence improves automation'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>La inteligencia artificial lleva la automatización un paso más allá. Mientras que la automatización tradicional sigue reglas fijas, la IA puede interpretar contexto, aprender de datos y tomar decisiones adaptativas. Soluciones como los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> permiten automatizar conversaciones complejas con lenguaje natural.</>
                : <>Artificial intelligence takes automation a step further. While traditional automation follows fixed rules, AI can interpret context, learn from data and make adaptive decisions. Solutions like <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> allow automating complex conversations with natural language.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Además, la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos con IA</Link> puede gestionar flujos de trabajo internos, desde la clasificación de correos electrónicos hasta la generación automática de informes y la sincronización de datos entre plataformas.</>
                : <>Additionally, <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">AI-powered process automation</Link> can manage internal workflows, from email classification to automatic report generation and data synchronization between platforms.</>}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Procesos que pueden automatizar las empresas' : 'Processes that businesses can automate'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Las posibilidades de automatización abarcan prácticamente todas las áreas de una empresa. Estos son algunos de los procesos que más se benefician:'
                : 'Automation possibilities cover virtually all areas of a business. These are some of the processes that benefit the most:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{isEs ? 'Atención al cliente: respuestas automáticas a consultas frecuentes, gestión de incidencias y soporte 24/7' : 'Customer service: automatic responses to frequent inquiries, incident management and 24/7 support'}</li>
              <li>{isEs ? 'Gestión de correos electrónicos: clasificación, respuestas automáticas y derivación inteligente' : 'Email management: classification, automatic responses and intelligent routing'}</li>
              <li>{isEs ? 'Gestión de citas y reservas: confirmaciones automáticas, recordatorios y reorganización' : 'Appointment and booking management: automatic confirmations, reminders and rescheduling'}</li>
              <li>{isEs ? 'Soporte web: asistentes inteligentes integrados en la página web de la empresa' : 'Web support: intelligent assistants integrated into the company website'}</li>
              <li>{isEs ? 'Gestión de información: organización, búsqueda y acceso rápido a documentos internos' : 'Information management: organization, search and quick access to internal documents'}</li>
              <li>{isEs ? 'Procesos administrativos: facturación, generación de informes y sincronización de datos' : 'Administrative processes: invoicing, report generation and data synchronization'}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Para empresas que buscan integrar asistentes en sus plataformas digitales, el <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link> permite crear experiencias automatizadas directamente en la web corporativa.</>
                : <>For businesses looking to integrate assistants into their digital platforms, <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web development with artificial intelligence</Link> allows creating automated experiences directly on the corporate website.</>}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios de la automatización para empresas en Navarra' : 'Benefits of automation for businesses in Navarra'}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>{isEs ? 'Ahorro de tiempo' : 'Time savings'}</strong>: {isEs ? 'las tareas que antes requerían horas se ejecutan en segundos' : 'tasks that previously took hours are executed in seconds'}</li>
              <li><strong>{isEs ? 'Reducción de costes' : 'Cost reduction'}</strong>: {isEs ? 'menos recursos dedicados a tareas repetitivas y menor margen de error' : 'fewer resources dedicated to repetitive tasks and lower margin of error'}</li>
              <li><strong>{isEs ? 'Mayor productividad' : 'Greater productivity'}</strong>: {isEs ? 'los equipos pueden centrarse en actividades estratégicas y de alto valor' : 'teams can focus on strategic and high-value activities'}</li>
              <li><strong>{isEs ? 'Mejor atención al cliente' : 'Better customer service'}</strong>: {isEs ? 'respuestas inmediatas y disponibilidad permanente sin aumentar el personal' : 'immediate responses and permanent availability without increasing staff'}</li>
              <li><strong>{isEs ? 'Escalabilidad' : 'Scalability'}</strong>: {isEs ? 'los sistemas automatizados crecen con la empresa sin necesidad de contratar más personal' : 'automated systems grow with the business without the need to hire more staff'}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Sectores que pueden beneficiarse de la automatización' : 'Sectors that can benefit from automation'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'La automatización con inteligencia artificial no se limita a un tipo de empresa. Prácticamente cualquier sector puede implementar soluciones que mejoren su operativa diaria:'
                : 'Automation with artificial intelligence is not limited to one type of business. Virtually any sector can implement solutions that improve their daily operations:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{isEs ? 'Clínicas y centros de salud: gestión de citas, seguimiento de pacientes y respuestas automáticas' : 'Clinics and health centers: appointment management, patient follow-up and automatic responses'}</li>
              <li>{isEs ? 'Restaurantes y hostelería: reservas inteligentes, atención al cliente y gestión de pedidos' : 'Restaurants and hospitality: smart reservations, customer service and order management'}</li>
              <li>{isEs ? 'Comercios y retail: asistentes de compra, gestión de stock y atención al cliente automatizada' : 'Retail businesses: shopping assistants, stock management and automated customer service'}</li>
              <li>{isEs ? 'Empresas industriales: optimización de cadenas de producción y mantenimiento predictivo' : 'Industrial companies: production chain optimization and predictive maintenance'}</li>
              <li>{isEs ? 'Asesorías y despachos profesionales: clasificación documental y atención automatizada' : 'Consulting firms and professional offices: document classification and automated service'}</li>
              <li>{isEs ? 'Empresas de servicios: gestión de solicitudes, seguimiento de proyectos y comunicación con clientes' : 'Service companies: request management, project tracking and client communication'}</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {isEs ? 'Solicita un diagnóstico de automatización para tu empresa' : 'Request an automation diagnostic for your business'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isEs
                ? 'Analizamos los procesos de tu empresa y te proponemos soluciones de automatización con inteligencia artificial adaptadas a tu sector y necesidades.'
                : 'We analyze your business processes and propose AI-powered automation solutions tailored to your sector and needs.'}
            </p>
            <Link href={`${LOVABLE}/diagnostico-ia-navarra`}>
              <Button size="lg" className="gap-2">
                {isEs ? 'Solicitar diagnóstico' : 'Request diagnostic'} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
};

export default AutomatizacionEmpresasNavarraPage;



