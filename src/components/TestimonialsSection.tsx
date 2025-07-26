import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Ejecutiva",
    content: "En 6 meses perdí 15kg y gané una confianza que nunca pensé tener. El equipo de Titan Gym no solo transformó mi cuerpo, sino mi mentalidad completa.",
    rating: 5,
    initials: "MG"
  },
  {
    name: "Carlos Ruiz",
    role: "Emprendedor",
    content: "Como empresario, necesitaba algo eficiente. Los entrenamientos personalizados me dieron resultados increíbles en tiempo récord. ¡Recomendado al 100%!",
    rating: 5,
    initials: "CR"
  },
  {
    name: "Ana Torres",
    role: "Estudiante",
    content: "La comunidad de Titan Gym es increíble. Cada día me motivo más viendo el progreso de otros y recibiendo apoyo constante. Es mi segunda familia.",
    rating: 5,
    initials: "AT"
  },
  {
    name: "Roberto Silva",
    role: "Ingeniero",
    content: "Después de años sin hacer ejercicio, pensé que era tarde para empezar. El equipo me demostró lo contrario. A los 45 años estoy en la mejor forma de mi vida.",
    rating: 5,
    initials: "RS"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            HISTORIAS DE <span className="text-primary">ÉXITO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestros miembros han transformado sus vidas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-accent transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Listo para escribir tu propia historia de éxito?
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-lg font-bold">4.9/5 en satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;