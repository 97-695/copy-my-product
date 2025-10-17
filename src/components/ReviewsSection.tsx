import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Luh Moraes",
      time: "há 23 minutos",
      rating: 5,
      comment: "O som é tão potente que parece uma caixa de som profissional! A conexão Bluetooth é estável e o carregamento é bem rápido. Perfeita pra qualquer ocasião.",
      initials: "LM",
    },
    {
      name: "Bela Prado",
      time: "há 41 minutos",
      rating: 5,
      comment: "Incrível! A qualidade do som superou minhas expectativas. Muito resistente e o design é lindo. Recomendo muito!",
      initials: "BP",
    },
  ];

  return (
    <div className="bg-white px-4 py-4">
      <h3 className="font-semibold text-foreground mb-3">
        Avaliações dos clientes (207)
      </h3>
      
      <div className="flex items-center gap-2 mb-6 pb-6 border-b">
        <span className="text-5xl font-bold">4.7</span>
        <div>
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-[hsl(var(--rating-star))] text-[hsl(var(--rating-star))]"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">/5</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0">
            <div className="flex items-start gap-3 mb-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-muted text-foreground font-semibold">
                  {review.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-foreground">{review.name}</span>
                  <span className="text-sm text-accent">{review.time}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[hsl(var(--rating-star))] text-[hsl(var(--rating-star))]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
