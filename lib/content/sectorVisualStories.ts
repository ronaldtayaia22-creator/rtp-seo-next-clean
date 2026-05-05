import { SectorVisualSlide } from '@/components/shared/SectorVisualStory';

export type SectorKey = 'clinicas' | 'restaurantes' | 'comercios' | 'inmobiliarias';

type LocalizedText = {
  es: string;
  en: string;
};

export type SectorVisualStoryContent = {
  title: LocalizedText;
  sectorLabel: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
  ctaLabel: LocalizedText;
  ctaHref: string;
  slides: SectorVisualSlide[];
};

export const sectorVisualStories: Record<SectorKey, SectorVisualStoryContent> = {
  clinicas: {
    title: {
      es: 'IA para clinicas privadas: menos carga operativa, mas seguimiento',
      en: 'AI for private clinics: less operational load, better follow-up',
    },
    sectorLabel: {
      es: 'Clinicas y salud privada',
      en: 'Clinics and private healthcare',
    },
    problem: {
      es: 'Consultas repetitivas, huecos de agenda y tiempos de respuesta que impactan la experiencia del paciente.',
      en: 'Repetitive questions, appointment gaps, and response times that affect patient experience.',
    },
    solution: {
      es: 'Automatizar confirmaciones, recordatorios y respuestas frecuentes con derivacion al equipo cuando hay contexto clinico.',
      en: 'Automate confirmations, reminders, and common questions while routing clinical context to the team.',
    },
    result: {
      es: 'Mas citas atendidas, menos no-shows y mejor continuidad en la atencion sin saturar recepcion.',
      en: 'More attended appointments, fewer no-shows, and better continuity without overloading reception.',
    },
    ctaLabel: {
      es: 'Solicitar diagnostico',
      en: 'Request a diagnostic',
    },
    ctaHref: '/diagnostico-ia-navarra',
    slides: [
      {
        src: '/media/sectors/clinicas/images/Imagen portada IA para clínicas en Navarra RTP Digital Solutions.webp',
        alt: 'Portada IA para clinicas en Navarra',
      },
      {
        src: '/media/sectors/clinicas/images/Automatización en procesos clínicas en Navarra RTP Digital Solutions.webp',
        alt: 'Automatizacion en procesos para clinicas en Navarra',
      },
      {
        src: '/media/sectors/clinicas/images/Experiencia cliente clínicas en Navarra RTP Digital Solutions.webp',
        alt: 'Experiencia del cliente en clinicas en Navarra',
      },
      {
        src: '/media/sectors/clinicas/images/Sistema integrado clínicas en Navarra RTP Digital Solutions.webp',
        alt: 'Sistema integrado para clinicas en Navarra',
      },
    ],
  },
  restaurantes: {
    title: {
      es: 'IA para restaurantes: reservas y atencion sin cuellos de botella',
      en: 'AI for restaurants: bookings and service without bottlenecks',
    },
    sectorLabel: {
      es: 'Restauracion y hosteleria',
      en: 'Restaurants and hospitality',
    },
    problem: {
      es: 'Picos de mensajes, reservas fuera de horario y perdida de oportunidades por tiempos de respuesta.',
      en: 'Message spikes, off-hours booking requests, and missed opportunities due to slow responses.',
    },
    solution: {
      es: 'Centralizar reservas y preguntas frecuentes con automatizaciones conectadas al flujo operativo del local.',
      en: 'Centralize bookings and common questions with automations connected to day-to-day restaurant operations.',
    },
    result: {
      es: 'Mas conversion de reservas, menos friccion para el equipo y mejor experiencia del cliente.',
      en: 'Higher booking conversion, less team friction, and better customer experience.',
    },
    ctaLabel: {
      es: 'Ver plan para restaurantes',
      en: 'See restaurant plan',
    },
    ctaHref: '/diagnostico-ia-navarra',
    slides: [
      {
        src: '/media/sectors/restaurantes/images/Imagen portada IA para restaurantes en Navarra RTP Digital Solutions.webp',
        alt: 'Portada IA para restaurantes en Navarra',
      },
      {
        src: '/media/sectors/restaurantes/images/Automatización en procesos para restaurantes en Navarra RTP Digital Solutions.webp',
        alt: 'Automatizacion en procesos para restaurantes en Navarra',
      },
      {
        src: '/media/sectors/restaurantes/images/Experiencia del cliente restaurantes en Navarra RTP Digital Solutions.webp',
        alt: 'Experiencia del cliente para restaurantes en Navarra',
      },
      {
        src: '/media/sectors/restaurantes/images/Gestión gastronómica integrada para restaurantes en Navarra RTP Digital Solutions.webp',
        alt: 'Gestion gastronomica integrada para restaurantes en Navarra',
      },
    ],
  },
  comercios: {
    title: {
      es: 'IA para comercios y peluquerias: respuesta rapida y seguimiento de clientes',
      en: 'AI for retail and salons: faster responses and better customer follow-up',
    },
    sectorLabel: {
      es: 'Comercios y peluquerias',
      en: 'Retail and salons',
    },
    problem: {
      es: 'Consultas repetidas por WhatsApp, agenda fragmentada y falta de seguimiento comercial.',
      en: 'Repeated WhatsApp queries, fragmented scheduling, and weak customer follow-up.',
    },
    solution: {
      es: 'Automatizar atencion inicial, citas y recordatorios en un flujo simple para equipos pequenos.',
      en: 'Automate first response, bookings, and reminders in a simple workflow for small teams.',
    },
    result: {
      es: 'Mas citas cerradas, menos tiempo en tareas repetitivas y mayor fidelizacion local.',
      en: 'More confirmed appointments, less repetitive work, and stronger local retention.',
    },
    ctaLabel: {
      es: 'Activar diagnostico comercial',
      en: 'Activate commercial diagnostic',
    },
    ctaHref: '/diagnostico-ia-navarra',
    slides: [
      {
        src: '/media/sectors/peluquerias/images/Imagen portada IA para peluquerías en Navarra RTP Digital Solutions.webp',
        alt: 'Portada IA para peluquerias en Navarra',
      },
      {
        src: '/media/sectors/peluquerias/images/Automatización en procesos para peluquerías en Navarra RTP Digital Solutions.webp',
        alt: 'Automatizacion en procesos para peluquerias en Navarra',
      },
      {
        src: '/media/sectors/peluquerias/images/Experiencia del cliente en peluquerías en Navarra RTP Digital Solutions.webp',
        alt: 'Experiencia del cliente en peluquerias en Navarra',
      },
      {
        src: '/media/sectors/peluquerias/images/Gestión de peluquería integrada en Navarra RTP Digital Solutions.webp',
        alt: 'Gestion integrada para peluquerias en Navarra',
      },
    ],
  },
  inmobiliarias: {
    title: {
      es: 'IA para inmobiliarias: captacion y seguimiento con menos friccion',
      en: 'AI for real estate: lead capture and follow-up with less friction',
    },
    sectorLabel: {
      es: 'Inmobiliarias',
      en: 'Real estate',
    },
    problem: {
      es: 'Leads sin respuesta rapida, seguimiento irregular y procesos manuales entre canales.',
      en: 'Leads without fast response, inconsistent follow-up, and manual work across channels.',
    },
    solution: {
      es: 'Automatizar primer contacto, clasificacion de interesados y recordatorios comerciales para cada propiedad.',
      en: 'Automate first contact, lead qualification, and commercial reminders for each property.',
    },
    result: {
      es: 'Mejor trazabilidad del embudo, mas visitas cualificadas y menos oportunidades perdidas.',
      en: 'Better funnel traceability, more qualified visits, and fewer missed opportunities.',
    },
    ctaLabel: {
      es: 'Solicitar plan inmobiliario',
      en: 'Request real estate plan',
    },
    ctaHref: '/diagnostico-ia-navarra',
    slides: [
      {
        src: '/media/sectors/inmobiliarias/images/Imagen portada IA para inmobiliarias en Navarra RTP Digital Solutions.webp',
        alt: 'Portada IA para inmobiliarias en Navarra',
      },
      {
        src: '/media/sectors/inmobiliarias/images/Automatización en procesos inmobiliarios en Navarra RTP Digital Solutions.webp',
        alt: 'Automatizacion en procesos inmobiliarios en Navarra',
      },
      {
        src: '/media/sectors/inmobiliarias/images/Experiencia del cliente inmobiliarias en Navarra RTP Digital Solutions.webp',
        alt: 'Experiencia del cliente para inmobiliarias en Navarra',
      },
      {
        src: '/media/sectors/inmobiliarias/images/Gestión Inmobiliaria integrada en Navarra RTP Digital Solutions.webp',
        alt: 'Gestion inmobiliaria integrada en Navarra',
      },
    ],
  },
};

export const getSectorVisualStory = (sector: SectorKey, language: 'es' | 'en') => {
  const story = sectorVisualStories[sector];
  return {
    title: story.title[language],
    sectorLabel: story.sectorLabel[language],
    problem: story.problem[language],
    solution: story.solution[language],
    result: story.result[language],
    ctaLabel: story.ctaLabel[language],
    ctaHref: story.ctaHref,
    slides: story.slides,
  };
};
