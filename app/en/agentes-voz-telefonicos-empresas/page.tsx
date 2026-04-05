import PageShell from '@/components/PageShell';
import services/AgentesVoz from '@/components/pages/services\AgentesVoz';

const Page = () => {
  return (
    <PageShell language="en">
      <services/AgentesVoz />
    </PageShell>
  );
};

export default Page;
