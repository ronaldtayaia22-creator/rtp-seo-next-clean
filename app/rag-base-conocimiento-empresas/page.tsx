import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import RAGConocimiento from '@/components/pages/services/RAGConocimiento';

export const metadata: Metadata = buildPageMetadata('/rag-base-conocimiento-empresas', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <RAGConocimiento language="es" />
    </PageShell>
  );
};

export default Page;


