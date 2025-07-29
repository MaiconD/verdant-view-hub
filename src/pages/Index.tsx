import { Header } from '@/components/dashboard/Header';
import { Breadcrumb } from '@/components/dashboard/Breadcrumb';
import { ScenarioHeader } from '@/components/dashboard/ScenarioHeader';
import { MetricsCards } from '@/components/dashboard/MetricsCards';
import { TargetSection } from '@/components/dashboard/TargetSection';
import { SupplierSummary } from '@/components/dashboard/SupplierSummary';
import { FinalActions } from '@/components/dashboard/FinalActions';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-green">
      <Header />
      <Breadcrumb />
      <ScenarioHeader />
      
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <MetricsCards />
        <TargetSection />
        <SupplierSummary />
        <div className="mt-16">
          <FinalActions />
        </div>
      </div>
    </div>
  );
};

export default Index;
