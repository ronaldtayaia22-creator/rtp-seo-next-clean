import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAEmpresasPamplona from '@/components/pages/IAEmpresasPamplona';

export const metadata: Metadata = buildPageMetadata('/ia-empresas-pamplona', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <IAEmpresasPamplona language="es" />
    </PageShell>
  );
};

export default Page;


