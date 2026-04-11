import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Cases from '@/components/pages/Cases';

export const metadata: Metadata = buildPageMetadata('/en/ai-cases-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <Cases language="en" />
    </PageShell>
  );
};

export default Page;

