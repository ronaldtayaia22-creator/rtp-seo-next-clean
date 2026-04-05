import { Language, getTranslation } from '@/lib/i18n';

interface ClientLogosProps {
  language: Language;
}

const clients = [
  { name: 'VitalSalud', sector: 'Salud' },
  { name: 'Las Canastas', sector: 'Restauración' },
  { name: 'WAALS Barefoot', sector: 'Ecommerce' },
];

const ClientLogos = ({ language }: ClientLogosProps) => {
  const t = getTranslation(language).clientLogos;

  return (
    <section className="py-12 border-y border-border/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          {t.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-20 h-20 rounded-xl bg-muted/50 border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                <span className="text-lg font-bold text-foreground/70 group-hover:text-primary transition-colors">
                  {client.name.charAt(0)}
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
