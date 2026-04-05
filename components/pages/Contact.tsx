import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 space-y-3 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold text-glow-primary">
              Diagnóstico Estratégico de Automatización con IA
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Solicita un diagnóstico estratégico de automatización empresarial con inteligencia artificial. Propuesta orientativa para tu negocio en Navarra. Respuesta en 24h.
            </p>
          </div>

          <div className="holographic-border rounded-xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ContactForm />
          </div>

          <div className="mt-8 text-center space-y-1.5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs font-medium text-muted-foreground/60">RTP Digital Solutions</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground/50">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Calle Alexander Fleming 7, 31012 Pamplona
              </span>
              <span className="hidden md:inline">·</span>
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3 h-3" />
                info@rtpdigitalsolutions.es
              </span>
              <span className="hidden md:inline">·</span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3" />
                +34 688 779 664
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground/40 inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Lunes a Viernes: 9:00 – 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
