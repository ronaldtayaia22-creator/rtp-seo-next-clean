'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ArticleProps {
  language: Language;
}

const IA2026EuropaHojaRutaEmpresa = ({ language }: ArticleProps) => {
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

        <time className="text-sm text-muted-foreground block mb-4">2026-04-03</time>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight">
          {isEs
            ? 'Hoja de ruta IA 2026 para empresas en Navarra: de piloto a resultado'
            : 'AI 2026 roadmap for businesses in Navarra: from pilot to results'}
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed text-base md:text-lg">
          <section>
            <p>
              {isEs
                ? 'Muchas empresas ya han probado herramientas de IA, pero pocas han convertido esas pruebas en una mejora estable del negocio. La clave en 2026 es pasar de piloto suelto a sistema operativo.'
                : 'Many companies have already tested AI tools, but only a few have turned those experiments into stable business improvement. The key in 2026 is moving from isolated pilots to an operating system approach.'}
            </p>
            <p className="mt-4">
              {isEs ? 'Si todavía no has visto el marco general, empieza por el artículo de ' : 'If you have not reviewed the broader context yet, start with the article on '}
              <Link href="/blog/ia-2026-empresas-navarra-espana-europa-contexto" className="text-primary hover:underline font-medium">
                {isEs ? 'contexto IA 2026 en España y Europa' : 'AI 2026 context in Spain and Europe'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Fase 1: priorizar donde la IA genera margen' : 'Phase 1: prioritize where AI creates margin'}
            </h2>
            <p>
              {isEs
                ? 'Empieza por procesos con volumen y repetición: atención al cliente, cualificación de leads, tareas administrativas o soporte interno. Si no hay frecuencia ni coste relevante, no será prioridad.'
                : 'Start with high-volume, repetitive processes: customer service, lead qualification, administrative tasks, or internal support. If there is no frequency and no meaningful cost, it should not be first priority.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>{isEs ? 'Define una línea base de tiempo, coste y calidad.' : 'Define a baseline for time, cost, and quality.'}</li>
                <li>{isEs ? 'Selecciona un caso de uso con impacto en menos de 90 días.' : 'Select one use case with impact in less than 90 days.'}</li>
                <li>{isEs ? 'Alinea al equipo responsable desde el inicio.' : 'Align the responsible team from day one.'}</li>
              </ul>
              <p className="mt-4">
                {isEs ? 'Para la mayoría de pymes, el primer bloque suele ser ' : 'For most SMBs, the first block is usually '}
                <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">
                  {isEs ? 'atención al cliente con agentes IA' : 'customer service with AI agents'}
                </Link>
                {isEs ? ' o ' : ' or '}
                <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">
                  {isEs ? 'automatización de procesos internos' : 'automation of internal processes'}
                </Link>
                {isEs ? '.' : '.'}
              </p>
              <p className="mt-4">
                {isEs ? 'Si estás comparando enfoques, te puede ayudar esta guía de ' : 'If you are comparing approaches, this guide on '}
                <Link href="/blog/chatbot-vs-agente-ia" className="text-primary hover:underline font-medium">
                  {isEs ? 'chatbot vs agente de IA' : 'chatbot vs AI agent'}
                </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Fase 2: diseñar integración y gobierno' : 'Phase 2: design integration and governance'}
            </h2>
            <p>
              {isEs
                ? 'Un agente de IA aislado aporta poco. El valor llega cuando se conecta a canales reales (web, WhatsApp, email), sistemas internos (CRM, ERP) y una base de conocimiento actualizada.'
                : 'An isolated AI agent adds little value. Real impact arrives when it connects to real channels (web, WhatsApp, email), internal systems (CRM, ERP), and an updated knowledge base.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'En paralelo, establece reglas de calidad, privacidad y supervisión para cumplir con RGPD y criterios del marco europeo de IA.'
                : 'In parallel, define quality, privacy, and supervision rules to comply with GDPR and broader European AI requirements.'}
            </p>
            <p className="mt-4">
              {isEs ? 'Cuando necesitas respuestas precisas con información propia de empresa, el siguiente paso es una ' : 'When you need accurate answers based on company-specific information, the next step is a '}
              <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">
                {isEs ? 'base de conocimiento RAG' : 'RAG knowledge base'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Fase 3: desplegar con objetivos concretos' : 'Phase 3: deploy with concrete goals'}
            </h2>
            <p>
              {isEs
                ? 'El despliegue debe estar ligado a métricas claras, no a percepciones: tasa de respuesta, tiempo medio de gestión, ratio de conversión y volumen de tareas automatizadas.'
                : 'Deployment should be linked to clear metrics, not perceptions: response rate, average handling time, conversion ratio, and automated task volume.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'Con seguimiento semanal, puedes ajustar prompts, flujos e integraciones para mejorar rendimiento sin rehacer toda la solución.'
                : 'With weekly monitoring, you can tune prompts, flows, and integrations to improve performance without rebuilding the whole solution.'}
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground">{isEs ? 'Semana' : 'Week'}</th>
                    <th className="text-left p-3 font-semibold text-foreground">{isEs ? 'Objetivo' : 'Goal'}</th>
                    <th className="text-left p-3 font-semibold text-foreground">{isEs ? 'Indicador' : 'Indicator'}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="p-3">1-2</td>
                    <td className="p-3">{isEs ? 'Activar primer flujo en producción' : 'Activate first production flow'}</td>
                    <td className="p-3">{isEs ? 'Tiempo de respuesta inicial' : 'Initial response time'}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">3-6</td>
                    <td className="p-3">{isEs ? 'Reducir carga operativa del equipo' : 'Reduce team operational load'}</td>
                    <td className="p-3">{isEs ? 'Consultas automatizadas sin escalado' : 'Automated queries without escalation'}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">7-12</td>
                    <td className="p-3">{isEs ? 'Optimizar conversión y calidad de servicio' : 'Optimize conversion and service quality'}</td>
                    <td className="p-3">{isEs ? 'Conversión y satisfacción del cliente' : 'Conversion and customer satisfaction'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Errores frecuentes que frenan la adopción' : 'Common mistakes that slow adoption'}
            </h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Lanzar sin casos de uso priorizados.' : 'Launching without prioritized use cases.'}</li>
              <li>{isEs ? 'No integrar con procesos reales del equipo.' : 'Not integrating with real team processes.'}</li>
              <li>{isEs ? 'No medir impacto desde el primer mes.' : 'Not measuring impact from month one.'}</li>
              <li>{isEs ? 'Tratar cumplimiento y seguridad como algo secundario.' : 'Treating compliance and security as secondary.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Conclusión: 2026 es año de ejecución, no de hype' : 'Conclusion: 2026 is an execution year, not a hype year'}
            </h2>
            <p>
              {isEs
                ? 'Para empresas en España, el diferencial no será quien "hable más de IA", sino quien la integre mejor: con foco en margen, operaciones y experiencia de cliente.'
                : 'For businesses in Spain, the differentiator will not be who talks most about AI, but who integrates it better: focused on margin, operations, and customer experience.'}
            </p>
            <p className="mt-4">
              {isEs ? 'En Navarra y Pamplona, las empresas que ejecuten esta hoja de ruta con disciplina tendrán ventaja clara en velocidad comercial y eficiencia operativa.' : 'In Navarra and Pamplona, companies that execute this roadmap with discipline will gain a clear advantage in commercial speed and operational efficiency.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Siguiente paso recomendado' : 'Recommended next step'}
            </h2>
            <p>
              {isEs ? 'Si quieres convertir esta hoja de ruta en un plan accionable para tu empresa, puedes empezar con un ' : 'If you want to turn this roadmap into an actionable plan for your business, start with a '}
              <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'diagnóstico estratégico de IA' : 'strategic AI diagnosis'}
              </Link>
              {isEs ? ' y revisar después casos reales en nuestro ' : ' and then review real cases in our '} 
              <Link href="/blog" className="text-primary hover:underline font-medium">
                {isEs ? 'blog de IA para empresas' : 'AI business blog'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <Link href="/blog/como-implementar-inteligencia-artificial-empresa-navarra" className="text-primary hover:underline font-medium">
                  {isEs
                    ? 'Cómo implementar inteligencia artificial en una empresa en Navarra'
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
                <Link href="/blog/que-es-un-agente-ia" className="text-primary hover:underline font-medium">
                  {isEs
                    ? 'Qué es un agente de IA y cómo puede ayudar a una empresa'
                    : 'What is an AI agent and how it can help a business'}
                </Link>
              </li>
            </ul>
          </section>

          <section className="not-prose mt-16 p-4 sm:p-8 rounded-2xl border border-border bg-card text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isEs
                ? '¿Necesitas una hoja de ruta realista para tu empresa?'
                : 'Need a realistic roadmap for your business?'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Solicita un diagnóstico estratégico y define un plan de implantación por fases, con prioridades y KPIs claros.'
                : 'Request a strategic diagnosis and define a phased implementation plan with clear priorities and KPIs.'}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto px-8">
              <Link href="/diagnostico-ia-navarra">
                {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </article>
  );
};

export default IA2026EuropaHojaRutaEmpresa;
