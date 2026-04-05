import { ExternalLink, Newspaper } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface MediaPresenceProps {
  language: Language;
}

const MediaPresence = ({ language }: MediaPresenceProps) => {
  const isEs = language === 'es';

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {isEs ? 'Presencia en medios y ecosistema empresarial' : 'Media presence and business ecosystem'}
          </h2>
        </div>

        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          <p>
            {isEs
              ? 'RTP Digital Solutions forma parte del ecosistema de innovación y emprendimiento en Navarra, participando en iniciativas y plataformas que impulsan la transformación digital de empresas.'
              : 'RTP Digital Solutions is part of the innovation and entrepreneurship ecosystem in Navarra, participating in initiatives and platforms that drive the digital transformation of businesses.'}
          </p>
          <p>
            {isEs
              ? 'La empresa ha sido incluida en espacios dedicados a historias reales de emprendimiento en Navarra, donde se destacan proyectos enfocados en inteligencia artificial y automatización de procesos.'
              : 'The company has been featured in spaces dedicated to real entrepreneurship stories in Navarra, highlighting projects focused on artificial intelligence and process automation.'}
          </p>
        </div>

        {/* Reference Card */}
        <div className="max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Newspaper className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {isEs ? 'Historia real – RTP Digital Solutions' : 'Real story – RTP Digital Solutions'}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isEs ? 'Fuente: Navarra Emprende' : 'Source: Navarra Emprende'}
              </p>
            </div>
          </div>
          <a
            href="https://www.navarraemprende.com/inspirate/historias/rtp-digital-solutions-automatizacion-e-ia-para-empresas-y-pequenos-negocios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            {isEs ? 'Ver artículo completo' : 'View full article'}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaPresence;
