import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import reviewer1 from "@/assets/reviewer1.jpg";
import reviewer2 from "@/assets/reviewer2.jpg";
import reviewer3 from "@/assets/reviewer3.jpg";
import reviewer4 from "@/assets/reviewer4.jpg";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ana Carolina",
      time: "há 15 minutos",
      rating: 5,
      comment: "Produto incrível! Chegou super rápido e a qualidade da imagem é surpreendente. Meus filhos adoraram assistir desenhos nessa TV retrô. Vale muito a pena!",
      photo: reviewer1,
    },
    {
      name: "Ricardo Santos",
      time: "há 28 minutos",
      rating: 5,
      comment: "A nostalgia que essa TV traz é incrível! Funciona perfeitamente e o design retrô ficou lindo na minha sala. Recomendo demais!",
      photo: reviewer2,
    },
    {
      name: "Marcos Lima",
      time: "há 1 hora",
      rating: 5,
      comment: "Excelente custo-benefício! A qualidade de som e imagem superou minhas expectativas. Perfeito para maratonas de séries!",
      photo: reviewer3,
    },
    {
      name: "Patricia Oliveira",
      time: "há 2 horas",
      rating: 5,
      comment: "Amei! É compacta, bonita e funciona muito bem. Ótima para quarto ou escritório. A conexão é super estável.",
      photo: reviewer4,
    },
    {
      name: "João Pedro",
      time: "há 3 horas",
      rating: 5,
      comment: "Produto de qualidade! Entrega rápida e embalagem impecável. A TV retrô dá um charme especial no ambiente.",
      photo: reviewer2,
    },
    {
      name: "Fernanda Costa",
      time: "há 5 horas",
      rating: 5,
      comment: "Simplesmente perfeito! Design vintage maravilhoso e funciona perfeitamente. Minha família toda curtiu!",
      photo: reviewer1,
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
                <AvatarImage src={review.photo} alt={review.name} />
                <AvatarFallback className="bg-muted text-foreground font-semibold">
                  {review.name.split(" ").map(n => n[0]).join("")}
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
