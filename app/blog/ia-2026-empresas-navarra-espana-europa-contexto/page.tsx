import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IA2026EuropaContextoRegulatorio from '@/components/pages/blog/IA2026EuropaContextoRegulatorio';

export const metadata: Metadata = buildPageMetadata('/blog/ia-2026-empresas-navarra-espana-europa-contexto', 'es');

const Page = () => {
  return (
    <PageShell language="es">
      <IA2026EuropaContextoRegulatorio language="es" />
    </PageShell>
  );
};

export default Page;
