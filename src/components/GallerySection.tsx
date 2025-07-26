import gymInterior from "@/assets/gym-interior.jpg";
import groupClass from "@/assets/group-class.jpg";
import personalTraining from "@/assets/personal-training.jpg";

const galleryImages = [
  {
    src: gymInterior,
    title: "Equipamiento de Última Generación",
    description: "Máquinas y equipos de las mejores marcas mundiales"
  },
  {
    src: groupClass,
    title: "Clases Grupales Dinámicas",
    description: "Entrenamientos en grupo llenos de energía y motivación"
  },
  {
    src: personalTraining,
    title: "Entrenamiento Personalizado",
    description: "Atención individual con entrenadores certificados"
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            NUESTRAS <span className="text-primary">INSTALACIONES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Espacios diseñados para maximizar tu rendimiento y comodidad
          </p>
        </div>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Equipos Profesionales</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">1200m²</div>
            <div className="text-muted-foreground">Espacio Total</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-muted-foreground">Clases Diferentes</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Acceso Disponible</div>
          </div>
        </div>
        
        {/* Virtual Tour CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-lg p-8 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres conocer más?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda una visita gratuita y descubre todo lo que tenemos para ofrecerte
            </p>
            <button 
              className="btn-hero"
              onClick={() => {
                alert('¡Perfecto! Te contactaremos pronto para agendar tu visita gratuita.');
              }}
            >
              AGENDAR VISITA GRATUITA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;