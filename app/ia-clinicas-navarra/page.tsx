import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAClinicasNavarraPage from '@/components/pages/IAClinicasNavarraPage';

export const metadata: Metadata = buildPageMetadata('/ia-clinicas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <IAClinicasNavarraPage language="es" />
    </PageShell>
  );
};

export default Page;


