import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

const PriceSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 4,
    seconds: 46,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="bg-secondary px-4 py-3 flex items-center justify-between">
      <div>
        <div className="text-white text-3xl font-bold mb-1">
          R$ 57,90
        </div>
        <div className="flex items-center gap-2 text-white/90 text-sm">
          <span className="line-through">R$ 79,90</span>
          <span className="font-semibold">Economize 75%</span>
        </div>
      </div>
      
      <div className="text-right">
        <div className="flex items-center gap-1 text-white text-xs font-semibold mb-1">
          <Zap className="w-4 h-4 fill-white" />
          OFERTA RELÂMPAGO
        </div>
        <div className="bg-white text-foreground px-3 py-1 rounded text-sm font-bold">
          TERMINA EM {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
