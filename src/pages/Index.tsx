import { X, Share2, ShoppingCart, MoreVertical } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import PriceSection from "@/components/PriceSection";
import ProductInfo from "@/components/ProductInfo";
import ServicesSection from "@/components/ServicesSection";
import PromotionSection from "@/components/PromotionSection";
import ReviewsSection from "@/components/ReviewsSection";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <MoreVertical className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto">
        <ProductGallery />
        <PriceSection />
        <ProductInfo />
        <ServicesSection />
        <PromotionSection />
        <ReviewsSection />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
