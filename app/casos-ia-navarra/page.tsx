import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Cases from '@/components/pages/Cases';

export const metadata: Metadata = buildPageMetadata('/casos-ia-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <Cases language="es" />
    </PageShell>
  );
};

export default Page;

