import { CheckCircle2, ChevronRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    "Devolução gratuita",
    "Pagamento seguro",
    "Cupom por perda ou dano",
    "Cupom por atraso na coleta",
  ];

  return (
    <div className="bg-[#FFF9E6] mx-4 my-4 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-secondary">Serviços do TikTok Shop</h3>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
