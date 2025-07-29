import { Save, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const FinalActions = () => {
  const { toast } = useToast();

  const handleSaveScenario = () => {
    toast({
      title: "Cenário Salvo",
      description: "O cenário foi salvo com sucesso.",
    });
  };

  const handleFinalizeScenario = () => {
    toast({
      title: "Cenário Finalizado",
      description: "O cenário foi finalizado e enviado para aprovação.",
    });
  };

  return (
    <Card className="p-8 shadow-card">
      <div className="text-center mb-8">
        <h3 className="font-poppins font-bold text-2xl text-foreground mb-4">
          Finalizar Análise do Cenário
        </h3>
        <p className="text-muted-foreground">
          Revise todas as informações antes de salvar ou finalizar o cenário
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={handleSaveScenario}
          variant="secondary"
          className="bg-gray-500 hover:bg-gray-600 text-white"
        >
          <Save className="w-4 h-4 mr-2" />
          Salvar Cenário
        </Button>
        <Button 
          onClick={handleFinalizeScenario}
          className="bg-agro-green hover:bg-agro-green-dark text-white animate-pulse"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Finalizar Cenário
        </Button>
      </div>
    </Card>
  );
};