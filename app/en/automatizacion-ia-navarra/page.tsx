import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Contact from '@/components/pages/Contact';

export const metadata: Metadata = buildPageMetadata('/en/automatizacion-ia-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <Contact language="en" />
    </PageShell>
  );
};

export default Page;

