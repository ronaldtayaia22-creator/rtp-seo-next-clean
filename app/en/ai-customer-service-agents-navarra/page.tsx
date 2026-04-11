import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesIANavarra from '@/components/pages/services/AgentesIANavarra';

export const metadata: Metadata = buildPageMetadata('/en/ai-customer-service-agents-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <AgentesIANavarra language="en" />
    </PageShell>
  );
};

export default Page;


