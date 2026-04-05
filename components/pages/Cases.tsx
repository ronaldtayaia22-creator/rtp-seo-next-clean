'use client';

import CaseStorytelling from '@/components/shared/CaseStorytelling';
import { Language } from '@/lib/i18n';

interface CasesProps {
  language: Language;
}

const Cases = ({ language }: CasesProps) => {
  return (
    <div className="min-h-screen pt-20">
      <CaseStorytelling language={language} />
    </div>
  );
};

export default Cases;
