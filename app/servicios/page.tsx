import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Services from '@/components/pages/Services';

export const metadata: Metadata = buildPageMetadata('/servicios', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <Services language="es" />
    </PageShell>
  );
};

export default Page;


