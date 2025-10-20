import { Home, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
      <div className="max-w-2xl mx-auto flex items-center gap-2 p-3">
        <button className="flex flex-col items-center gap-1 px-3 py-1 hover:bg-muted rounded transition-colors">
          <Home className="w-5 h-5" />
          <span className="text-xs">Loja</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 px-3 py-1 hover:bg-muted rounded transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs">Chat</span>
        </button>

        <Button 
          variant="outline" 
          className="flex-1 h-11 font-semibold"
          onClick={() => window.open('https://www.instagram.com/', '_blank')}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar ao carrinho
        </Button>

        <Button 
          className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base"
          onClick={() => window.open('https://seguro.screeengrow.shop/api/public/shopify?product=1634994417246&store=16349', '_blank')}
        >
          COMPRAR
        </Button>
      </div>
    </div>
  );
};

export default BottomNav;
