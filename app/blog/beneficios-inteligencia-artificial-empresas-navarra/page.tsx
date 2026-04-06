import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import BeneficiosIAEmpresasNavarra from '@/components/pages/blog/BeneficiosIAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/beneficios-inteligencia-artificial-empresas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <BeneficiosIAEmpresasNavarra language="es" />
    </PageShell>
  );
};

export default Page;


