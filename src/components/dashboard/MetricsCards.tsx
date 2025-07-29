import { PiggyBank, Target, Percent, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Economia Total</p>
            <p className="text-3xl font-bold text-agro-green mt-1">R$ 2.1M</p>
            <p className="text-sm text-agro-green mt-1">
              <span className="inline-block mr-1">↑</span>
              vs mês anterior
            </p>
          </div>
          <div className="bg-agro-green-light p-3 rounded-full">
            <PiggyBank className="w-6 h-6 text-agro-green" />
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Alvos do Cenário</p>
            <p className="text-3xl font-bold text-agro-blue mt-1">2</p>
            <p className="text-sm text-muted-foreground mt-1">problemas identificados</p>
          </div>
          <div className="bg-agro-blue-light p-3 rounded-full">
            <Target className="w-6 h-6 text-agro-blue" />
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">% Economia Atual</p>
            <p className="text-3xl font-bold text-agro-yellow mt-1">26,5%</p>
            <p className="text-sm text-muted-foreground mt-1">vs melhor oferta</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-full">
            <Percent className="w-6 h-6 text-agro-yellow" />
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <p className="text-sm font-medium text-muted-foreground mb-2">Economia Anual</p>
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-agro-green">R$ 340.200</span>
                <span className="text-xs text-muted-foreground">BRL</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-agro-blue">US$ 58.800</span>
                <span className="text-xs text-muted-foreground">USD</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">6 aplicações/ano</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full ml-4 flex-shrink-0">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </Card>
    </div>
  );
};