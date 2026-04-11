import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import DiagnosticoIA from '@/components/pages/DiagnosticoIA';

export const metadata: Metadata = buildPageMetadata('/en/diagnosis-ai-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <DiagnosticoIA language="en" />
    </PageShell>
  );
};

export default Page;

