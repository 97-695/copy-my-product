import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import alexaEcho1 from "@/assets/alexa-echo-1.png";
import alexaEcho2 from "@/assets/alexa-echo-2.png";
import alexaEcho3 from "@/assets/alexa-echo-3.png";
import alexaEcho4 from "@/assets/alexa-echo-4.png";

const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const images = [alexaEcho1, alexaEcho2, alexaEcho3, alexaEcho4];
  const totalImages = images.length;

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
          src={images[currentImage - 1]}
          alt="Alexa echo show 5"
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
