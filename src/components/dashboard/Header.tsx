import logo from '@/assets/agrocompras-logo.png';

export const Header = () => {
  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="AgroCompras Logo" className="w-10 h-10" />
            <div>
              <h1 className="font-poppins font-bold text-2xl text-foreground">AgroCompras</h1>
              <p className="text-sm text-muted-foreground">Gestão Inteligente de Compras</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Fazenda São Paulo</p>
              <p className="text-xs text-muted-foreground">João Silva - Administrador</p>
            </div>
            <div className="w-10 h-10 bg-agro-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};