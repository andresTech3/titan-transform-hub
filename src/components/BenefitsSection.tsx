import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Users, Apple, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Entrenamiento Personalizado",
    description: "Rutinas diseñadas específicamente para tus objetivos con seguimiento profesional constante.",
  },
  {
    icon: Apple,
    title: "Nutrición Especializada",
    description: "Planes nutricionales personalizados que complementan tu entrenamiento para máximos resultados.",
  },
  {
    icon: Users,
    title: "Comunidad Motivadora",
    description: "Únete a una familia fitness que te apoya y motiva a superar tus límites cada día.",
  },
  {
    icon: Calendar,
    title: "Clases Variadas",
    description: "Amplia gama de clases grupales: CrossFit, Yoga, Pilates, Spinning y mucho más.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ¿POR QUÉ ELEGIR <span className="text-primary">TITAN GYM</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más que un gimnasio, somos tu partner en la transformación física y mental
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;