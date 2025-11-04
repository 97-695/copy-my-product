import { Star, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductInfo = () => {
  return (
    <div className="bg-white p-4 space-y-4">
      <div>
        <Badge className="bg-promotion-bg text-primary border-none mb-2">
          <span className="mr-1">⚡</span> OFERTA RELÂMPAGO
        </Badge>
        <h1 className="text-lg font-semibold leading-tight text-foreground">
          Alexa echo show 5
        </h1>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-[hsl(var(--rating-star))] text-[hsl(var(--rating-star))]" />
          <span className="font-semibold">4.7</span>
          <span className="text-muted-foreground">(204)</span>
        </div>
        <div className="text-muted-foreground">
          • 4473 vendidos
        </div>
      </div>

      <div className="flex items-start gap-3 pt-2 border-t">
        <Truck className="w-6 h-6 mt-1 shrink-0" />
        <div>
          <div className="font-semibold text-foreground">Receba 10 a 15 dias</div>
          <div className="text-sm">
            Taxa de envio: <span className="text-accent font-semibold">Grátis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
