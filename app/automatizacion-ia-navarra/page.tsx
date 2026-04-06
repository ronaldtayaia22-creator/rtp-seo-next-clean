import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Contact from '@/components/pages/Contact';

export const metadata: Metadata = buildPageMetadata('/automatizacion-ia-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <Contact language="es" />
    </PageShell>
  );
};

export default Page;

