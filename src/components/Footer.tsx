import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-display font-bold mb-4">
              <span className="text-primary">TITAN</span> GYM
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformamos vidas a través del fitness. Únete a nuestra comunidad y descubre 
              tu verdadero potencial.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-muted-foreground">
                    Av. Fitness 123, Centro<br />
                    Ciudad de México, CDMX
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-muted-foreground">+52 55 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@titangym.mx</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Schedule */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary">Horarios</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Lunes - Viernes</p>
                  <p className="text-muted-foreground">5:00 AM - 11:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Sábados</p>
                  <p className="text-muted-foreground">6:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Domingos</p>
                  <p className="text-muted-foreground">7:00 AM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="bg-gradient-primary text-primary-foreground px-3 py-2 rounded-lg mt-4">
                <p className="font-bold text-sm">Miembros TITAN: 24/7</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary">Enlaces</h4>
            <div className="grid grid-cols-1 gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Planes y Precios
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Clases Grupales
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Entrenadores
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Testimonios
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Blog Fitness
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="border-border/50" />
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Titan Gym. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center space-x-6">
            <p className="text-sm text-muted-foreground">
              Síguenos en redes sociales:
            </p>
            <div className="flex space-x-2">
              <span className="text-primary font-bold">@TitanGymMX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;