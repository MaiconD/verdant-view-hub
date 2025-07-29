import { Store } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const SupplierSummary = () => {
  return (
    <Card className="p-8 mb-8 shadow-card">
      <div className="flex items-center mb-8">
        <div className="bg-agro-green p-3 rounded-full mr-4">
          <Store className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="font-poppins font-bold text-3xl text-foreground">Total por Revendedores</h2>
          <p className="text-muted-foreground">Resumo dos produtos aprovados organizados por fornecedor</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {/* Fornecedor I */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-agro-green">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-agro-green w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-foreground">Fornecedor I</h3>
                <p className="text-green-700 text-sm font-medium">✓ Aprovado - 1 produto selecionado</p>
                <p className="text-muted-foreground text-sm">Alvo: Buva + Caruru (ALVO 1)</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-agro-green text-white px-4 py-2 rounded-lg text-center">
                <div className="text-2xl font-bold">R$ 315.000</div>
                <div className="text-sm opacity-90">Total do Fornecedor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fornecedor D */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-agro-green">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-agro-green w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-foreground">Fornecedor D</h3>
                <p className="text-green-700 text-sm font-medium">✓ Aprovado - 1 produto selecionado</p>
                <p className="text-muted-foreground text-sm">Alvo: Percevejo-marrom (ALVO 2)</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-agro-green text-white px-4 py-2 rounded-lg text-center">
                <div className="text-2xl font-bold">R$ 228.000</div>
                <div className="text-sm opacity-90">Total do Fornecedor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};