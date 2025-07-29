import { ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Breadcrumb = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <nav className="flex items-center space-x-2 text-sm">
          <a href="#" className="text-agro-blue hover:opacity-80 transition-colors">
            Histórico de Cenários
          </a>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Análise de Cenário</span>
        </nav>
        
        <Button className="bg-agro-blue hover:bg-blue-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Relatório
        </Button>
      </div>
    </div>
  );
};