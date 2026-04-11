import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesVoz from '@/components/pages/services/AgentesVoz';

export const metadata: Metadata = buildPageMetadata('/en/voice-agents-business', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <AgentesVoz language="en" />
    </PageShell>
  );
};

export default Page;


