import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAComerciosNavarra from '@/components/pages/blog/IAComerciosNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/ai-for-retail-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IAComerciosNavarra language="en" />
    </PageShell>
  );
};

export default Page;


