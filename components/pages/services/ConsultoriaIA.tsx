'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import ServicePageLayout from '@/components/shared/ServicePageLayout';
import RelatedServices from '@/components/shared/RelatedServices';
import { Clock, Shield, TrendingUp, Users, Zap, Target, Compass, Euro, HeartHandshake, Lightbulb, Map, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  language: Language;
}

const ConsultoriaIA = ({ language }: Props) => {
  const content = {
    es: {
      title: 'Consultoría de Inteligencia Artificial para Empresas en Navarra',
      introduction: <>Sabes que la inteligencia artificial puede ayudar a tu negocio, pero no tienes claro por dónde empezar. Esta consultoría no es un servicio aislado. Es el primer paso para identificar qué soluciones tienen sentido en tu empresa y cómo implementarlas de forma realista. Analizamos tu negocio, detectamos oportunidades y definimos un plan claro orientado a acción, no solo a ideas.</>,
      aiReference: 'Esta consultoría la hacemos nosotros mismos, los que hemos desarrollado el agente IA que ves funcionando en esta web. No vendemos teoría. Implementamos soluciones reales basadas en lo que ya funciona en empresas.',
      problems: [
        { text: 'No sabes qué procesos puedes automatizar ni cuáles darían más resultado' },
        { text: 'Miedo a invertir en tecnología que no entiendas o que no uses' },
        { text: 'Proveedores que prometen la luna pero entregan proyectos que no funcionan' },
        { text: 'Sensación de que la IA es solo para grandes empresas con grandes presupuestos' },
        { text: 'Falta de tiempo y conocimiento interno para evaluar opciones' },
        { text: 'Prioridades poco claras: ¿por dónde empezar? ¿qué es más urgente?' },
      ],
      howItWorks: [
        { title: 'Diagnóstico inicial de tu empresa', description: 'Analizamos cómo funciona tu negocio: qué procesos consumen más tiempo, dónde hay cuellos de botella, qué tareas se repiten, qué información gestionas. Entendemos tu realidad antes de proponer nada.' },
        { title: 'Identificación de oportunidades', description: 'Detectamos qué se puede automatizar con IA y qué impacto tendría. No todo merece automatizarse: priorizamos lo que tiene retorno real y es viable para tu tamaño.' },
        { title: 'Plan de acción claro', description: 'Diseñamos una hoja de ruta con prioridades, plazos estimados, inversión necesaria y beneficios esperados. Sin tecnicismos, en lenguaje que entiendas.' },
        { title: 'Acompañamiento en la implementación', description: 'Si decides avanzar, te guiamos durante todo el proceso. No te dejamos solo con un documento: estamos contigo hasta que la solución funcione.' },
        { title: 'Formación de tu equipo', description: 'Enseñamos a tu equipo a usar las nuevas herramientas. La tecnología solo sirve si la gente sabe aprovecharla.' },
        { title: 'Seguimiento de resultados', description: 'Medimos el impacto real de las automatizaciones y ajustamos según los resultados. No damos por hecho que todo funciona: lo comprobamos.' },
      ],
      examples: [
        { industry: 'Autónomo o micropyme', description: 'Identificamos qué tareas administrativas puedes automatizar para recuperar horas cada semana: facturación, atención básica, gestión de citas, seguimiento de clientes.' },
        { industry: 'Empresa familiar', description: 'Analizamos procesos internos que dependen de una sola persona y diseñamos soluciones para que el conocimiento no se pierda y las operaciones no se paren.' },
        { industry: 'Comercio o tienda', description: 'Evaluamos oportunidades en gestión de inventario, atención al cliente, marketing y ventas online. Qué tiene sentido automatizar y qué no.' },
        { industry: 'Empresa de servicios', description: 'Identificamos cómo mejorar la gestión de proyectos, la comunicación con clientes y la generación de propuestas. Menos tiempo en administración, más en servir.' },
        { industry: 'Sector industrial', description: 'Analizamos procesos de producción, mantenimiento, calidad y documentación técnica. Dónde la IA puede aportar más valor sin grandes inversiones.' },
        { industry: 'Profesional liberal', description: 'Abogados, arquitectos, consultores... identificamos cómo la IA puede ayudarte con investigación, documentación, atención a clientes y gestión del tiempo.' },
      ],
      benefits: [
        { icon: <Compass className="w-5 h-5" />, text: 'Claridad sobre por dónde empezar' },
        { icon: <Map className="w-5 h-5" />, text: 'Plan de acción adaptado a tu realidad' },
        { icon: <Euro className="w-5 h-5" />, text: 'Inversión con retorno medible' },
        { icon: <Shield className="w-5 h-5" />, text: 'Reducción de riesgos tecnológicos' },
        { icon: <Clock className="w-5 h-5" />, text: 'Ahorro de tiempo en decisiones' },
        { icon: <Lightbulb className="w-5 h-5" />, text: 'Ideas concretas, no teoría' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Acompañamiento real, no solo documentos' },
        { icon: <Users className="w-5 h-5" />, text: 'Formación incluida para tu equipo' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Resultados medidos y ajustados' },
        { icon: <Target className="w-5 h-5" />, text: 'Enfoque en lo que realmente importa' },
      ],
      ctaText: 'Empieza con un diagnóstico claro y decide con datos qué implementar',
      ctaButton: 'Solicitar diagnóstico estratégico',
    },
    en: {
      title: 'Artificial Intelligence Consulting for Companies in Navarra',
      introduction: <>You know that artificial intelligence can help your business, but you are not sure where to start. This consulting is not an isolated service. It is the first step to identify which solutions make sense for your company and how to implement them realistically. We analyze your business, detect opportunities, and define a clear plan oriented to action, not just ideas.</>,
      aiReference: 'This consulting is done by ourselves, the ones who developed the AI agent you see working on this website. We don\'t sell theory. We implement real solutions based on what already works in businesses.',
      problems: [
        { text: 'You do not know which processes you can automate or which would give the best results' },
        { text: 'Fear of investing in technology you do not understand or will not use' },
        { text: 'Providers who promise the moon but deliver projects that do not work' },
        { text: 'Feeling that AI is only for large companies with large budgets' },
        { text: 'Lack of time and internal knowledge to evaluate options' },
        { text: 'Unclear priorities: where to start? what is most urgent?' },
      ],
      howItWorks: [
        { title: 'Initial diagnosis of your company', description: 'We analyze how your business works: which processes consume the most time, where there are bottlenecks, which tasks repeat, what information you manage. We understand your reality before proposing anything.' },
        { title: 'Opportunity identification', description: 'We detect what can be automated with AI and what impact it would have. Not everything deserves automation: we prioritize what has real return and is viable for your size.' },
        { title: 'Clear action plan', description: 'We design a roadmap with priorities, estimated deadlines, required investment, and expected benefits. Without technicalities, in language you understand.' },
        { title: 'Implementation support', description: 'If you decide to move forward, we guide you throughout the process. We do not leave you alone with a document: we are with you until the solution works.' },
        { title: 'Team training', description: 'We teach your team to use the new tools. Technology only works if people know how to use it.' },
        { title: 'Results monitoring', description: 'We measure the real impact of automations and adjust according to results. We do not assume everything works: we verify it.' },
      ],
      examples: [
        { industry: 'Self-employed or micro-SME', description: 'We identify which administrative tasks you can automate to recover hours each week: billing, basic attention, appointment management, customer tracking.' },
        { industry: 'Family business', description: 'We analyze internal processes that depend on one person and design solutions so knowledge is not lost and operations do not stop.' },
        { industry: 'Commerce or store', description: 'We evaluate opportunities in inventory management, customer service, marketing, and online sales. What makes sense to automate and what does not.' },
        { industry: 'Service company', description: 'We identify how to improve project management, customer communication, and proposal generation. Less time on administration, more on serving.' },
        { industry: 'Industrial sector', description: 'We analyze production, maintenance, quality, and technical documentation processes. Where AI can add more value without large investments.' },
        { industry: 'Liberal professional', description: 'Lawyers, architects, consultants... we identify how AI can help you with research, documentation, customer service, and time management.' },
      ],
      benefits: [
        { icon: <Compass className="w-5 h-5" />, text: 'Clarity on where to start' },
        { icon: <Map className="w-5 h-5" />, text: 'Action plan adapted to your reality' },
        { icon: <Euro className="w-5 h-5" />, text: 'Investment with measurable return' },
        { icon: <Shield className="w-5 h-5" />, text: 'Reduced technological risks' },
        { icon: <Clock className="w-5 h-5" />, text: 'Time saved on decisions' },
        { icon: <Lightbulb className="w-5 h-5" />, text: 'Concrete ideas, not theory' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Real support, not just documents' },
        { icon: <Users className="w-5 h-5" />, text: 'Training included for your team' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Results measured and adjusted' },
        { icon: <Target className="w-5 h-5" />, text: 'Focus on what really matters' },
      ],
      ctaText: 'Start with a clear diagnosis and decide with data what to implement',
      ctaButton: 'Request strategic diagnosis',
    },
  };

  const c = content[language];

  const implementationBlock = (
    <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.18s' }}>
      <div className="holographic-border rounded-xl p-8">
        <p className="text-muted-foreground mb-5">
          {language === 'es'
            ? 'Nuestro objetivo no es solo analizar, sino ayudarte a pasar a la acción con soluciones reales como:'
            : 'Our goal is not just to analyze, but to help you take action with real solutions like:'}
        </p>
        <ul className="space-y-3">
          {(language === 'es' ? [
            { text: 'Automatización de procesos', to: '/automatizacion-procesos-empresas-navarra' },
            { text: 'Agentes de atención al cliente', to: '/agentes-ia-atencion-cliente-navarra' },
            { text: 'Sistemas de conocimiento (RAG)', to: '/rag-base-conocimiento-empresas' },
            { text: 'Desarrollo web con inteligencia artificial', to: '/desarrollo-web-inteligencia-artificial' },
          ] : [
            { text: 'Process automation', to: '/automatizacion-procesos-empresas-navarra' },
            { text: 'Customer service agents', to: '/agentes-ia-atencion-cliente-navarra' },
            { text: 'Knowledge systems (RAG)', to: '/rag-base-conocimiento-empresas' },
            { text: 'AI-powered web development', to: '/desarrollo-web-inteligencia-artificial' },
          ]).map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
              <Link href={item.to} className="text-primary hover:underline font-medium">{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <ServicePageLayout
        language={language}
        title={c.title}
        introduction={c.introduction}
        problems={c.problems}
        howItWorks={c.howItWorks}
        examples={c.examples}
        benefits={c.benefits}
        ctaText={c.ctaText}
        ctaButton={c.ctaButton}
        aiReference={c.aiReference}
        beforeHowItWorks={implementationBlock}
      />
  );
};

export default ConsultoriaIA;




