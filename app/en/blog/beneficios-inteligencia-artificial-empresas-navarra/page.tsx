import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import BeneficiosIAEmpresasNavarra from '@/components/pages/blog/BeneficiosIAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/beneficios-inteligencia-artificial-empresas-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <BeneficiosIAEmpresasNavarra language="en" />
    </PageShell>
  );
};

export default Page;


