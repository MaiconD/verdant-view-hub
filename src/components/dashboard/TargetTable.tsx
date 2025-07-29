import { useState } from 'react';
import { Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Product {
  supplier: string;
  product: string;
  description: string;
  dosage: number;
  dosageRange: string;
  applications: number;
  applicationsRange: string;
  price: string;
  currency: string;
  costPerHa: string;
  total: string;
  economy: string;
  status: 'aguardando' | 'aprovado' | 'rejeitado';
  isBest?: boolean;
  isExpensive?: boolean;
  isMedium?: boolean;
  isGood?: boolean;
}

interface TargetTableProps {
  targetId: string;
  products: Product[];
}

export const TargetTable = ({ targetId, products }: TargetTableProps) => {
  const [productList, setProductList] = useState(products);

  const toggleStatus = (index: number) => {
    setProductList(prev => prev.map((product, i) => {
      if (i === index) {
        const newStatus = product.status === 'aguardando' ? 'aprovado' : 'aguardando';
        return { ...product, status: newStatus };
      }
      return product;
    }));
  };

  const updateDosage = (index: number, value: number) => {
    setProductList(prev => prev.map((product, i) => {
      if (i === index) {
        return { ...product, dosage: value };
      }
      return product;
    }));
  };

  const updateApplications = (index: number, value: number) => {
    setProductList(prev => prev.map((product, i) => {
      if (i === index) {
        return { ...product, applications: value };
      }
      return product;
    }));
  };

  return (
    <div className="bg-card rounded-xl shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 w-[8%] min-w-[80px] text-xs font-semibold uppercase tracking-wider">
                Fornecedor
              </th>
              <th className="text-left p-3 w-[15%] min-w-[150px] text-xs font-semibold uppercase tracking-wider">
                Produto
              </th>
              <th className="text-center p-3 w-[8%] min-w-[80px] text-xs font-semibold uppercase tracking-wider">
                Dosagem
              </th>
              <th className="text-center p-3 w-[8%] min-w-[80px] text-xs font-semibold uppercase tracking-wider">
                Aplicações
              </th>
              <th className="text-center p-3 w-[8%] min-w-[80px] text-xs font-semibold uppercase tracking-wider">
                Preço/L<br />
                <span className="text-xs font-normal text-muted-foreground">(BRL/USD)</span>
              </th>
              <th className="text-center p-3 w-[8%] min-w-[80px] text-xs font-semibold uppercase tracking-wider">
                Custo/HA
              </th>
              <th className="text-center p-3 w-[12%] min-w-[120px] text-xs font-semibold uppercase tracking-wider">
                Total
              </th>
              <th className="text-center p-3 w-[12%] min-w-[120px] text-xs font-semibold uppercase tracking-wider">
                Economia
              </th>
              <th className="text-center p-3 w-[10%] min-w-[100px] text-xs font-semibold uppercase tracking-wider">
                Ação
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {productList.map((product, index) => (
              <tr 
                key={index} 
                className={`hover:bg-muted/50 transition-colors ${
                  product.isBest ? 'bg-agro-green-light border-2 border-agro-green' : ''
                }`}
              >
                <td className="text-center p-3">
                  <div className="font-medium text-foreground">{product.supplier}</div>
                </td>
                <td className="p-3">
                  <div className="font-medium text-foreground">{product.product}</div>
                  <div className="text-xs text-muted-foreground">{product.description}</div>
                </td>
                <td className="text-center p-3">
                  <Input
                    type="number"
                    value={product.dosage}
                    step="0.1"
                    min="0"
                    className="w-16 text-center text-sm font-medium"
                    onChange={(e) => updateDosage(index, parseFloat(e.target.value))}
                  />
                  <div className="text-xs text-muted-foreground mt-1">{product.dosageRange}</div>
                </td>
                <td className="text-center p-3">
                  <Input
                    type="number"
                    value={product.applications}
                    min="1"
                    max="5"
                    className="w-12 text-center text-sm font-medium"
                    onChange={(e) => updateApplications(index, parseInt(e.target.value))}
                  />
                  <div className="text-xs text-muted-foreground mt-1">{product.applicationsRange}</div>
                </td>
                <td className="text-center p-3">
                  <div className="font-medium text-foreground">{product.price}</div>
                  <div className="text-xs text-muted-foreground">{product.currency}</div>
                </td>
                <td className="text-center p-3">
                  <div className={`font-bold ${
                    product.isExpensive ? 'text-agro-red' : 
                    product.isMedium ? 'text-agro-yellow' : 
                    'text-agro-green'
                  }`}>
                    {product.costPerHa}
                  </div>
                </td>
                <td className="text-center p-3">
                  <div className="font-medium">{product.total}</div>
                </td>
                <td className="text-center p-3">
                  <div className={`font-bold ${
                    product.economy.startsWith('-') ? 'text-agro-red' : 'text-agro-green'
                  }`}>
                    {product.economy}
                  </div>
                </td>
                <td className="text-center p-3">
                  <Button
                    onClick={() => toggleStatus(index)}
                    size="sm"
                    className={`transition-all ${
                      product.status === 'aprovado'
                        ? 'bg-agro-green hover:bg-agro-green-dark text-white'
                        : 'bg-agro-yellow hover:bg-yellow-600 text-white'
                    }`}
                  >
                    {product.status === 'aprovado' ? (
                      <>
                        <Check className="w-3 h-3 mr-1" />
                        Aprovado
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Aguardando
                      </>
                    )}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};