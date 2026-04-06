'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  language: Language;
}

const LOVABLE = '';

const IAClinicasNavarraPage = ({ language }: Props) => {
  const isEs = language === 'es';

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Inteligencia artificial para clínicas en Navarra",
    "description": "Sistemas de inteligencia artificial para clínicas en Navarra y Pamplona: automatización de citas, atención al paciente 24/7 y gestión clínica inteligente.",
    "url": "https://rtpdigitalsolutions.es/ia-clinicas-navarra",
    "publisher": { "@type": "Organization", "name": "RTP Digital Solutions", "url": "https://rtpdigitalsolutions.es" },
  };

  return (
    <>
            <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {isEs ? 'Inteligencia artificial para clínicas en Navarra' : 'Artificial intelligence for clinics in Navarra'}
          </h1>

          {/* New strategic intro */}
          <div className="text-lg text-muted-foreground mb-16 max-w-2xl space-y-4">
            <p>
              {isEs
                ? 'La gestión de una clínica ya no puede depender de llamadas, agendas manuales y procesos lentos.'
                : 'Clinic management can no longer rely on phone calls, manual scheduling and slow processes.'}
            </p>
            <p>
              {isEs
                ? <>Hoy, las clínicas más eficientes en Navarra y Pamplona funcionan como sistemas digitales: automatizan citas, responden a pacientes al instante, gestionan información médica y optimizan su operativa diaria con <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">inteligencia artificial</Link>.</>
                : <>Today, the most efficient clinics in Navarra and Pamplona operate as digital systems: they automate appointments, respond to patients instantly, manage medical information and optimize daily operations with <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence</Link>.</>}
            </p>
            <p>
              {isEs
                ? 'La inteligencia artificial permite transformar tu clínica en un sistema conectado que mejora la atención al paciente y aumenta la eficiencia del equipo.'
                : 'Artificial intelligence allows you to transform your clinic into a connected system that improves patient care and increases team efficiency.'}
            </p>
           </div>

          <p className="text-lg font-medium text-foreground mb-16">
            {isEs
              ? 'Las clínicas que ya están automatizando su gestión están atendiendo más pacientes con menos carga administrativa.'
              : 'Clinics that are already automating their management are serving more patients with less administrative burden.'}
          </p>

          {/* System vision block */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Tu clínica como sistema inteligente' : 'Your clinic as an intelligent system'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  {isEs ? 'Un paciente puede:' : 'A patient can:'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Reservar o modificar citas automáticamente' : 'Book or modify appointments automatically'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Consultar tratamientos, precios o preparación previa' : 'Check treatments, prices or prior preparation'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Recibir recordatorios y seguimiento post-tratamiento' : 'Receive reminders and post-treatment follow-up'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  {isEs ? 'El equipo puede:' : 'The team can:'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Gestionar agendas sin fricción' : 'Manage schedules without friction'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Automatizar tareas administrativas' : 'Automate administrative tasks'}</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Generar informes y organizar información clínica' : 'Generate reports and organize clinical information'}</li>
                </ul>
              </div>
            </div>
             <p className="text-muted-foreground leading-relaxed mt-6">
              {isEs
                ? <>Toda la información se centraliza y se convierte en un sistema que trabaja de forma continua. Tu <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">web actúa como el sistema central</Link> que conecta pacientes, equipo y herramientas.</>
                : <>All information is centralized and becomes a system that works continuously. Your <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">website acts as the central system</Link> connecting patients, team and tools.</>}
             </p>
             <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
              {isEs
                ? 'Tu clínica deja de depender de personas y pasa a funcionar como un sistema organizado y eficiente.'
                : 'Your clinic stops depending on people and starts operating as an organized and efficient system.'}
             </p>
          </section>

          {/* Use cases - business focused */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos de uso reales en clínicas' : 'Real use cases in clinics'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEs
                ? <>Estas soluciones se aplican a clínicas dentales, clínicas estéticas, centros de fisioterapia, veterinarias y centros de salud en Navarra y Pamplona. Gracias a los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA para atención al paciente</Link> y la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos</Link>, cualquier clínica puede implementar:</>
                : <>These solutions apply to dental clinics, aesthetic clinics, physiotherapy centers, veterinary clinics and health centers in Navarra and Pamplona. Thanks to <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for patient care</Link> and <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">process automation</Link>, any clinic can implement:</>}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Gestión automática de citas y recordatorios</strong> sin llamadas telefónicas.</> : <><strong>Automatic appointment and reminder management</strong> without phone calls.</>}</li>
              <li>{isEs ? <><strong>Atención a pacientes 24/7:</strong> consultas sobre horarios, tratamientos y preparación sin saturar recepción.</> : <><strong>24/7 patient care:</strong> inquiries about schedules, treatments and preparation without overwhelming reception.</>}</li>
              <li>{isEs ? <><strong>Formularios inteligentes</strong> para recoger información previa del paciente antes de la consulta.</> : <><strong>Intelligent forms</strong> to collect patient information before the appointment.</>}</li>
              <li>{isEs ? <><strong>Seguimiento automático post-tratamiento:</strong> recordatorios de revisiones, cuidados y próximas citas.</> : <><strong>Automatic post-treatment follow-up:</strong> review reminders, care instructions and next appointments.</>}</li>
              <li>{isEs ? <><strong>Centralización de historiales y documentos</strong> accesibles para todo el equipo.</> : <><strong>Centralization of records and documents</strong> accessible to the entire team.</>}</li>
              <li>{isEs ? <><strong>Campañas automáticas a pacientes:</strong> recordatorios de revisiones periódicas, promociones y comunicaciones personalizadas.</> : <><strong>Automatic patient campaigns:</strong> periodic review reminders, promotions and personalized communications.</>}</li>
            </ul>
          </section>

          {/* Business impact */}
          <section className="mb-16 p-6 md:p-8 rounded-xl border border-border bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Impacto real en tu negocio' : 'Real impact on your business'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEs
                ? 'Esto no solo mejora la operativa. Permite atender más pacientes, reducir costes y aumentar ingresos sin aumentar el equipo.'
                : 'This doesn\'t just improve operations. It allows you to serve more patients, reduce costs and increase revenue without growing your team.'}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>{isEs ? <><strong>Ahorro de tiempo:</strong> menos llamadas, menos gestión manual, más tiempo para atención clínica.</> : <><strong>Time savings:</strong> fewer calls, less manual management, more time for clinical care.</>}</li>
              <li>{isEs ? <><strong>Reducción de carga administrativa:</strong> el personal se libera de tareas repetitivas.</> : <><strong>Reduced administrative burden:</strong> staff is freed from repetitive tasks.</>}</li>
              <li>{isEs ? <><strong>Aumento de pacientes atendidos:</strong> la automatización permite gestionar más volumen con el mismo equipo.</> : <><strong>More patients served:</strong> automation enables managing higher volume with the same team.</>}</li>
              <li>{isEs ? <><strong>Mejora de la experiencia del paciente:</strong> atención inmediata, profesional y disponible en cualquier momento.</> : <><strong>Better patient experience:</strong> immediate, professional care available at any time.</>}</li>
              <li>{isEs ? <><strong>Más ingresos sin aumentar el equipo:</strong> la automatización permite escalar sin contratar más personal.</> : <><strong>More revenue without growing the team:</strong> automation enables scaling without hiring more staff.</>}</li>
              <li>{isEs ? <><strong>Menos citas perdidas:</strong> gracias a recordatorios automáticos que reducen las ausencias de forma significativa.</> : <><strong>Fewer missed appointments:</strong> thanks to automatic reminders that significantly reduce no-shows.</>}</li>
             </ul>
          </section>

          {/* Casos reales */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Casos reales de inteligencia artificial en el sector sanitario en Navarra' : 'Real cases of artificial intelligence in healthcare in Navarra'}
            </h2>

            <div className="space-y-6">
              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'Citación automática telefónica con IA en Atención Primaria' : 'Automatic telephone appointment scheduling with AI in Primary Care'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'El Servicio Navarro de Salud-Osasunbidea está impulsando un proyecto piloto para incorporar sistemas de citación automática telefónica con inteligencia artificial, con el objetivo de mejorar la accesibilidad a la Atención Primaria.'
                    : 'The Navarre Health Service (Osasunbidea) is promoting a pilot project to incorporate automatic telephone appointment scheduling systems with artificial intelligence, aiming to improve accessibility to Primary Care.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Diario de Navarra
                </p>
                <a href="https://www.diariodenavarra.es/noticias/navarra/2026/03/13/salud-trabaja-implantacion-navarra-sistemas-citacion-automatica-telefonica-inteligencia-artificial-813347-15.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'La IA mejora la seguridad clínica en la CUN' : 'AI improves clinical safety at CUN'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'Una investigación de la Clínica Universidad de Navarra ha demostrado que la inteligencia artificial puede mejorar la seguridad clínica, abriendo nuevas vías para la aplicación de IA en entornos sanitarios.'
                    : 'Research from the University of Navarra Clinic has demonstrated that artificial intelligence can improve clinical safety, opening new avenues for AI application in healthcare settings.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Diario de Navarra
                </p>
                <a href="https://www.diariodenavarra.es/noticias/navarra/2024/10/24/tesis-enfermera-doctora-medicina-cun-demuestra-ia-mejorar-seguridad-clinica-626553-300.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>

              <article className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {isEs ? 'NAIR Center: proyectos de IA en salud en Navarra' : 'NAIR Center: AI health projects in Navarra'}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isEs
                    ? 'El Centro de Investigación en Inteligencia Artificial de Navarra (NAIR Center) trabaja en ocho proyectos, cuatro de ellos relacionados con el ámbito de la salud, impulsando la innovación tecnológica en el sector sanitario navarro.'
                    : 'The Navarra Artificial Intelligence Research Center (NAIR Center) is working on eight projects, four of which are related to the health field, driving technological innovation in the Navarra healthcare sector.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{isEs ? 'Fuente' : 'Source'}:</strong> Diario de Navarra
                </p>
                <a href="https://www.diariodenavarra.es/noticias/navarra/2024/05/24/nair-center-trabaja-ocho-proyectos-ia-cuatro-el-campo-salud-609707-300.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline font-medium">
                  {isEs ? 'Leer artículo original →' : 'Read original article →'}
                </a>
              </article>
            </div>
          </section>

          {/* Demo section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Así funciona en la práctica' : 'How it works in practice'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              {isEs
                ? 'Este es un ejemplo real de cómo una clínica puede funcionar como un sistema conectado: el paciente gestiona sus citas y el equipo controla la operativa desde un panel central.'
                : 'This is a real example of how a clinic can operate as a connected system: the patient manages their appointments and the team controls operations from a central panel.'}
            </p>

            {/* Demo 1 — Patient side */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {isEs ? 'Experiencia del paciente' : 'Patient experience'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isEs
                  ? 'Así interactúa el paciente con el sistema: puede consultar información, reservar o modificar citas y recibir respuestas sin depender de llamadas ni esperas.'
                  : 'This is how the patient interacts with the system: they can check information, book or modify appointments and get answers without relying on calls or waiting.'}
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <video
                  className="w-full aspect-video object-cover"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src="/videos/demo-clinica-paciente.mp4" type="video/mp4" />
                </video>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Reserva o modifica citas en segundos' : 'Book or modify appointments in seconds'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Recibe respuestas automáticas' : 'Get automatic responses'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Accede fácilmente desde cualquier dispositivo' : 'Easily access from any device'}</li>
              </ul>
            </div>

            {/* Demo 2 — Admin side */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {isEs ? 'Panel del equipo y gestión interna' : 'Team panel and internal management'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isEs
                  ? 'Así lo gestiona la clínica por dentro: agenda, seguimiento, control de pacientes y organización operativa desde un entorno centralizado.'
                  : 'This is how the clinic manages it internally: schedule, follow-up, patient control and operational organization from a centralized environment.'}
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <video
                  className="w-full aspect-video object-cover"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src="/videos/demo-clinica-admin.mp4" type="video/mp4" />
                </video>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Control de agenda y disponibilidad' : 'Schedule and availability control'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Gestión centralizada de pacientes' : 'Centralized patient management'}</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>{isEs ? 'Menos carga administrativa para el equipo' : 'Less administrative burden for the team'}</li>
              </ul>
            </div>

            {/* Bridge text */}
            <p className="text-foreground font-medium text-center text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              {isEs
                ? 'La diferencia no es solo responder mejor. Es convertir la atención, las citas y la organización interna en un sistema conectado que ahorra tiempo y mejora la experiencia del paciente.'
                : 'The difference is not just responding better. It\'s turning care, appointments and internal organization into a connected system that saves time and improves the patient experience.'}
            </p>

            {/* CTA area */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href={`${LOVABLE}/diagnostico-ia-navarra`}>
                <Button size="sm" className="w-full sm:w-auto gap-2 font-bold">
                  {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <button
                onClick={() => {
                  const chatBar = document.querySelector('[data-chat-trigger]') as HTMLElement;
                  chatBar?.click();
                }}
              >
                <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2 font-bold border-secondary text-secondary hover:bg-secondary/10">
                  <Sparkles className="w-4 h-4" />
                  {isEs ? 'Probar Centro Inteligente' : 'Try the AI Center'}
                </Button>
              </button>
            </div>
          </section>

          {/* Sectors */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEs ? 'Para todo tipo de clínicas y centros en Navarra' : 'For all types of clinics and centers in Navarra'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEs
                ? 'Diseñado para clínicas en Navarra y Pamplona que quieren convertir su centro en un sistema inteligente de atención y gestión.'
                : 'Designed for clinics in Navarra and Pamplona that want to turn their center into an intelligent care and management system.'}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(isEs
                ? ['Clínicas dentales', 'Clínicas estéticas', 'Centros de fisioterapia', 'Veterinarias', 'Centros de salud', 'Clínicas especializadas']
                : ['Dental clinics', 'Aesthetic clinics', 'Physiotherapy centers', 'Veterinary clinics', 'Health centers', 'Specialized clinics']
              ).map((sector) => (
                <div key={sector} className="rounded-lg border border-border bg-muted/20 p-4 text-center text-muted-foreground font-medium">
                  {sector}
                </div>
              ))}
            </div>
          </section>

          {/* Urgency + CTA Section */}
          <p className="text-center text-lg font-medium text-foreground mb-8">
            {isEs
              ? 'Cada día sin automatización es tiempo perdido en tareas que pueden hacerse solas.'
              : 'Every day without automation is time wasted on tasks that can run themselves.'}
          </p>

          <section className="p-6 md:p-12 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {isEs ? 'Convierte tu clínica en un sistema inteligente con inteligencia artificial' : 'Turn your clinic into an intelligent system with artificial intelligence'}
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              {isEs
                ? 'Descubre cómo la inteligencia artificial puede mejorar la atención al paciente, automatizar la gestión y aumentar la eficiencia de tu clínica en Navarra.'
                : 'Discover how artificial intelligence can improve patient care, automate management and increase your clinic\'s efficiency in Navarra.'}
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto italic">
              {isEs
                ? 'No es una solución genérica. Se adapta a cómo funciona tu clínica.'
                : 'It\'s not a generic solution. It adapts to how your clinic works.'}
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

export default IAClinicasNavarraPage;



