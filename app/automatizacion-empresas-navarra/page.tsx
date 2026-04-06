import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import { redirect } from 'next/navigation';

export const metadata: Metadata = buildPageMetadata('/automatizacion-empresas-navarra', 'es');


const Page = () => {
  redirect('/automatizacion-procesos-empresas-navarra');
};

export default Page;

