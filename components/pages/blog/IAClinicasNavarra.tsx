'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleProps {
  language: Language;
}


const LOVABLE = '';
const IAClinicasNavarra = ({ language }: ArticleProps) => {
  const isEs = language === 'es';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CÃ³mo aplicar inteligencia artificial en clÃ­nicas de Navarra: guÃ­a prÃ¡ctica",
    "description": "Descubre cÃ³mo la inteligencia artificial puede ayudar a clÃ­nicas en Navarra a mejorar la atenciÃ³n al paciente, automatizar citas y optimizar procesos.",
    "author": { "@type": "Organization", "name": "RTP Digital Solutions" },
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
    "datePublished": "2026-02-13",
    "dateModified": "2026-02-13",
    "mainEntityOfPage": "https://rtpdigitalsolutions.es/blog/ia-para-clinicas-navarra",
    "inLanguage": isEs ? "es" : "en"
  };

  return (
    <>
            <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-primary transition-colors">â† {isEs ? 'Volver al blog' : 'Back to blog'}</Link>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {isEs ? 'CÃ³mo aplicar inteligencia artificial en clÃ­nicas de Navarra' : 'How to apply artificial intelligence in clinics in Navarra'}
          </h1>
          <time className="text-sm text-muted-foreground block mb-12">2026-02-13</time>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'CÃ³mo la inteligencia artificial estÃ¡ transformando las clÃ­nicas' : 'How artificial intelligence is transforming clinics'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'La inteligencia artificial estÃ¡ cambiando la forma en que las clÃ­nicas gestionan sus operaciones diarias. Desde la recepciÃ³n de pacientes hasta el seguimiento post-consulta, los sistemas de IA permiten automatizar tareas que antes requerÃ­an horas de trabajo manual.'
                : 'Artificial intelligence is changing the way clinics manage their daily operations. From patient reception to post-consultation follow-up, AI systems can automate tasks that previously required hours of manual work.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Las clÃ­nicas en Navarra, ya sean dentales, de fisioterapia o de medicina privada, pueden beneficiarse de <Link href="/ia-clinicas-navarra" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial especÃ­ficas para clÃ­nicas</Link> que mejoran la experiencia del paciente, reducen la carga administrativa y optimizan los recursos disponibles.</>
                : <>Clinics in Navarra, whether dental, physiotherapy or private medicine, can benefit from <Link href="/ia-clinicas-navarra" className="text-primary hover:underline font-medium">AI solutions specifically designed for clinics</Link> that improve the patient experience, reduce administrative burden and optimize available resources.</>}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'AutomatizaciÃ³n de citas y atenciÃ³n al paciente' : 'Appointment automation and patient care'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Uno de los usos mÃ¡s inmediatos de la IA en clÃ­nicas es la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatizaciÃ³n de procesos</Link> como la gestiÃ³n de citas. Un agente de IA puede encargarse de programar, confirmar y recordar citas de forma automÃ¡tica, reduciendo las ausencias y liberando al personal de recepciÃ³n.</>
                : <>One of the most immediate uses of AI in clinics is <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link> such as appointment management. An AI agent can handle scheduling, confirming and reminding appointments automatically, reducing no-shows and freeing reception staff.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? 'AdemÃ¡s, el agente puede responder a las preguntas mÃ¡s frecuentes de los pacientes, como horarios, servicios disponibles, preparaciÃ³n previa a una consulta o documentaciÃ³n necesaria, todo ello sin intervenciÃ³n humana.'
                : 'Additionally, the agent can answer the most frequently asked patient questions, such as opening hours, available services, pre-consultation preparation or required documentation, all without human intervention.'}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Agentes de IA para pÃ¡ginas web de clÃ­nicas' : 'AI agents for clinic websites'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Integrar un <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">agente de IA en la pÃ¡gina web de una clÃ­nica</Link> permite ofrecer atenciÃ³n inmediata a los visitantes. El agente puede resolver dudas sobre tratamientos, indicar disponibilidad de especialistas y guiar al paciente para reservar su cita directamente desde la web.</>
                : <>Integrating an <Link href="/blog/agentes-ia-para-paginas-web-navarra" className="text-primary hover:underline font-medium">AI agent on a clinic's website</Link> enables immediate attention to visitors. The agent can answer questions about treatments, show specialist availability and guide patients to book their appointment directly from the website.</>}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Estos agentes se conectan a la informaciÃ³n de la clÃ­nica y pueden entrenarse con datos especÃ­ficos del centro mediante <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link>, ofreciendo respuestas precisas y personalizadas.</>
                : <>These agents connect to the clinic's information and can be trained with center-specific data through <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web development with artificial intelligence</Link>, providing accurate and personalized responses.</>}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Beneficios de implementar IA en clÃ­nicas' : 'Benefits of implementing AI in clinics'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Las clÃ­nicas que integran inteligencia artificial en sus operaciones obtienen beneficios tangibles desde el primer momento:'
                : 'Clinics that integrate artificial intelligence into their operations gain tangible benefits from the start:'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>AtenciÃ³n 24/7:</strong> los pacientes pueden resolver sus dudas y gestionar citas en cualquier momento, incluso fuera del horario de la clÃ­nica.</> : <><strong>24/7 care:</strong> patients can resolve their questions and manage appointments at any time, even outside clinic hours.</>}</li>
              <li>{isEs ? <><strong>ReducciÃ³n de llamadas:</strong> al automatizar las consultas mÃ¡s frecuentes, el volumen de llamadas telefÃ³nicas se reduce significativamente.</> : <><strong>Fewer phone calls:</strong> by automating the most frequent inquiries, the volume of phone calls is significantly reduced.</>}</li>
              <li>{isEs ? <><strong>Mejora en la gestiÃ³n de citas:</strong> menos ausencias gracias a recordatorios automÃ¡ticos y confirmaciÃ³n inmediata.</> : <><strong>Better appointment management:</strong> fewer no-shows thanks to automatic reminders and immediate confirmation.</>}</li>
              <li>{isEs ? <><strong>Eficiencia administrativa:</strong> el personal puede dedicar su tiempo a tareas de mayor valor en lugar de gestionar consultas repetitivas.</> : <><strong>Administrative efficiency:</strong> staff can dedicate their time to higher-value tasks instead of managing repetitive inquiries.</>}</li>
              <li>{isEs ? <><strong>Mejor experiencia del paciente:</strong> respuestas inmediatas, gestiÃ³n Ã¡gil y comunicaciÃ³n personalizada.</> : <><strong>Better patient experience:</strong> immediate responses, agile management and personalized communication.</>}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Ejemplos de uso de IA en clÃ­nicas' : 'Examples of AI use in clinics'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? <>Los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atenciÃ³n al cliente</Link> se adaptan a diferentes especialidades clÃ­nicas:</>
                : <>The <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> adapt to different clinical specialties:</>}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>ClÃ­nicas dentales:</strong> gestiÃ³n de citas para revisiones, limpiezas y tratamientos. InformaciÃ³n sobre precios y preparaciÃ³n previa.</> : <><strong>Dental clinics:</strong> appointment management for check-ups, cleanings and treatments. Information about prices and pre-visit preparation.</>}</li>
              <li>{isEs ? <><strong>Fisioterapia:</strong> programaciÃ³n de sesiones, seguimiento de tratamientos y envÃ­o de ejercicios personalizados al paciente.</> : <><strong>Physiotherapy:</strong> session scheduling, treatment follow-up and sending personalized exercises to patients.</>}</li>
              <li>{isEs ? <><strong>PsicologÃ­a:</strong> gestiÃ³n de primeras consultas, cuestionarios previos automatizados y recordatorios de sesiones.</> : <><strong>Psychology:</strong> first consultation management, automated pre-session questionnaires and session reminders.</>}</li>
              <li>{isEs ? <><strong>Medicina privada:</strong> triaje inicial automatizado, derivaciÃ³n inteligente a especialistas y gestiÃ³n de documentaciÃ³n mÃ©dica.</> : <><strong>Private medicine:</strong> automated initial triage, intelligent referral to specialists and medical documentation management.</>}</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'CÃ³mo una clÃ­nica en Navarra puede implementar IA' : 'How a clinic in Navarra can implement AI'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Implementar inteligencia artificial en una clÃ­nica es un proceso progresivo que no requiere transformar toda la operativa de golpe:'
                : 'Implementing artificial intelligence in a clinic is a progressive process that does not require transforming the entire operation at once:'}
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>DiagnÃ³stico inicial:</strong> identificar los procesos que mÃ¡s tiempo consumen y que pueden automatizarse, como la gestiÃ³n de citas o las consultas telefÃ³nicas.</> : <><strong>Initial diagnosis:</strong> identify the most time-consuming processes that can be automated, such as appointment management or phone inquiries.</>}</li>
              <li>{isEs ? <><strong>DefiniciÃ³n de la soluciÃ³n:</strong> diseÃ±ar un agente de IA adaptado a las necesidades especÃ­ficas de la clÃ­nica y sus pacientes.</> : <><strong>Solution definition:</strong> design an AI agent tailored to the specific needs of the clinic and its patients.</>}</li>
              <li>{isEs ? <><strong>IntegraciÃ³n con la web:</strong> implementar el agente en la pÃ¡gina web de la clÃ­nica para que los pacientes puedan interactuar con Ã©l de forma natural.</> : <><strong>Website integration:</strong> implement the agent on the clinic's website so patients can interact with it naturally.</>}</li>
              <li>{isEs ? <><strong>Entrenamiento con datos reales:</strong> alimentar al agente con informaciÃ³n sobre servicios, horarios, precios y preguntas frecuentes de la clÃ­nica.</> : <><strong>Training with real data:</strong> feed the agent with information about services, schedules, prices and frequently asked questions from the clinic.</>}</li>
              <li>{isEs ? <><strong>OptimizaciÃ³n continua:</strong> ajustar las respuestas y flujos del agente en funciÃ³n del feedback de los pacientes y los resultados obtenidos.</> : <><strong>Continuous optimization:</strong> adjust the agent's responses and flows based on patient feedback and results obtained.</>}</li>
            </ol>
          </section>

          {/* Authority link */}
          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed">
              {isEs
                ? <>Las clÃ­nicas en Navarra que adoptan IA estÃ¡n mejorando su operativa y la experiencia de sus pacientes. Descubre todas las <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial para empresas en Navarra</Link> y cÃ³mo pueden aplicarse a tu centro de salud.</>
                : <>Clinics in Navarra that adopt AI are improving their operations and patient experience. Discover all the <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence solutions for businesses in Navarra</Link> and how they can be applied to your health center.</>}
            </p>
          </section>

          {/* CTA Section */}
          <section className="mt-16 p-4 sm:p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Implementa inteligencia artificial en tu clÃ­nica' : 'Implement artificial intelligence in your clinic'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Si quieres implementar inteligencia artificial en tu empresa en Navarra, solicita un diagnÃ³stico estratÃ©gico personalizado.'
                : 'If you want to implement artificial intelligence in your business in Navarra, request a personalized strategic diagnosis.'}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto gap-2">
              <Link href={`${LOVABLE}/diagnostico-ia-navarra`}>
                {isEs ? 'Solicitar diagnÃ³stico estratÃ©gico' : 'Request strategic diagnosis'} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </section>
        </div>
      </article>
    </>
  );
};

export default IAClinicasNavarra;





