import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesVoz from '@/components/pages/services/AgentesVoz';

export const metadata: Metadata = buildPageMetadata('/agentes-voz-telefonicos-empresas', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <AgentesVoz language="es" />
    </PageShell>
  );
};

export default Page;


