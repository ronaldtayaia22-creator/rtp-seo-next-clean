'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleProps {
  language: Language;
}
const IAClinicasNavarra = ({ language }: ArticleProps) => {
  const isEs = language === 'es';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cómo aplicar inteligencia artificial en clínicas de Navarra: guía práctica",
    "description": "Descubre cómo la inteligencia artificial puede ayudar a clínicas en Navarra a mejorar la atención al paciente, automatizar citas y optimizar procesos.",
    "author": { "@type": "Organization", "name": "RTP Digital Solutions" },
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
    "datePublished": "2026-02-13",
    "dateModified": "2026-02-13",
    "mainEntityOfPage": "https://rtpdigitalsolutions.es/blog/ia-para-clinicas-navarra",
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
            {isEs ? 'Cómo aplicar inteligencia artificial en clínicas de Navarra' : 'How to apply artificial intelligence in clinics in Navarra'}
          </h1>
          <time className="text-sm text-muted-foreground block mb-12">2026-02-13</time>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo la inteligencia artificial está transformando las clínicas' : 'How artificial intelligence is transforming clinics'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'La inteligencia artificial está cambiando la forma en que las clínicas gestionan sus operaciones diarias. Desde la recepción de pacientes hasta el seguimiento post-consulta, los sistemas de IA permiten automatizar tareas que antes requerían horas de trabajo manual.'
                : 'Artificial intelligence is changing the way clinics manage their daily operations. From patient reception to post-consultation follow-up, AI systems can automate tasks that previously required hours of manual work.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Las clínicas en Navarra, ya sean dentales, de fisioterapia o de medicina privada, pueden beneficiarse de <Link href="/ia-clinicas-navarra" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial específicas para clínicas</Link> que mejoran la experiencia del paciente, reducen la carga administrativa y optimizan los recursos disponibles.</>
                : <>Clinics in Navarra, whether dental, physiotherapy or private medicine, can benefit from <Link href="/ia-clinicas-navarra" className="text-primary hover:underline font-medium">AI solutions specifically designed for clinics</Link> that improve the patient experience, reduce administrative burden and optimize available resources.</>}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Automatización de citas y atención al paciente' : 'Appointment automation and patient care'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Uno de los usos más inmediatos de la IA en clínicas es la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link> como la gestión de citas. Un agente de IA puede encargarse de programar, confirmar y recordar citas de forma automática, reduciendo las ausencias y liberando al personal de recepción.</>
                : <>One of the most immediate uses of AI in clinics is <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link> such as appointment management. An AI agent can handle scheduling, confirming and reminding appointments automatically, reducing no-shows and freeing reception staff.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? 'Además, el agente puede responder a las preguntas más frecuentes de los pacientes, como horarios, servicios disponibles, preparación previa a una consulta o documentación necesaria, todo ello sin intervención humana.'
                : 'Additionally, the agent can answer the most frequently asked patient questions, such as opening hours, available services, pre-consultation preparation or required documentation, all without human intervention.'}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Agentes de IA para páginas web de clínicas' : 'AI agents for clinic websites'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Integrar un <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">agente de IA en la página web de una clínica</Link> permite ofrecer atención inmediata a los visitantes. El agente puede resolver dudas sobre tratamientos, indicar disponibilidad de especialistas y guiar al paciente para reservar su cita directamente desde la web.</>
                : <>Integrating an <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">AI agent on a clinic&apos;s website</Link> enables immediate attention to visitors. The agent can answer questions about treatments, show specialist availability and guide patients to book their appointment directly from the website.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Estos agentes se conectan a la información de la clínica y pueden entrenarse con datos específicos del centro mediante <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link>, ofreciendo respuestas precisas y personalizadas.</>
                : <>These agents connect to the clinic&apos;s information and can be trained with center-specific data through <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web development with artificial intelligence</Link>, providing accurate and personalized responses.</>}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios de implementar IA en clínicas' : 'Benefits of implementing AI in clinics'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Las clínicas que integran inteligencia artificial en sus operaciones obtienen beneficios tangibles desde el primer momento:'
                : 'Clinics that integrate artificial intelligence into their operations gain tangible benefits from the start:'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Atención 24/7:</strong> los pacientes pueden resolver sus dudas y gestionar citas en cualquier momento, incluso fuera del horario de la clínica.</> : <><strong>24/7 care:</strong> patients can resolve their questions and manage appointments at any time, even outside clinic hours.</>}</li>
              <li>{isEs ? <><strong>Reducción de llamadas:</strong> al automatizar las consultas más frecuentes, el volumen de llamadas telefónicas se reduce significativamente.</> : <><strong>Fewer phone calls:</strong> by automating the most frequent inquiries, the volume of phone calls is significantly reduced.</>}</li>
              <li>{isEs ? <><strong>Mejora en la gestión de citas:</strong> menos ausencias gracias a recordatorios automáticos y confirmación inmediata.</> : <><strong>Better appointment management:</strong> fewer no-shows thanks to automatic reminders and immediate confirmation.</>}</li>
              <li>{isEs ? <><strong>Eficiencia administrativa:</strong> el personal puede dedicar su tiempo a tareas de mayor valor en lugar de gestionar consultas repetitivas.</> : <><strong>Administrative efficiency:</strong> staff can dedicate their time to higher-value tasks instead of managing repetitive inquiries.</>}</li>
              <li>{isEs ? <><strong>Mejor experiencia del paciente:</strong> respuestas inmediatas, gestión ágil y comunicación personalizada.</> : <><strong>Better patient experience:</strong> immediate responses, agile management and personalized communication.</>}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Ejemplos de uso de IA en clínicas' : 'Examples of AI use in clinics'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al cliente</Link> se adaptan a diferentes especialidades clínicas:</>
                : <>The <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> adapt to different clinical specialties:</>}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Clínicas dentales:</strong> gestión de citas para revisiones, limpiezas y tratamientos. Información sobre precios y preparación previa.</> : <><strong>Dental clinics:</strong> appointment management for check-ups, cleanings and treatments. Information about prices and pre-visit preparation.</>}</li>
              <li>{isEs ? <><strong>Fisioterapia:</strong> programación de sesiones, seguimiento de tratamientos y envío de ejercicios personalizados al paciente.</> : <><strong>Physiotherapy:</strong> session scheduling, treatment follow-up and sending personalized exercises to patients.</>}</li>
              <li>{isEs ? <><strong>Psicología:</strong> gestión de primeras consultas, cuestionarios previos automatizados y recordatorios de sesiones.</> : <><strong>Psychology:</strong> first consultation management, automated pre-session questionnaires and session reminders.</>}</li>
              <li>{isEs ? <><strong>Medicina privada:</strong> triaje inicial automatizado, derivación inteligente a especialistas y gestión de documentación médica.</> : <><strong>Private medicine:</strong> automated initial triage, intelligent referral to specialists and medical documentation management.</>}</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Cómo una clínica en Navarra puede implementar IA' : 'How a clinic in Navarra can implement AI'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Implementar inteligencia artificial en una clínica es un proceso progresivo que no requiere transformar toda la operativa de golpe:'
                : 'Implementing artificial intelligence in a clinic is a progressive process that does not require transforming the entire operation at once:'}
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Diagnóstico inicial:</strong> identificar los procesos que más tiempo consumen y que pueden automatizarse, como la gestión de citas o las consultas telefónicas.</> : <><strong>Initial diagnosis:</strong> identify the most time-consuming processes that can be automated, such as appointment management or phone inquiries.</>}</li>
              <li>{isEs ? <><strong>Definición de la solución:</strong> diseñar un agente de IA adaptado a las necesidades específicas de la clínica y sus pacientes.</> : <><strong>Solution definition:</strong> design an AI agent tailored to the specific needs of the clinic and its patients.</>}</li>
              <li>{isEs ? <><strong>Integración con la web:</strong> implementar el agente en la página web de la clínica para que los pacientes puedan interactuar con él de forma natural.</> : <><strong>Website integration:</strong> implement the agent on the clinic&apos;s website so patients can interact with it naturally.</>}</li>
              <li>{isEs ? <><strong>Entrenamiento con datos reales:</strong> alimentar al agente con información sobre servicios, horarios, precios y preguntas frecuentes de la clínica.</> : <><strong>Training with real data:</strong> feed the agent with information about services, schedules, prices and frequently asked questions from the clinic.</>}</li>
              <li>{isEs ? <><strong>Optimización continua:</strong> ajustar las respuestas y flujos del agente en función del feedback de los pacientes y los resultados obtenidos.</> : <><strong>Continuous optimization:</strong> adjust the agent&apos;s responses and flows based on patient feedback and results obtained.</>}</li>
            </ol>
          </section>

          {/* Authority link */}
          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Las clínicas en Navarra que adoptan IA están mejorando su operativa y la experiencia de sus pacientes. Descubre todas las <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial para empresas en Navarra</Link> y cómo pueden aplicarse a tu centro de salud.</>
                : <>Clinics in Navarra that adopt AI are improving their operations and patient experience. Discover all the <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence solutions for businesses in Navarra</Link> and how they can be applied to your health center.</>}
            </p>
          </section>

          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Para implantarlo con seguridad, consulta nuestros <Link href="/servicios" className="text-primary hover:underline font-medium">servicios</Link>, la propuesta global de <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">IA para empresas en Navarra</Link> y empieza por un <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">diagnóstico estratégico</Link>.</>
                : <>To deploy it safely, review our <Link href="/servicios" className="text-primary hover:underline font-medium">services</Link>, the global <Link href="/ia-empresas-navarra" className="text-primary hover:underline font-medium">AI for businesses in Navarra</Link> approach, and start with a <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">strategic diagnosis</Link>.</>}
            </p>
          </section>

          {/* CTA Section */}
          <section className="mt-16 p-4 sm:p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Implementa inteligencia artificial en tu clínica' : 'Implement artificial intelligence in your clinic'}
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

export default IAClinicasNavarra;





