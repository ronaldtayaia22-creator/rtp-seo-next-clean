import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ContactSuccess from '@/components/pages/ContactSuccess';

export const metadata: Metadata = buildPageMetadata('/contact-success', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <ContactSuccess language="es" />
    </PageShell>
  );
};

export default Page;


