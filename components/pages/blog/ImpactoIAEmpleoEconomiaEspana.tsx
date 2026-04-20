'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ArticleProps {
  language: Language;
}

const ImpactoIAEmpleoEconomiaEspana = ({ language }: ArticleProps) => {
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

        <time className="text-sm text-muted-foreground block mb-4">2026-04-10</time>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight">
          {isEs
            ? 'El impacto de la inteligencia artificial en el empleo, la economía y el futuro del trabajo en España'
            : 'The impact of artificial intelligence on employment, the economy, and the future of work in Spain'}
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-foreground/90 leading-relaxed text-base md:text-lg">
          <section>
            <p>
              {isEs
                ? 'La inteligencia artificial ya está transformando empresas, universidades y administraciones en España. La pregunta no es si cambiará el mercado laboral, sino cómo se repartirá ese cambio entre productividad, salarios y oportunidades reales.'
                : 'Artificial intelligence is already transforming businesses, universities, and public institutions in Spain. The question is no longer whether it will change the labor market, but how that change will be distributed across productivity, wages, and real opportunities.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'La buena noticia es que puede aumentar eficiencia y bienestar. La parte incómoda es que, sin estrategia, también puede ampliar desigualdades. Por eso muchas empresas empiezan por una '
                : 'The good news is that AI can increase efficiency and well-being. The uncomfortable part is that, without strategy, it can also widen inequalities. That is why many companies begin with an '}
              <Link href="/consultoria-inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'consultoría de inteligencia artificial' : 'AI consulting process'}
              </Link>
              {isEs ? ' para definir prioridades antes de ejecutar.' : ' to define priorities before execution.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'La IA no es el enemigo: es una palanca de productividad' : 'AI is not the enemy: it is a productivity lever'}
            </h2>
            <p>
              {isEs
                ? 'Cuando una empresa produce más con mejores procesos, puede ganar margen, mejorar servicio y reducir tiempos. La IA acelera justo eso: automatiza tareas repetitivas y libera tiempo para trabajo de más valor.'
                : 'When a company produces more with better processes, it can improve margins, service quality, and response times. AI accelerates exactly that: it automates repetitive tasks and frees time for higher-value work.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Más productividad por empleado.' : 'Higher productivity per employee.'}</li>
              <li>{isEs ? 'Más capacidad para atender clientes con menos fricción.' : 'More capacity to serve customers with less friction.'}</li>
              <li>{isEs ? 'Más foco del equipo en ventas, estrategia e innovación.' : 'More team focus on sales, strategy, and innovation.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'El gran problema no es la tecnología, sino la transición' : 'The main problem is not the technology, but the transition'}
            </h2>
            <p>
              {isEs
                ? 'Toda revolución tecnológica crea ganadores y perdedores en el corto plazo. Con la IA ocurre lo mismo: algunos puestos crecerán y otros se reducirán, sobre todo donde el trabajo sea predecible y estandarizable.'
                : 'Every technological revolution creates short-term winners and losers. AI is no different: some roles will grow and others will shrink, especially where work is predictable and standardized.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'Si quieres un análisis más operativo de puestos en riesgo y decisiones prácticas de adaptación, revisa esta guía: '
                : 'If you want a more operational analysis of at-risk roles and practical adaptation decisions, review this guide: '}
              <Link href="/blog/trabajos-en-riesgo-por-ia-y-como-adaptarte" className="text-primary hover:underline font-medium">
                {isEs ? 'trabajos en riesgo por IA y cómo adaptarte' : 'jobs at risk from AI and how to adapt'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? '¿Habrá despidos masivos por la IA?' : 'Will there be mass layoffs due to AI?'}
            </h2>
            <p>
              {isEs
                ? 'En algunos sectores ya hay recortes ligados a automatización. No será igual en todas las industrias, pero sí veremos ajustes relevantes donde la IA reemplace tareas rutinarias de oficina y soporte.'
                : 'In some sectors, cuts linked to automation are already happening. It will not be equal across industries, but we will see relevant adjustments where AI replaces routine office and support tasks.'}
            </p>
            <p className="mt-4">
              {isEs
                ? 'La diferencia entre reducir empleo o crecer mejor suele estar en cómo se implanta: una estrategia basada en '
                : 'The difference between reducing jobs and growing better is usually in implementation: a strategy based on '}
              <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'automatización de procesos empresariales' : 'business process automation'}
              </Link>
              {isEs
                ? ' y en casos de uso medibles evita improvisación y baja el riesgo de decisiones a ciegas.'
                : ' and measurable use cases avoids improvisation and lowers the risk of blind decisions.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Reducir jornada, repartir valor y mantener competitividad' : 'Reduce working hours, distribute value, and keep competitiveness'}
            </h2>
            <p>
              {isEs
                ? 'Si una empresa puede producir lo mismo con menos horas humanas, hay una alternativa al recorte puro: rediseñar procesos, mantener talento y repartir mejor el tiempo de trabajo. Esta vía exige gestión seria, datos y liderazgo.'
                : 'If a company can produce the same output with fewer human hours, there is an alternative to pure cuts: redesign processes, retain talent, and distribute working time better. This path requires serious management, data, and leadership.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Regular sí, frenar el progreso no' : 'Regulate yes, block progress no'}
            </h2>
            <p>
              {isEs
                ? 'La regulación debe proteger derechos, privacidad y competencia, pero sin penalizar la adopción tecnológica. Lo sensato es gravar mejor los beneficios extraordinarios y usar esa recaudación para formación y transición laboral.'
                : 'Regulation should protect rights, privacy, and competition without penalizing technology adoption. A sensible approach is to tax extraordinary profits better and use that revenue for training and workforce transition.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {isEs ? 'Qué significa esto para una empresa en Navarra' : 'What this means for a business in Navarra'}
            </h2>
            <p>
              {isEs
                ? 'No se trata de instalar una herramienta suelta y esperar milagros. Se trata de decidir qué proceso mejorar primero, qué KPI seguir y cómo integrar IA con tus canales reales.'
                : 'This is not about installing one isolated tool and waiting for miracles. It is about deciding which process to improve first, which KPI to track, and how to integrate AI with your real channels.'}
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{isEs ? 'Atención al cliente con agentes IA y escalado a humano.' : 'Customer service with AI agents and human escalation.'}</li>
              <li>{isEs ? 'Backoffice automatizado para reducir tiempos de ciclo.' : 'Automated back-office to reduce cycle time.'}</li>
              <li>{isEs ? 'Base de conocimiento conectada para respuestas fiables.' : 'Connected knowledge base for reliable answers.'}</li>
            </ul>
            <p className="mt-4">
              {isEs ? 'Puedes ver un ejemplo de este enfoque en ' : 'You can see this approach in '}
              <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">
                {isEs ? 'agentes IA para atención al cliente' : 'AI customer service agents'}
              </Link>
              {isEs ? ' y en soluciones de ' : ' and in '}
              <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">
                {isEs ? 'RAG para empresas' : 'RAG for businesses'}
              </Link>
              {isEs ? '.' : '.'}
            </p>
          </section>

          <section className="not-prose mt-16 p-4 sm:p-8 rounded-2xl border border-border bg-card text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isEs
                ? '¿Quieres convertir esta oportunidad en resultados medibles?'
                : 'Want to turn this opportunity into measurable results?'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {isEs
                ? 'Solicita un diagnóstico estratégico y te ayudamos a priorizar casos de uso, riesgos y plan de implantación para tu empresa en Navarra.'
                : 'Request a strategic diagnosis and we will help you prioritize use cases, risks, and an implementation roadmap for your business in Navarra.'}
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

export default ImpactoIAEmpleoEconomiaEspana;
