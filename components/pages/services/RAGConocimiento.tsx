'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import ServicePageLayout from '@/components/shared/ServicePageLayout';
import RelatedServices from '@/components/shared/RelatedServices';
import { Clock, Shield, TrendingUp, Users, Zap, Target, BookOpen, HeartHandshake, Search, GraduationCap, CheckCircle2, AlertTriangle, Sparkles, Timer, UserCheck } from 'lucide-react';

interface Props {
  language: Language;
}

const RAGConocimiento = ({ language }: Props) => {
  const content = {
    es: {
      title: 'Agentes RAG con Base de Conocimiento para Empresas',
      introduction: <>En muchas empresas, el conocimiento está disperso: manuales técnicos que nadie lee, documentos en carpetas olvidadas, información que solo saben los empleados veteranos. Cuando alguien tiene una duda, tarda en encontrar la respuesta o depende de preguntar a "el que sabe". Dentro de nuestro catálogo de <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">inteligencia artificial en Navarra</Link>, un agente RAG (Retrieval-Augmented Generation) es un asistente de IA que accede a toda tu información, busca lo relevante y responde preguntas como lo haría un experto. No inventa: siempre responde basándose en tus documentos reales. Este tipo de solución se complementa perfectamente con la <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos empresariales</Link>, permitiendo que la información fluya sin intervención manual.</>,
      aiReference: 'Esta tecnología es similar a la que funciona en esta web, pero entrenada con tu propia información. El agente se convierte en un experto en tu negocio.',
      problems: [
        { text: 'El conocimiento crítico está en la cabeza de unos pocos: si se van o están ocupados, nadie sabe responder' },
        { text: 'Manuales y documentos que nadie consulta: la información existe pero encontrarla lleva demasiado tiempo' },
        { text: 'Nuevos empleados tardan meses en formarse: dependen de que otros les enseñen, uno a uno' },
        { text: 'Respuestas inconsistentes a clientes: cada persona dice algo diferente porque no hay una fuente única' },
        { text: 'Información desactualizada circulando: nadie sabe cuál es la versión correcta del procedimiento' },
        { text: 'Pérdida de tiempo buscando datos: "¿dónde estaba esa especificación?", "¿qué decía el manual?"' },
      ],
      howItWorks: [
        { title: 'Recopilamos tu conocimiento', description: 'Identificamos todas las fuentes de información de tu empresa: manuales técnicos, documentación de productos, procedimientos internos, FAQs, histórico de incidencias, correos relevantes...' },
        { title: 'Procesamos y organizamos', description: 'La IA procesa todos los documentos, entiende su contenido y crea una base de conocimiento estructurada donde puede buscar respuestas rápidamente.' },
        { title: 'Creamos tu agente experto', description: 'Configuramos un asistente que responde preguntas buscando en tu base de conocimiento. No inventa: siempre cita la fuente de la información.' },
        { title: 'Respuestas precisas y contextuales', description: 'El agente entiende preguntas complejas, busca en múltiples documentos y sintetiza respuestas completas con referencias. El sistema puede resumir información compleja y mostrar solo lo relevante, evitando tener que revisar documentos completos.' },
        { title: 'Democratización del conocimiento', description: 'Todos los empleados tienen acceso al mismo nivel de información. El nuevo como el veterano. Nadie depende de "el que sabe".' },
        { title: 'Actualización continua', description: 'Cuando añades nuevos documentos o actualizas procedimientos, el agente se actualiza automáticamente.' },
      ],
      examples: [
        { industry: 'Empresa industrial o taller', description: 'Acceso instantáneo a manuales técnicos de maquinaria, especificaciones, procedimientos de mantenimiento y protocolos de seguridad. Accede en segundos a manuales de cientos de páginas sin tener que buscarlos manualmente. Cualquier trabajador puede encontrar lo que necesita sin depender del experto.' },
        { industry: 'Despacho de abogados', description: 'Búsqueda en jurisprudencia, contratos anteriores, modelos de documentos y procedimientos internos. Respuestas precisas con referencias legales.' },
        { industry: 'Centro de formación o exámenes', description: 'Asistente para alumnos que responde sobre contenidos del curso, fechas, requisitos y materiales. Los alumnos pueden resolver dudas complejas al instante basándose en todo el contenido disponible, como si tuvieran un profesor siempre accesible.' },
        { industry: 'Formación profesional o certificaciones', description: 'Permite consultar normativa, temarios o preguntas tipo test sin tener que revisar documentos completos. Reduce consultas repetitivas al profesorado y agiliza el estudio.' },
        { industry: 'Empresa con documentación interna', description: 'Tus empleados acceden a procedimientos, políticas o información clave sin depender de otros ni perder tiempo buscando. Todo el conocimiento interno, accesible en segundos.' },
        { industry: 'Servicio técnico o SAT', description: 'Acceso rápido a fichas de productos, diagnóstico de averías, recambios compatibles y procedimientos de reparación. Encuentra soluciones en segundos cruzando información de múltiples casos anteriores, sin revisar historiales manualmente.' },
      ],
      benefits: [
        { icon: <Search className="w-5 h-5" />, text: 'Encuentra cualquier información en segundos' },
        { icon: <BookOpen className="w-5 h-5" />, text: 'Tu documentación, siempre accesible' },
        { icon: <GraduationCap className="w-5 h-5" />, text: 'Onboarding de empleados 10x más rápido' },
        { icon: <Users className="w-5 h-5" />, text: 'Todos acceden al mismo conocimiento' },
        { icon: <Shield className="w-5 h-5" />, text: 'Respuestas basadas en datos reales' },
        { icon: <Zap className="w-5 h-5" />, text: 'Consistencia en las respuestas' },
        { icon: <Clock className="w-5 h-5" />, text: 'Ahorro de tiempo en búsquedas' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'El conocimiento ya no se pierde' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Productividad desde el día uno' },
        { icon: <Target className="w-5 h-5" />, text: 'Menos dependencia de personas clave' },
        { icon: <Timer className="w-5 h-5" />, text: 'Reduce drásticamente el tiempo de búsqueda de información' },
        { icon: <UserCheck className="w-5 h-5" />, text: 'Permite que cualquier empleado trabaje como si tuviera experiencia' },
      ],
      ctaText: 'Convierte tu documentación en un experto disponible 24/7. Tu conocimiento, siempre accesible',
      ctaButton: 'Solicitar diagnóstico estratégico',
    },
    en: {
      title: 'RAG Agents with Knowledge Base for Businesses',
      introduction: <>In many companies, knowledge is scattered: technical manuals that no one reads, documents in forgotten folders, information that only veteran employees know. When someone has a question, it takes time to find the answer or depends on asking "the one who knows". Within our <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">artificial intelligence catalog for Navarra</Link>, a RAG (Retrieval-Augmented Generation) agent is an AI assistant that accesses all your information, searches for what is relevant, and answers questions like an expert would. It doesn't make things up: it always responds based on your real documents. This solution integrates perfectly with <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">business process automation</Link>, allowing information to flow without manual intervention.</>,
      aiReference: 'This technology is similar to what works on this website, but trained with your own information. The agent becomes an expert in your business.',
      problems: [
        { text: 'Critical knowledge is in the heads of a few: if they leave or are busy, no one knows how to answer' },
        { text: 'Manuals and documents that no one consults: the information exists but finding it takes too long' },
        { text: 'New employees take months to train: they depend on others teaching them, one by one' },
        { text: 'Inconsistent answers to customers: each person says something different because there is no single source' },
        { text: 'Outdated information circulating: no one knows which is the correct version of the procedure' },
        { text: 'Wasted time searching for data: "where was that specification?", "what did the manual say?"' },
      ],
      howItWorks: [
        { title: 'We collect your knowledge', description: 'We identify all your company\'s information sources: technical manuals, product documentation, internal procedures, FAQs, incident history, relevant emails...' },
        { title: 'We process and organize', description: 'AI processes all documents, understands their content, and creates a structured knowledge base where it can quickly search for answers.' },
        { title: 'We create your expert agent', description: 'We configure an assistant that answers questions by searching your knowledge base. It doesn\'t make things up: it always cites the source of information.' },
        { title: 'Precise and contextual answers', description: 'The agent understands complex questions, searches multiple documents, and synthesizes complete answers with references. The system can summarize complex information and show only what\'s relevant, avoiding the need to review entire documents.' },
        { title: 'Democratization of knowledge', description: 'All employees have access to the same level of information. The new one like the veteran. No one depends on "the one who knows".' },
        { title: 'Continuous update', description: 'When you add new documents or update procedures, the agent updates automatically.' },
      ],
      examples: [
        { industry: 'Industrial company or workshop', description: 'Instant access to machine technical manuals, specifications, maintenance procedures, and safety protocols. Access hundreds of pages of manuals in seconds without searching manually. Any worker can find what they need without depending on the expert.' },
        { industry: 'Law firm', description: 'Search in case law, previous contracts, document templates, and internal procedures. Precise answers with legal references.' },
        { industry: 'Training center or exams', description: 'Assistant for students that answers about course content, dates, requirements, and materials. Students can resolve complex questions instantly based on all available content, as if they had a teacher always accessible.' },
        { industry: 'Professional training or certifications', description: 'Allows consulting regulations, syllabi, or test questions without having to review complete documents. Reduces repetitive queries to teachers and speeds up studying.' },
        { industry: 'Company with internal documentation', description: 'Your employees access procedures, policies, or key information without depending on others or wasting time searching. All internal knowledge, accessible in seconds.' },
        { industry: 'Technical service', description: 'Quick access to product sheets, fault diagnosis, compatible spare parts, and repair procedures. Find solutions in seconds by cross-referencing information from multiple previous cases, without manually reviewing records.' },
      ],
      benefits: [
        { icon: <Search className="w-5 h-5" />, text: 'Find any information in seconds' },
        { icon: <BookOpen className="w-5 h-5" />, text: 'Your documentation, always accessible' },
        { icon: <GraduationCap className="w-5 h-5" />, text: 'Employee onboarding 10x faster' },
        { icon: <Users className="w-5 h-5" />, text: 'Everyone accesses the same knowledge' },
        { icon: <Shield className="w-5 h-5" />, text: 'Answers based on real data' },
        { icon: <Zap className="w-5 h-5" />, text: 'Consistency in responses' },
        { icon: <Clock className="w-5 h-5" />, text: 'Time saved on searches' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Knowledge no longer gets lost' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Productivity from day one' },
        { icon: <Target className="w-5 h-5" />, text: 'Less dependence on key people' },
        { icon: <Timer className="w-5 h-5" />, text: 'Drastically reduces information search time' },
        { icon: <UserCheck className="w-5 h-5" />, text: 'Any employee can work as if they had years of experience' },
      ],
      ctaText: 'Turn your documentation into an expert available 24/7. Your knowledge, always accessible',
      ctaButton: 'Request strategic diagnosis',
    },
  };

  const c = content[language];

  const beforeHowItWorks = (
    <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        {language === 'es' ? 'Cuando la información existe, pero no se usa' : 'When information exists, but isn\'t used'}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="holographic-border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            {language === 'es' ? 'En muchas empresas...' : 'In many companies...'}
          </h3>
          <ul className="space-y-3">
            {(language === 'es' ? [
              'Los manuales son demasiado largos para consultarlos',
              'Solo una persona sabe realmente cómo hacer las cosas',
              'Se pierde tiempo buscando en múltiples sitios',
              'La información está, pero no se encuentra cuando se necesita',
            ] : [
              'Manuals are too long to consult',
              'Only one person truly knows how to do things',
              'Time is wasted searching across multiple locations',
              'Information exists, but can\'t be found when needed',
            ]).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="holographic-border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {language === 'es' ? 'Con este sistema...' : 'With this system...'}
          </h3>
          <ul className="space-y-3">
            {(language === 'es' ? [
              'Puedes encontrar respuestas en segundos',
              'No necesitas saber dónde está la información',
              'No dependes de una persona concreta',
              'El conocimiento se vuelve accesible para todo el equipo',
            ] : [
              'You can find answers in seconds',
              'You don\'t need to know where the information is',
              'You don\'t depend on a specific person',
              'Knowledge becomes accessible to the entire team',
            ]).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-muted-foreground text-sm text-center mt-6">
        {language === 'es'
          ? <>Este tipo de agente puede integrarse con <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes IA para atención al cliente en Navarra</Link> y con <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link> para crear una experiencia completa.</>
          : <>This type of agent can integrate with <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> and with <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">AI-powered web development</Link> to create a complete experience.</>
        }
      </p>
    </section>
  );

  const strongPhrase = (
    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8 text-center space-y-3">
      <p className="text-lg font-semibold text-foreground">
        {language === 'es'
          ? 'Tu empresa ya tiene el conocimiento. El problema es que no está disponible cuando lo necesitas.'
          : 'Your company already has the knowledge. The problem is it\'s not available when you need it.'}
      </p>
      <p className="text-muted-foreground">
        {language === 'es'
          ? 'Esto no es solo acceso a información. Es una nueva forma de trabajar dentro de tu empresa.'
          : 'This is not just access to information. It\'s a new way of working within your company.'}
      </p>
    </div>
  );

  return (
    <>
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
        beforeHowItWorks={beforeHowItWorks}
        beforeCta={strongPhrase}
      />
      <RelatedServices
        language={language}
        currentPath="/rag-base-conocimiento-empresas"
        relatedKeys={['agentesIA', 'voz', 'consultoria']}
      />
    </>
  );
};

export default RAGConocimiento;




