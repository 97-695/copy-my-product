import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productImage from "@/assets/jbl-speaker.png";

const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 7;

  const nextImage = () => {
    setCurrentImage((prev) => (prev < totalImages ? prev + 1 : 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev > 1 ? prev - 1 : totalImages));
  };

  return (
    <div className="relative bg-white">
      <div className="aspect-[4/3] flex items-center justify-center overflow-hidden">
        <img
          src={productImage}
          alt="JBL Boombox 4"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentImage}/{totalImages}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProductGallery;
