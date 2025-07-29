import { Header } from '@/components/dashboard/Header';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, CheckCircle, Clock, PiggyBank, Plus } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const handleNewScenario = () => {
    navigate('/cadastro');
  };

  return (
    <div className="min-h-screen bg-gradient-green">
      <Header />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Título e Ação Principal */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-2">Histórico de Cenários</h2>
            <p className="text-muted-foreground">Gerencie e acompanhe todos os seus cenários de compra</p>
          </div>
          
          <Button 
            onClick={handleNewScenario}
            className="bg-agro-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-agro-green-dark transition flex items-center space-x-2 animate-pulse"
          >
            <Plus className="w-5 h-5" />
            <span>Novo Cenário</span>
          </Button>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total de Cenários */}
          <Card className="bg-background rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total de Cenários</p>
                <p className="text-3xl font-bold text-foreground mt-1">27</p>
                <p className="text-sm text-agro-green mt-1">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  +3 esta semana
                </p>
              </div>
              <div className="bg-agro-blue-light p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-agro-blue" />
              </div>
            </div>
          </Card>

          {/* Cenários Aprovados */}
          <Card className="bg-background rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Aprovados</p>
                <p className="text-3xl font-bold text-agro-green mt-1">18</p>
                <p className="text-sm text-muted-foreground mt-1">66,7% do total</p>
              </div>
              <div className="bg-agro-green-light p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-agro-green" />
              </div>
            </div>
          </Card>

          {/* Aguardando Análise */}
          <Card className="bg-background rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Aguardando</p>
                <p className="text-3xl font-bold text-agro-yellow mt-1">7</p>
                <p className="text-sm text-muted-foreground mt-1">25,9% do total</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-agro-yellow" />
              </div>
            </div>
          </Card>

          {/* Economia Total */}
          <Card className="bg-background rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Economia Total</p>
                <p className="text-3xl font-bold text-agro-green mt-1">R$ 847K</p>
                <p className="text-sm text-agro-green mt-1">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  26,3% média
                </p>
              </div>
              <div className="bg-agro-green-light p-3 rounded-full">
                <PiggyBank className="w-6 h-6 text-agro-green" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filtros e Ações */}
        <Card className="bg-background rounded-xl p-6 card-shadow mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-foreground">Filtrar por:</label>
              </div>
              
              <select className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-agro-green bg-background text-foreground">
                <option value="">Todas as Culturas</option>
                <option value="soja">Soja</option>
                <option value="milho">Milho</option>
                <option value="algodao">Algodão</option>
                <option value="trigo">Trigo</option>
              </select>
              
              <select className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-agro-green bg-background text-foreground">
                <option value="">Todos os Alvos</option>
                <option value="buva-caruru">Buva + Caruru</option>
                <option value="percevejo-marrom">Percevejo-marrom</option>
              </select>
              
              <select className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-agro-green bg-background text-foreground">
                <option value="">Todos os Status</option>
                <option value="aprovado">Aprovado</option>
                <option value="aguardando">Aguardando</option>
                <option value="analisando">Analisando</option>
              </select>
              
              <input type="date" className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-agro-green bg-background text-foreground" />
            </div>
          </div>
        </Card>

        {/* Tabela de Cenários */}
        <Card className="bg-background rounded-xl card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-semibold text-lg text-foreground">Histórico de Cenários</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Data</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Demanda</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Cultura</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Alvo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Área (ha)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Resultado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-border">
                {/* Sample rows */}
                <tr className="hover:bg-muted/50 cursor-pointer" onClick={() => navigate('/analise')}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">15/07/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-foreground">Fazenda São João</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-agro-blue-light text-agro-blue">
                      Soja à Vista 2025
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">Soja V4-V6</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-foreground">Buva + Caruru</div>
                    <div className="text-xs text-muted-foreground">Conyza spp. + Amaranthus spp.</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">1.500</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-agro-green">R$ 113.400</div>
                    <div className="text-xs text-muted-foreground">26,5% economia</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-agro-green-light text-agro-green">
                      Aprovado
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Button variant="outline" size="sm">
                      Opções
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;