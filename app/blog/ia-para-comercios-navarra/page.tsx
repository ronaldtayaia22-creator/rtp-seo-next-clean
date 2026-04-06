import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAComerciosNavarra from '@/components/pages/blog/IAComerciosNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/ia-para-comercios-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <IAComerciosNavarra language="es" />
    </PageShell>
  );
};

export default Page;


