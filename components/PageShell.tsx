'use client';

import { Language } from '@/lib/i18n';
import SiteShell from '@/components/SiteShell';

interface PageShellProps {
  language: Language;
  children: React.ReactNode;
}

const PageShell = ({ language, children }: PageShellProps) => {
  return <SiteShell language={language}>{children}</SiteShell>;
};

export default PageShell;
