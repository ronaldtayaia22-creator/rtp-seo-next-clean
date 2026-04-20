import { Sparkles, Zap, Building2, UserCheck, ShoppingCart } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';
import { Badge } from '@/components/ui/badge';

interface AIAssistantShowcaseProps {
  language: Language;
}

const AIAssistantShowcase = ({ language }: AIAssistantShowcaseProps) => {
  const translations = getTranslation(language);
  const t = translations.aiShowcase;

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section - Credibility */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-glow-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-glow-primary">
            {t.title}
          </h2>
          
          {t.description1 && (
            <div className="space-y-3 max-w-3xl mx-auto text-left">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t.description1}
              </p>
            </div>
          )}

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto pt-2">
            {t.features.map((label, i) => {
              const Icon = [Building2, UserCheck, ShoppingCart][i] || Building2;
              const desc = t.featureDescs?.[i] || '';
              return (
                <div
                  key={i}
                  className="group relative flex flex-col items-center gap-2 p-4 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 animate-fade-in cursor-default"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300">
                    <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-center leading-tight text-foreground">
                    {label}
                  </span>
                  {desc && (
                    <span className="text-xs md:text-sm text-muted-foreground text-center leading-snug">
                      {desc}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            {t.highlight}
          </Badge>
        </div>

      </div>
    </section>
  );
};

export default AIAssistantShowcase;
