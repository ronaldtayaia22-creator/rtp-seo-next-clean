import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IA2026EuropaHojaRutaEmpresa from '@/components/pages/blog/IA2026EuropaHojaRutaEmpresa';

export const metadata: Metadata = buildPageMetadata('/blog/ia-2026-empresas-navarra-espana-europa-hoja-ruta', 'es');

const Page = () => {
  return (
    <PageShell language="es">
      <IA2026EuropaHojaRutaEmpresa language="es" />
    </PageShell>
  );
};

export default Page;
