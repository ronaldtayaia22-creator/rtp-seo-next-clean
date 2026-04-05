import { MessageCircle } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface WhatsAppButtonProps {
  language: Language;
}

const WhatsAppButton = ({ language }: WhatsAppButtonProps) => {
  const translations = getTranslation(language);
  const t = translations.whatsappButton;

  // WhatsApp link that works on mobile and desktop
  const phoneNumber = '34688779664';
  const message = encodeURIComponent(t.defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[9999] hidden md:flex w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl items-center justify-center transition-all hover:scale-110 active:scale-95 animate-[pulse_2s_ease-in-out_infinite]"
          aria-label={t.tooltip}
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-card border-border">
        <p className="text-sm font-medium">{t.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppButton;
