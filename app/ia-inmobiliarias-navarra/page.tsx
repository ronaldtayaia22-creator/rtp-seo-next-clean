import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAInmobiliariasNavarra from '@/components/pages/IAInmobiliariasNavarra';

export const metadata: Metadata = buildPageMetadata('/ia-inmobiliarias-navarra', 'es');

const Page = () => {
  return (
    <PageShell language="es">
      <IAInmobiliariasNavarra language="es" />
    </PageShell>
  );
};

export default Page;
