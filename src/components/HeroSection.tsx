import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-glow">TITAN</span>{" "}
            <span className="text-primary">GYM</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground/90 mb-4 animate-slide-up">
            TRANSFORMA TU CUERPO.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-8 animate-slide-up">
            SUPERA TUS LÍMITES.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-slide-up">
            Únete a la comunidad fitness más poderosa. Entrenamientos personalizados, 
            nutrición especializada y el apoyo que necesitas para alcanzar tus metas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
            <Button className="btn-hero group">
              COMIENZA TU TRANSFORMACIÓN
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              VER INSTALACIONES
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;