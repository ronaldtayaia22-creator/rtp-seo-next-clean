import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAComerciosNavarra from '@/components/pages/IAComerciosNavarra';

export const metadata: Metadata = buildPageMetadata('/en/ai-retail-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IAComerciosNavarra language="en" />
    </PageShell>
  );
};

export default Page;


