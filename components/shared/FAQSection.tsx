import { Language, getTranslation } from '@/lib/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQSectionProps {
  language: Language;
}

const FAQSection = ({ language }: FAQSectionProps) => {
  const t = getTranslation(language).faq;

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-glow-primary">
              {t.title}
            </h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {t.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="holographic-border rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
