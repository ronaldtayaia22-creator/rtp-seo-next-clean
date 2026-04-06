import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import DiagnosticoIA from '@/components/pages/DiagnosticoIA';

export const metadata: Metadata = buildPageMetadata('/diagnostico-ia-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <DiagnosticoIA language="es" />
    </PageShell>
  );
};

export default Page;

