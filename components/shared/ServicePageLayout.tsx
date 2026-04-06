import { ArrowRight, CheckCircle2, Lightbulb, Target, Users, TrendingUp, Clock, Shield, Zap } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface Problem {
  text: string;
}

interface Step {
  title: string;
  description: string;
}

interface Example {
  industry: string;
  description: string;
}

interface Benefit {
  icon: React.ReactNode;
  text: string;
}

interface ServicePageLayoutProps {
  language: Language;
  title: string;
  introduction: React.ReactNode;
  problems: Problem[];
  howItWorks: Step[];
  examples: Example[];
  benefits: Benefit[];
  ctaText: string;
  ctaButton: string;
  aiReference: string;
  beforeHowItWorks?: React.ReactNode;
  beforeCta?: React.ReactNode;
}

const ServicePageLayout = ({
  language,
  title,
  introduction,
  problems,
  howItWorks,
  examples,
  benefits,
  ctaText,
  ctaButton,
  aiReference,
  beforeHowItWorks,
  beforeCta,
}: ServicePageLayoutProps) => {
  const t = getTranslation(language);

  const problemsTitle = language === 'es' ? 'Problemas habituales que resolvemos' : 'Common problems we solve';
  const howTitle = language === 'es' ? 'Cómo funciona la solución' : 'How the solution works';
  const examplesTitle = language === 'es' ? 'Ejemplos de uso reales' : 'Real use cases';
  const benefitsTitle = language === 'es' ? 'Beneficios para tu empresa' : 'Benefits for your business';
  const casesLink = language === 'es' ? 'Ver casos de éxito' : 'View success stories';

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* H1 - Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-glow-primary mb-8 animate-fade-in-up text-center">
            {title}
          </h1>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {introduction}
            </p>
          </div>

          {/* AI Reference Banner */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                {aiReference}
              </p>
            </div>
          </div>

          {/* Problems Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {problemsTitle}
            </h2>
            <div className="holographic-border rounded-xl p-8">
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{problem.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {beforeHowItWorks}

          {/* How It Works Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {howTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="holographic-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-14">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Examples Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {examplesTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {examples.map((example, index) => (
                <div key={index} className="bg-card/50 border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-primary mb-2">{example.industry}</h3>
                  <p className="text-muted-foreground text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {benefitsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-card/50 border border-border rounded-lg p-4">
                  <div className="text-primary">{benefit.icon}</div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </section>

          {beforeCta}

          {/* CTA Section */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="holographic-border rounded-2xl p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {ctaText}
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                <a
                  href={language === 'es' ? '/automatizacion-ia-navarra' : '/en/automatizacion-ia-navarra'}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all whitespace-nowrap"
                >
                  {ctaButton}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={language === 'es' ? '/casos-ia-navarra' : '/en/casos-ia-navarra'}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-primary/50 text-primary rounded-lg font-bold text-sm hover:bg-primary/10 transition-all whitespace-nowrap"
                >
                  {casesLink}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;
