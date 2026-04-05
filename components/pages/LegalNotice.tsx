'use client';

import { Language, getTranslation } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LegalNoticeProps {
  language: Language;
}

const LegalNotice = ({ language }: LegalNoticeProps) => {
  const t = getTranslation(language).legalNotice;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ChevronLeft className="w-4 h-4 mr-2" />
            {t.backButton}
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-glow-primary">{t.title}</h1>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section1.title}</h2>
            <div className="space-y-2">
              <p><strong>{t.section1.businessName}:</strong> RTP Digital Solutions</p>
              <p><strong>{t.section1.address}:</strong> Calle Alexander Fleming 7, 31012 Pamplona, España</p>
              <p><strong>{t.section1.email}:</strong> info@rtpdigitalsolutions.es</p>
              <p><strong>{t.section1.taxId}:</strong> 51741812T</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section2.title}</h2>
            <p className="mb-4">{t.section2.description}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section2.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <p className="mt-4">{t.section2.additional}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section3.title}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section3.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section4.title}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section4.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section5.title}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section5.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section6.title}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section6.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section7.title}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section7.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{t.section8.title}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.section8.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;




