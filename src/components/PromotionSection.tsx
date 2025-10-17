import { ChevronRight, CheckCircle2 } from "lucide-react";

const PromotionSection = () => {
  return (
    <div className="bg-white px-4 py-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-foreground">Ofertas</h3>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
      
      <div className="bg-promotion-bg border border-primary/20 rounded-lg p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-primary font-bold text-xl mb-1">Frete Grátis</h4>
            <p className="text-sm text-muted-foreground">
              Entrega gratuita para todo o Brasil em compras acima de R$ 50,00
            </p>
          </div>
          <div className="flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold shrink-0">
            <CheckCircle2 className="w-4 h-4" />
            Aplicado
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
