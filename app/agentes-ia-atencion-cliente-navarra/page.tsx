import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesIANavarra from '@/components/pages/services/AgentesIANavarra';

export const metadata: Metadata = buildPageMetadata('/agentes-ia-atencion-cliente-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <AgentesIANavarra language="es" />
    </PageShell>
  );
};

export default Page;


