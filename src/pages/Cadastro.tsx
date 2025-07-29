import { useState } from 'react';
import { Header } from '@/components/dashboard/Header';
import { Breadcrumb } from '@/components/dashboard/Breadcrumb';
import { ScenarioHeader } from '@/components/dashboard/ScenarioHeader';
import { MetricsCards } from '@/components/dashboard/MetricsCards';
import { TargetSection } from '@/components/dashboard/TargetSection';
import { SupplierSummary } from '@/components/dashboard/SupplierSummary';
import { FinalActions } from '@/components/dashboard/FinalActions';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { User, Bug, X } from 'lucide-react';

const Cadastro = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState('info');
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const showStep = (step: string) => {
    setCurrentStep(step);
  };

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

      {/* Modal Criar Novo Cenário */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-agro-green p-2 rounded-full">
                  <Bug className="w-5 h-5 text-white" />
                </div>
                <DialogTitle className="text-xl font-bold text-foreground">Simular Novo Cenário</DialogTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Navegação por Abas */}
          <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="info" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Informações do Cenário</span>
              </TabsTrigger>
              <TabsTrigger value="problem" className="flex items-center space-x-2">
                <Bug className="w-4 h-4" />
                <span>Alvo e Problema</span>
              </TabsTrigger>
            </TabsList>

            {/* Etapa 1: Informações do Cenário */}
            <TabsContent value="info" className="space-y-6">
              <Card className="p-6">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-5 h-5 text-agro-blue" />
                    <h4 className="text-lg font-semibold text-agro-blue">Etapa 1: Informações do Cenário</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">Defina o agricultor, fazenda e área que será analisada</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center space-x-2 text-sm font-medium">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span>Agricultor *</span>
                      </Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um agricultor..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fazenda-sao-joao">Fazenda São João</SelectItem>
                          <SelectItem value="agropecuaria-silva">Agropecuária Silva</SelectItem>
                          <SelectItem value="fazenda-esperanca">Fazenda Esperança</SelectItem>
                          <SelectItem value="cooperativa-central">Cooperativa Central</SelectItem>
                          <SelectItem value="fazenda-boa-vista">Fazenda Boa Vista</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Demanda</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a demanda..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="soja-vista-2025">Soja à Vista 2025</SelectItem>
                          <SelectItem value="milho-prazo-2026">Milho à Prazo 2026</SelectItem>
                          <SelectItem value="algodao-vista-2025">Algodão à Vista 2025</SelectItem>
                          <SelectItem value="trigo-vista-2025">Trigo à Vista 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Fazenda/Talhão</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a propriedade..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="talhao-1">Talhão 1 - Norte</SelectItem>
                          <SelectItem value="talhao-2">Talhão 2 - Sul</SelectItem>
                          <SelectItem value="talhao-3">Talhão 3 - Leste</SelectItem>
                          <SelectItem value="talhao-4">Talhão 4 - Oeste</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Área Total (hectares) *</Label>
                      <Input 
                        type="number" 
                        placeholder="Ex: 1500" 
                        required 
                        min="1"
                        step="0.1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Cultura</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a cultura..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="soja-v4-v6">Soja V4-V6</SelectItem>
                          <SelectItem value="milho-v6-v8">Milho V6-V8</SelectItem>
                          <SelectItem value="algodao-b1-b4">Algodão B1-B4</SelectItem>
                          <SelectItem value="trigo-v3-v5">Trigo V3-V5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Safra</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a safra..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024-2025">2024/2025</SelectItem>
                          <SelectItem value="2025-2026">2025/2026</SelectItem>
                          <SelectItem value="2026-2027">2026/2027</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={() => setCurrentStep('problem')}
                      className="bg-agro-green hover:bg-agro-green-dark"
                    >
                      Próxima Etapa
                    </Button>
                  </div>
                </form>
              </Card>
            </TabsContent>

            {/* Etapa 2: Alvo e Problema */}
            <TabsContent value="problem" className="space-y-6">
              <Card className="p-6">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bug className="w-5 h-5 text-agro-green" />
                    <h4 className="text-lg font-semibold text-agro-green">Etapa 2: Alvo e Problema</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">Defina o problema fitossanitário e suas características</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Tipo de Problema *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="plantas-daninhas">Plantas Daninhas</SelectItem>
                          <SelectItem value="insetos-pragas">Insetos e Pragas</SelectItem>
                          <SelectItem value="doencas">Doenças</SelectItem>
                          <SelectItem value="nematoides">Nematoides</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Problema Específico *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o problema..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buva-caruru">Buva + Caruru (Conyza spp. + Amaranthus spp.)</SelectItem>
                          <SelectItem value="percevejo-marrom">Percevejo-marrom (Euschistus heros)</SelectItem>
                          <SelectItem value="lagarta-cartucho">Lagarta-do-cartucho (Spodoptera frugiperda)</SelectItem>
                          <SelectItem value="ferrugem-asiatica">Ferrugem-asiática (Phakopsora pachyrhizi)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Nível de Infestação *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o nível..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="baixa">Baixa (0-30%)</SelectItem>
                          <SelectItem value="media">Média (30-60%)</SelectItem>
                          <SelectItem value="alta">Alta (60-90%)</SelectItem>
                          <SelectItem value="muito-alta">Muito Alta (90-100%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Resistência</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione se há resistência..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nao">Não há resistência</SelectItem>
                          <SelectItem value="parcial">Resistência parcial</SelectItem>
                          <SelectItem value="total">Resistência total</SelectItem>
                          <SelectItem value="desconhecido">Desconhecido</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Observações Adicionais</Label>
                    <textarea 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-agro-green bg-background text-foreground"
                      rows={3}
                      placeholder="Descreva características específicas do problema, histórico de controle, etc."
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setCurrentStep('info')}
                    >
                      Etapa Anterior
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-agro-green hover:bg-agro-green-dark"
                      onClick={() => {
                        setIsModalOpen(false);
                        // Aqui você pode adicionar lógica para processar os dados
                      }}
                    >
                      Criar Cenário
                    </Button>
                  </div>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cadastro;