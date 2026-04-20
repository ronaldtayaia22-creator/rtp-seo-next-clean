'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ArticleProps {
  language: Language;
}

const IA2026EuropaContextoRegulatorio = ({ language }: ArticleProps) => {
  const isEs = language === 'es';

  return (
    <article className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {isEs ? 'Volver al blog' : 'Back to blog'}
        </Link>

        <time className="text-sm text-muted-foreground block mb-4">2026-03-27</time>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight">
          {isEs
            ? 'IA en 2026 para empresas en Navarra: contexto en Espana y Europa'
            : 'AI in 2026 for businesses in Navarra: context in Spain and Europe'}
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed text-base md:text-lg">
          <section>
            <p>
              {isEs
                ? 'La conversacion sobre IA ya no gira solo en torno a modelos y demos. En 2026, para empresas en Navarra, Espana y Europa, el valor real esta en combinar productividad, cumplimiento y control de riesgo.'
                : 'The AI conversation is no longer only about models and demos. In 2026, for companies in Navarra, Spain, and Europe, real value comes from combining productivity, compliance, and risk control.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'Esto afecta a pymes y medianas empresas por igual: no basta con probar herramientas sueltas. Hace falta un enfoque operativo que conecte tecnologia con negocio, procesos y datos, como ya aplican las empresas que trabajan con una estrategia de inteligencia artificial bien definida.'
                : 'This affects SMBs and mid-sized businesses alike: testing isolated tools is not enough. You need an operational approach that connects technology with business goals, processes, and data, as seen in companies working with a clear AI strategy.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? '1) El marco europeo pasa a ser una ventaja competitiva' : '1) The European framework becomes a competitive advantage'}
            </h2>
            <p>
              {isEs
                ? 'Con el despliegue progresivo del AI Act y el marco de proteccion de datos (RGPD), las empresas que trabajan bien gobierno, trazabilidad y seguridad ganan velocidad comercial frente a quienes improvisan.'
                : 'With the progressive rollout of the AI Act and GDPR data-protection requirements, companies that establish governance, traceability, and security move faster commercially than those that improvise.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Inventario de casos de uso y nivel de riesgo.' : 'Inventory of use cases and risk level.'}</li>
              <li>{isEs ? 'Control de datos, acceso y registro de actividad.' : 'Data, access, and activity controls.'}</li>
              <li>{isEs ? 'Politicas internas para uso responsable de IA.' : 'Internal policies for responsible AI usage.'}</li>
            </ul>
            <p className="mt-4">
              {isEs ? 'Si no tienes este marco definido, una ' : 'If you do not have this framework defined, an '} 
              <Link href="/consultoria-inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'consultoria de inteligencia artificial' : 'AI consulting process'}
              </Link>
              {isEs ? ' te permite ordenar prioridades antes de invertir.' : ' helps you prioritize before investing.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? '2) El foco pasa de "usar IA" a "integrar IA"' : '2) The focus shifts from "using AI" to "integrating AI"'}
            </h2>
            <p>
              {isEs
                ? 'La diferencia entre una iniciativa puntual y una ventaja duradera esta en la integracion. En 2026, las empresas que integran IA en ventas, soporte y operaciones son las que convierten mejor y reducen costes de forma sostenida.'
                : 'The difference between a one-off initiative and durable advantage is integration. In 2026, companies that integrate AI into sales, support, and operations are the ones improving conversion and reducing costs in a sustained way.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'Aqui es donde suelen entrar agentes conversacionales, flujos de automatizacion y sistemas conectados al CRM y a la base de conocimiento. Puedes verlo en soluciones de '
                : 'This is where conversational agents, automation workflows, and systems connected to CRM and knowledge bases usually come into play. You can see it in '}
              <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'agentes IA para atencion al cliente' : 'AI customer service agents'}
              </Link>
              {isEs ? ' y en proyectos de ' : ' and in '} 
              <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'automatizacion de procesos empresariales' : 'business process automation'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? '3) Sectores en Espana con mayor traccion inmediata' : '3) Sectors in Spain with strongest immediate traction'}
            </h2>
            <p>
              {isEs
                ? 'En el mercado espanol, la adopcion practica esta avanzando especialmente en servicios profesionales, salud privada, retail y hosteleria, donde la IA aporta mejoras medibles en tiempos de respuesta y eficiencia operativa.'
                : 'In the Spanish market, practical adoption is moving especially fast in professional services, private healthcare, retail, and hospitality, where AI drives measurable improvements in response times and operational efficiency.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Atencion al cliente 24/7 con escalado inteligente a humano.' : '24/7 customer support with intelligent human escalation.'}</li>
              <li>{isEs ? 'Automatizacion de tareas repetitivas de backoffice.' : 'Automation of repetitive back-office tasks.'}</li>
              <li>{isEs ? 'Asistentes internos para equipos comerciales y operativos.' : 'Internal assistants for commercial and operational teams.'}</li>
            </ul>
            <p className="mt-4">
              {isEs ? 'Sectores como ' : 'Sectors such as '}
              <Link href="/ia-clinicas-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'clinicas' : 'clinics'}
              </Link>
              {isEs ? ', ' : ', '}
              <Link href="/ia-restaurantes-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'restauracion' : 'restaurants'}
              </Link>
              {isEs ? ' y ' : ', and '}
              <Link href="/ia-comercios-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'comercio' : 'retail'}
              </Link>
              {isEs
                ? ' ya estan capturando este valor con implantaciones enfocadas en operaciones reales.'
                : ' are already capturing this value with implementations focused on real operations.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? '4) Indicadores clave para decidir en 2026' : '4) Key indicators to decide in 2026'}
            </h2>
            <p>
              {isEs
                ? 'Antes de escalar, conviene medir impacto real en cuatro frentes: ingresos, coste operativo, tiempo de ciclo y calidad de servicio. Sin este cuadro de mando, es facil invertir sin retorno claro.'
                : 'Before scaling, it is worth measuring real impact on four fronts: revenue, operating cost, cycle time, and service quality. Without this dashboard, it is easy to invest without clear return.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Tiempo medio de respuesta y resolucion.' : 'Average response and resolution time.'}</li>
              <li>{isEs ? 'Porcentaje de consultas automatizadas sin escalado.' : 'Percentage of automated queries without escalation.'}</li>
              <li>{isEs ? 'Conversion de lead a oportunidad comercial.' : 'Lead-to-opportunity conversion rate.'}</li>
              <li>{isEs ? 'Ahorro operativo mensual por area.' : 'Monthly operational savings per area.'}</li>
            </ul>
            <p className="mt-4">
              {isEs ? 'Si quieres pasar a la parte practica, revisa la ' : 'If you want to move to the practical side, review the '}
              <Link href="/blog/ia-2026-empresas-navarra-espana-europa-hoja-ruta" className="text-primary hover:underline font-medium">
                {isEs ? 'hoja de ruta IA 2026 para empresas' : 'AI 2026 business roadmap'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Lecturas relacionadas' : 'Related reading'}
            </h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <Link href="/blog/como-implementar-inteligencia-artificial-empresa-navarra" className="text-primary hover:underline font-medium">
                  {isEs
                    ? 'Como implementar inteligencia artificial en una empresa en Navarra'
                    : 'How to implement artificial intelligence in a business in Navarra'}
                </Link>
              </li>
              <li>
                <Link href="/blog/beneficios-inteligencia-artificial-empresas-navarra" className="text-primary hover:underline font-medium">
                  {isEs
                    ? 'Beneficios de la inteligencia artificial para empresas en Navarra'
                    : 'Benefits of artificial intelligence for businesses in Navarra'}
                </Link>
              </li>
              <li>
                <Link href="/blog/chatbot-vs-agente-ia" className="text-primary hover:underline font-medium">
                  {isEs
                    ? 'Chatbot vs agente de IA: diferencias y cual elegir'
                    : 'Chatbot vs AI agent: differences and how to choose'}
                </Link>
              </li>
              <li>
                <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">
                  {isEs
                    ? 'Agentes RAG con base de conocimiento para empresas'
                    : 'RAG knowledge base agents for businesses'}
                </Link>
              </li>
            </ul>
          </section>

          <section className="not-prose mt-16 p-4 sm:p-8 rounded-2xl border border-border bg-card text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isEs
                ? 'Quieres evaluar como aterrizar esta estrategia en tu empresa?'
                : 'Want to evaluate how to apply this strategy in your business?'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Solicita un diagnostico estrategico y te ayudamos a priorizar casos de uso, riesgos y plan de implantacion.'
                : 'Request a strategic diagnosis and we will help you prioritize use cases, risks, and an implementation plan.'}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto px-8">
              <Link href="/diagnostico-ia-navarra">
                {isEs ? 'Solicitar diagnostico estrategico' : 'Request strategic diagnosis'}
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </article>
  );
};

export default IA2026EuropaContextoRegulatorio;
