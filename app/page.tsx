import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Index from '@/components/pages/Index';

export const metadata: Metadata = buildPageMetadata('/', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <Index language="es" />
    </PageShell>
  );
};

export default Page;

