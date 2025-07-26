import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "BÁSICO",
    price: "49",
    period: "mes",
    description: "Perfecto para comenzar tu transformación",
    features: [
      "Acceso completo al gimnasio",
      "Evaluación física inicial",
      "Rutina de entrenamiento básica",
      "Acceso a vestuarios y duchas",
      "App móvil con seguimiento",
    ],
    popular: false,
  },
  {
    name: "PRO",
    price: "89",
    period: "mes",
    description: "Para resultados más rápidos y efectivos",
    features: [
      "Todo lo del plan Básico",
      "Entrenamiento personalizado",
      "Plan nutricional básico",
      "2 clases grupales por semana",
      "Seguimiento mensual",
      "Acceso a zona funcional",
    ],
    popular: true,
  },
  {
    name: "TITAN",
    price: "149",
    period: "mes",
    description: "La experiencia completa de transformación",
    features: [
      "Todo lo del plan Pro",
      "Entrenador personal dedicado",
      "Plan nutricional personalizado",
      "Clases grupales ilimitadas",
      "Seguimiento semanal",
      "Acceso prioritario",
      "Suplementación guiada",
      "Masajes de recuperación",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ELIGE TU <span className="text-primary">PLAN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encuentra el plan perfecto para tu estilo de vida y objetivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-to-b from-card to-card/80' 
                  : 'border-border hover:shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-2 font-bold">
                  <Star className="inline h-4 w-4 mr-1" />
                  MÁS POPULAR
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="text-2xl font-display font-bold">
                  {plan.name}
                </CardTitle>
                <div className="my-4">
                  <span className="text-5xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'btn-hero' 
                      : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                  size="lg"
                  onClick={() => {
                    alert(`¡Seleccionaste el plan ${plan.name}! Contacta con nosotros para más información.`);
                  }}
                >
                  COMENZAR AHORA
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas algo más específico?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              alert('Contacta con nosotros para planes corporativos. ¡Ofertas especiales para empresas!');
            }}
          >
            PLANES CORPORATIVOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;