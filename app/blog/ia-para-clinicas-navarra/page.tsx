import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAClinicasNavarra from '@/components/pages/blog/IAClinicasNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/ia-para-clinicas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <IAClinicasNavarra language="es" />
    </PageShell>
  );
};

export default Page;


