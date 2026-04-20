import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import TrabajosRiesgoIAYAdaptacion from '@/components/pages/blog/TrabajosRiesgoIAYAdaptacion';

export const metadata: Metadata = buildPageMetadata('/blog/trabajos-en-riesgo-por-ia-y-como-adaptarte', 'es');

const Page = () => {
  return (
    <PageShell language="es">
      <TrabajosRiesgoIAYAdaptacion language="es" />
    </PageShell>
  );
};

export default Page;
