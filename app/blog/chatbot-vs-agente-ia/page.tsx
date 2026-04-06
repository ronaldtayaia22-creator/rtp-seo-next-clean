import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ChatbotVsAgenteIA from '@/components/pages/blog/ChatbotVsAgenteIA';

export const metadata: Metadata = buildPageMetadata('/blog/chatbot-vs-agente-ia', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <ChatbotVsAgenteIA language="es" />
    </PageShell>
  );
};

export default Page;


