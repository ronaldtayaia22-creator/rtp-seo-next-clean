import { Language, getTranslation } from '@/lib/i18n';

interface JsonLdProps {
  language: Language;
}

const LOGO_URL = 'https://storage.googleapis.com/gpt-engineer-file-uploads/3cDSF1Ps0GNqQ53ozFFVnwGfKGm2/social-images/social-1761675618025-LOGO RTP DIGITAL SOLUTIONS 350×180 px, sin exceder 2.5 MB.png';

const JsonLd = ({ language }: JsonLdProps) => {
  const t = getTranslation(language).faq;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RTP Digital Solutions",
    "url": "https://rtpdigitalsolutions.es",
    "logo": LOGO_URL,
    "image": LOGO_URL,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34688779664",
      "contactType": "customer service",
      "email": "info@rtpdigitalsolutions.es",
      "availableLanguage": ["Spanish", "English"],
    },
    "sameAs": [
      "https://www.linkedin.com/company/rtp-digital-solutions"
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RTP Digital Solutions",
    "url": "https://rtpdigitalsolutions.es",
    "inLanguage": language === 'es' ? 'es' : 'en',
    "description": language === 'es'
      ? 'Arquitecturas de inteligencia artificial para empresas en Navarra. Agentes IA, automatización de procesos y consultoría tecnológica.'
      : 'Artificial intelligence architectures for businesses in Navarra. AI agents, process automation and technology consulting.',
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RTP Digital Solutions",
    "description": language === 'es'
      ? "Automatizamos procesos de negocio para empresas de Navarra y España con inteligencia artificial. Consultoría IA, agentes de atención al cliente y automatización de procesos."
      : "We automate business processes for companies in Navarra and Spain with artificial intelligence. AI consulting, customer service agents and process automation.",
    "url": "https://rtpdigitalsolutions.es",
    "telephone": "+34688779664",
    "email": "info@rtpdigitalsolutions.es",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Alexander Fleming 7",
      "addressLocality": "Pamplona",
      "addressRegion": "Navarra",
      "postalCode": "31012",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.8125,
      "longitude": -1.6458
    },
    "areaServed": [
      { "@type": "State", "name": "Navarra" },
      { "@type": "Country", "name": "España" }
    ],
    "logo": LOGO_URL,
    "image": LOGO_URL,
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rtp-digital-solutions"
    ],
    "knowsAbout": [
      "Inteligencia Artificial",
      "Automatización de procesos",
      "Agentes IA",
      "Consultoría tecnológica",
      "Chatbots empresariales",
      "Agentes de voz"
    ]
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
};

export default JsonLd;
