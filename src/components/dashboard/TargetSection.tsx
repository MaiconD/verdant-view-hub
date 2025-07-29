import { useState } from 'react';
import { Target, Bug, Zap, ChevronDown, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TargetTable } from './TargetTable';

export const TargetSection = () => {
  const [expandedTargets, setExpandedTargets] = useState<Record<string, boolean>>({});

  const toggleTarget = (targetId: string) => {
    setExpandedTargets(prev => ({
      ...prev,
      [targetId]: !prev[targetId]
    }));
  };

  return (
    <Card className="p-8 mb-8 shadow-card">
      <div className="flex items-center mb-8">
        <div className="bg-agro-blue p-3 rounded-full mr-4">
          <Target className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="font-poppins font-bold text-3xl text-foreground">Alvos</h2>
          <p className="text-muted-foreground">Problemas identificados e análise de fornecedores</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {/* Alvo 1 */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-agro-red">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-agro-red w-12 h-12 rounded-full flex items-center justify-center">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-foreground">ALVO 1: Buva + Caruru</h3>
                <p className="text-red-700 text-sm font-medium">✓ Plantas daninhas resistentes - 3 fornecedores</p>
                <p className="text-muted-foreground text-sm">Nível de infestação: Alta (60-80%)</p>
              </div>
            </div>
            <div className="text-right">
              <Button 
                onClick={() => toggleTarget('alvo1')}
                className="bg-agro-red hover:bg-red-700"
              >
                <ChevronDown 
                  className={`w-4 h-4 mr-2 transition-transform ${
                    expandedTargets.alvo1 ? 'rotate-180' : ''
                  }`} 
                />
                {expandedTargets.alvo1 ? 'Contrair' : 'Expandir'}
              </Button>
            </div>
          </div>
        </div>

        {expandedTargets.alvo1 && (
          <TargetTable 
            targetId="alvo1"
            products={[
              {
                supplier: 'Fornecedor G',
                product: 'Roundup Ultra Max',
                description: 'Glifosato 480g/L + Dicamba',
                dosage: 2.8,
                dosageRange: '2,5-3,5 L/ha',
                applications: 1,
                applicationsRange: '1-2x safra',
                price: 'R$ 102,00',
                currency: 'BRL',
                costPerHa: 'R$ 285,60',
                total: 'R$ 428.400',
                economy: '-R$ 113.400',
                status: 'aguardando',
                isExpensive: true
              },
              {
                supplier: 'Fornecedor H',
                product: 'Zapp QI 620',
                description: 'Glifosato 480g/L + 2,4-D',
                dosage: 2.8,
                dosageRange: '2,5-3,5 L/ha',
                applications: 1,
                applicationsRange: '1-2x safra',
                price: 'R$ 88,00',
                currency: 'BRL',
                costPerHa: 'R$ 246,40',
                total: 'R$ 369.600',
                economy: '-R$ 54.600',
                status: 'aguardando',
                isMedium: true
              },
              {
                supplier: 'Fornecedor I',
                product: 'Roundup Original DI',
                description: 'Glifosato 480g/L + Dicamba',
                dosage: 2.8,
                dosageRange: '2,5-3,5 L/ha',
                applications: 1,
                applicationsRange: '1-2x safra',
                price: 'R$ 75,00',
                currency: 'BRL',
                costPerHa: 'R$ 210,00',
                total: 'R$ 315.000',
                economy: '+R$ 113.400',
                status: 'aprovado',
                isBest: true
              }
            ]}
          />
        )}

        {/* Alvo 2 */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-agro-orange">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-agro-orange w-12 h-12 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-foreground">ALVO 2: Percevejo-marrom</h3>
                <p className="text-orange-700 text-sm font-medium">✓ Inseto sugador - 4 fornecedores</p>
                <p className="text-muted-foreground text-sm">Nível de infestação: Média (30-45%)</p>
              </div>
            </div>
            <div className="text-right">
              <Button 
                onClick={() => toggleTarget('alvo2')}
                className="bg-agro-orange hover:bg-orange-700"
              >
                <ChevronDown 
                  className={`w-4 h-4 mr-2 transition-transform ${
                    expandedTargets.alvo2 ? 'rotate-180' : ''
                  }`} 
                />
                {expandedTargets.alvo2 ? 'Contrair' : 'Expandir'}
              </Button>
            </div>
          </div>
        </div>

        {expandedTargets.alvo2 && (
          <TargetTable 
            targetId="alvo2"
            products={[
              {
                supplier: 'Fornecedor A',
                product: 'Connect',
                description: 'Imidacloprido + Beta-ciflutrina',
                dosage: 1.0,
                dosageRange: '0,75-1,25 L/ha',
                applications: 2,
                applicationsRange: '2-3x safra',
                price: 'R$ 145,00',
                currency: 'BRL',
                costPerHa: 'R$ 290,00',
                total: 'R$ 435.000',
                economy: '-R$ 90.000',
                status: 'aguardando',
                isExpensive: true
              },
              {
                supplier: 'Fornecedor B',
                product: 'Engeo Pleno S',
                description: 'Tiametoxam + Lambda-cialotrina',
                dosage: 0.75,
                dosageRange: '0,5-1,0 L/ha',
                applications: 2,
                applicationsRange: '2-3x safra',
                price: 'US$ 24,50',
                currency: 'USD',
                costPerHa: 'R$ 192,00',
                total: 'R$ 288.000',
                economy: '+R$ 57.000',
                status: 'aguardando',
                isMedium: true
              },
              {
                supplier: 'Fornecedor C',
                product: 'Porthus',
                description: 'Tiametoxam + Lambda-cialotrina',
                dosage: 0.6,
                dosageRange: '0,5-0,8 L/ha',
                applications: 2,
                applicationsRange: '2-3x safra',
                price: 'US$ 22,00',
                currency: 'USD',
                costPerHa: 'R$ 138,00',
                total: 'R$ 207.000',
                economy: '+R$ 138.000',
                status: 'aguardando',
                isGood: true
              },
              {
                supplier: 'Fornecedor D',
                product: 'Actara 250 WG',
                description: 'Tiametoxam 250g/kg',
                dosage: 200,
                dosageRange: '150-300g/ha',
                applications: 2,
                applicationsRange: '2-3x safra',
                price: 'R$ 380,00',
                currency: 'BRL',
                costPerHa: 'R$ 152,00',
                total: 'R$ 228.000',
                economy: '+R$ 207.000',
                status: 'aprovado',
                isBest: true
              }
            ]}
          />
        )}
      </div>

      <div className="mt-6 text-left">
        <Button className="bg-agro-blue hover:bg-blue-700 text-white shadow-card">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Novo Alvo
        </Button>
      </div>
    </Card>
  );
};