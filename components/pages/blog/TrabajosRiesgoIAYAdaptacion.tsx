'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ArticleProps {
  language: Language;
}

const TrabajosRiesgoIAYAdaptacion = ({ language }: ArticleProps) => {
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

        <time className="text-sm text-muted-foreground block mb-4">2026-04-17</time>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight">
          {isEs
            ? 'Trabajos en riesgo por la IA en 2026 y cómo adaptarte sin quedarte atrás'
            : 'Jobs at risk from AI in 2026 and how to adapt without falling behind'}
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed text-base md:text-lg">
          <section>
            <p>
              {isEs
                ? 'La automatización con IA ya está afectando tareas de oficina, soporte y operación diaria. Esto no significa el fin del trabajo, pero sí el fin de muchos trabajos repetitivos tal y como los conocíamos.'
                : 'AI automation is already affecting office, support, and day-to-day operational tasks. This does not mean the end of work, but it does mean the end of many repetitive jobs as we knew them.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'Si no has leído el contexto general de mercado, empieza aquí: '
                : 'If you have not reviewed the broader market context, start here: '}
              <Link href="/blog/impacto-inteligencia-artificial-empleo-economia-espana" className="text-primary hover:underline font-medium">
                {isEs
                  ? 'impacto de la inteligencia artificial en empleo y economía en España'
                  : 'impact of artificial intelligence on employment and the economy in Spain'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Qué perfiles están más expuestos' : 'Which profiles are most exposed'}
            </h2>
            <p>
              {isEs
                ? 'Los puestos más vulnerables comparten un patrón: tareas predecibles, repetitivas y con reglas claras. Aquí suelen aparecer administrativos, soporte básico, traducción operativa y funciones junior de oficina.'
                : 'The most vulnerable roles share one pattern: predictable, repetitive tasks with clear rules. These often include administrative roles, basic support, operational translation, and junior office functions.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Administración y gestión documental rutinaria.' : 'Routine administration and document management.'}</li>
              <li>{isEs ? 'Atención al cliente sin complejidad alta.' : 'Customer support without high complexity.'}</li>
              <li>{isEs ? 'Procesos de backoffice con pasos fijos.' : 'Back-office processes with fixed steps.'}</li>
              <li>{isEs ? 'Perfiles junior sin especialización funcional.' : 'Junior profiles without functional specialization.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Qué perfiles tienen mejor capacidad de adaptación' : 'Which profiles have better adaptation capacity'}
            </h2>
            <p>
              {isEs
                ? 'Las profesiones con mayor resiliencia combinan criterio humano, relación con clientes, supervisión de calidad y capacidad de decisión. No compiten contra la IA; trabajan con ella.'
                : 'The roles with the strongest resilience combine human judgment, customer relationship, quality supervision, and decision-making capacity. They do not compete against AI; they work with it.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Especialistas en ventas consultivas y cierre comercial.' : 'Consultative sales and commercial closing specialists.'}</li>
              <li>{isEs ? 'Responsables de operaciones con visión de proceso.' : 'Operations leaders with process vision.'}</li>
              <li>{isEs ? 'Perfiles que integran herramientas y miden resultados.' : 'Profiles that integrate tools and measure outcomes.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Plan práctico de adaptación 30-60-90 días' : 'Practical 30-60-90 adaptation plan'}
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground">{isEs ? 'Plazo' : 'Timeline'}</th>
                    <th className="text-left p-3 font-semibold text-foreground">{isEs ? 'Acción' : 'Action'}</th>
                    <th className="text-left p-3 font-semibold text-foreground">{isEs ? 'Resultado esperado' : 'Expected result'}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="p-3">0-30</td>
                    <td className="p-3">{isEs ? 'Mapear tareas repetitivas y tiempos por proceso' : 'Map repetitive tasks and process times'}</td>
                    <td className="p-3">{isEs ? 'Lista priorizada de automatización' : 'Prioritized automation list'}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">31-60</td>
                    <td className="p-3">{isEs ? 'Implementar un caso de uso real con KPI semanal' : 'Implement one real use case with weekly KPI'}</td>
                    <td className="p-3">{isEs ? 'Primer ahorro operativo medible' : 'First measurable operational savings'}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">61-90</td>
                    <td className="p-3">{isEs ? 'Escalar al siguiente proceso e integrar con CRM' : 'Scale to next process and integrate with CRM'}</td>
                    <td className="p-3">{isEs ? 'Mejora en conversión y atención' : 'Improved conversion and support'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Errores que te hacen perder tiempo y presupuesto' : 'Mistakes that waste time and budget'}
            </h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Automatizar sin tener procesos definidos.' : 'Automating without defined processes.'}</li>
              <li>{isEs ? 'Empezar por herramientas en lugar de objetivos.' : 'Starting from tools instead of objectives.'}</li>
              <li>{isEs ? 'No formar al equipo ni reasignar funciones.' : 'Not training the team or reallocating roles.'}</li>
              <li>{isEs ? 'No medir impacto en costes, tiempos y ventas.' : 'Not measuring impact on costs, time, and sales.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Cómo convertir el riesgo en ventaja competitiva' : 'How to turn risk into competitive advantage'}
            </h2>
            <p>
              {isEs
                ? 'La clave no es usar IA por moda, sino aplicarla en procesos que hoy frenan tu negocio. Por ejemplo, atención comercial, seguimiento de leads y respuesta operativa.'
                : 'The key is not using AI because it is trendy, but applying it to processes that currently limit your business. For example, commercial support, lead follow-up, and operational response.'}
            </p>
            <p className="mt-4">
              {isEs ? 'Si quieres empezar por impacto rápido, mira ' : 'If you want to start with quick impact, check '}
              <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'agentes IA para atención al cliente' : 'AI customer service agents'}
              </Link>
              {isEs ? ' y ' : ' and '}
              <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'automatización de procesos' : 'process automation'}
              </Link>
              {isEs ? '. Si tu operación depende de información interna, añade una ' : '. If your operation depends on internal information, add a '}
              <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">
                {isEs ? 'base de conocimiento RAG' : 'RAG knowledge base'}
              </Link>
              {isEs ? ' para mejorar precisión y control.' : ' to improve accuracy and control.'}
            </p>
          </section>

          <section className="not-prose mt-16 p-4 sm:p-8 rounded-2xl border border-border bg-card text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isEs
                ? '¿Quieres un plan de adaptación real para tu empresa?'
                : 'Want a real adaptation plan for your business?'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Te ayudamos a identificar puestos críticos, priorizar procesos y desplegar IA con resultados medibles, sin perder control ni tiempo.'
                : 'We help you identify critical roles, prioritize processes, and deploy AI with measurable outcomes, without losing control or time.'}
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

export default TrabajosRiesgoIAYAdaptacion;
