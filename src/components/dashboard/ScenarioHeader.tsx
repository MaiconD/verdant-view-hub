import { TrendingUp, Sprout, Maximize } from 'lucide-react';

export const ScenarioHeader = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-8">
      <div className="flex flex-col items-start space-y-4">
        <div className="w-full">
          <h2 className="font-poppins font-bold text-3xl text-foreground mb-3">
            Cenário Atual: Soja à Vista 2025 - Buva Resistente
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-agro-blue-light border border-blue-200 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <div className="bg-agro-blue w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs font-medium text-muted-foreground">Demanda</div>
              </div>
              <div className="font-bold text-blue-700 text-sm">Soja à Vista 2025</div>
            </div>

            <div className="bg-agro-green-light border border-green-200 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <div className="bg-agro-green w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <Sprout className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs font-medium text-muted-foreground">Cultura</div>
              </div>
              <div className="font-bold text-green-700 text-sm">Soja V4-V6</div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <div className="bg-agro-yellow w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <Maximize className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs font-medium text-muted-foreground">Área Total</div>
              </div>
              <div className="font-bold text-yellow-700 text-sm">1.500 ha</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};