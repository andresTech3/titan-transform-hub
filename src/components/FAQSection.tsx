import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué incluye la membresía básica?",
    answer: "La membresía básica incluye acceso completo al gimnasio, evaluación física inicial, rutina de entrenamiento básica, acceso a vestuarios y duchas, y nuestra app móvil con seguimiento de progreso."
  },
  {
    question: "¿Ofrecen clases para principiantes?",
    answer: "¡Absolutamente! Tenemos clases específicamente diseñadas para principiantes en todas las disciplinas. Nuestros entrenadores te guiarán paso a paso para que te sientas cómodo y seguro desde el primer día."
  },
  {
    question: "¿Puedo pausar mi membresía temporalmente?",
    answer: "Sí, ofrecemos opciones de pausa de membresía por razones médicas, viajes o circunstancias especiales. Contacta a nuestro equipo para conocer las condiciones específicas."
  },
  {
    question: "¿Qué medidas de seguridad e higiene manejan?",
    answer: "Mantenemos los más altos estándares de limpieza con desinfección regular de equipos, ventilación adecuada, y productos de limpieza disponibles en toda la instalación. La seguridad de nuestros miembros es nuestra prioridad."
  },
  {
    question: "¿Ofrecen planes familiares o corporativos?",
    answer: "Sí, tenemos planes especiales para familias y empresas con descuentos significativos. Estos planes incluyen beneficios adicionales como horarios extendidos y programas personalizados."
  },
  {
    question: "¿Qué pasa si no veo resultados?",
    answer: "Nuestros programas están diseñados para garantizar resultados cuando se siguen consistentemente. Ofrecemos seguimiento regular y ajustes a tu plan. Si no estás satisfecho en los primeros 30 días, ofrecemos garantía de satisfacción."
  },
  {
    question: "¿Necesito experiencia previa para unirme?",
    answer: "No necesitas experiencia previa. Trabajamos con personas de todos los niveles, desde principiantes absolutos hasta atletas avanzados. Cada programa se adapta a tu nivel actual y objetivos específicos."
  },
  {
    question: "¿Qué horarios manejan?",
    answer: "Estamos abiertos de lunes a viernes de 5:00 AM a 11:00 PM, sábados de 6:00 AM a 10:00 PM y domingos de 7:00 AM a 9:00 PM. Los miembros TITAN tienen acceso 24/7."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            PREGUNTAS <span className="text-primary">FRECUENTES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resuelve todas tus dudas antes de comenzar tu transformación
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 data-[state=open]:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card/60 to-card/40 rounded-lg p-8 backdrop-blur-sm border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para ayudarte con cualquier duda adicional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                HABLAR CON UN ASESOR
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                ENVIAR MENSAJE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;