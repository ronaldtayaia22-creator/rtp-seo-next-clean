import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ComoImplementarIANavarra from '@/components/pages/blog/ComoImplementarIANavarra';

export const metadata: Metadata = buildPageMetadata('/blog/como-implementar-inteligencia-artificial-empresa-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <ComoImplementarIANavarra language="es" />
    </PageShell>
  );
};

export default Page;


