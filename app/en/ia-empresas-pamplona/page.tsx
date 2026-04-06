import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAEmpresasPamplona from '@/components/pages/IAEmpresasPamplona';

export const metadata: Metadata = buildPageMetadata('/en/ia-empresas-pamplona', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IAEmpresasPamplona language="en" />
    </PageShell>
  );
};

export default Page;


