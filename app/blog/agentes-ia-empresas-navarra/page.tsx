import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesIAEmpresasNavarra from '@/components/pages/blog/AgentesIAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/agentes-ia-empresas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <AgentesIAEmpresasNavarra language="es" />
    </PageShell>
  );
};

export default Page;


