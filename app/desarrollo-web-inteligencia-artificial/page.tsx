import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import DesarrolloWebIA from '@/components/pages/services/DesarrolloWebIA';

export const metadata: Metadata = buildPageMetadata('/desarrollo-web-inteligencia-artificial', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <DesarrolloWebIA language="es" />
    </PageShell>
  );
};

export default Page;


