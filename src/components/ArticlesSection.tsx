import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "5 Ejercicios Fundamentales para Principiantes",
    excerpt: "Domina estos movimientos básicos para construir una base sólida en tu entrenamiento.",
    category: "Entrenamiento",
    readTime: "4 min",
    featured: true,
  },
  {
    title: "Nutrición Pre y Post Entrenamiento",
    excerpt: "Optimiza tu rendimiento y recuperación con estos consejos nutricionales esenciales.",
    category: "Nutrición",
    readTime: "6 min",
    featured: false,
  },
  {
    title: "Cómo Mantener la Motivación a Largo Plazo",
    excerpt: "Estrategias mentales para mantener la consistencia en tu rutina de ejercicios.",
    category: "Motivación",
    readTime: "5 min",
    featured: false,
  },
  {
    title: "Rutina de Recuperación: Estiramientos Esenciales",
    excerpt: "Ejercicios de flexibilidad que acelerarán tu recuperación y prevendrán lesiones.",
    category: "Recuperación",
    readTime: "3 min",
    featured: false,
  },
];

const ArticlesSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            TIPS Y <span className="text-primary">CONOCIMIENTO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente actualizado con los mejores consejos de fitness y nutrición
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 group h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    DESTACADO
                  </Badge>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{articles[0].readTime}</span>
                  </div>
                </div>
                
                <CardTitle className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                  {articles[0].title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary text-primary">
                    {articles[0].category}
                  </Badge>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Other Articles */}
          <div className="space-y-6">
            {articles.slice(1).map((article, index) => (
              <Card 
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border/30 hover:shadow-card transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-accent text-accent text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="text-xs">{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary group p-0">
                    Leer más
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-card/60 to-card/40 rounded-lg p-8 backdrop-blur-sm border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Recibe Tips Semanales
            </h3>
            <p className="text-muted-foreground mb-6">
              Suscríbete a nuestro newsletter y recibe los mejores consejos de fitness directamente en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-hero">
                SUSCRIBIRSE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
