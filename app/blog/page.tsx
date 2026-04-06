import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Blog from '@/components/pages/Blog';

export const metadata: Metadata = buildPageMetadata('/blog', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <Blog language="es" />
    </PageShell>
  );
};

export default Page;


