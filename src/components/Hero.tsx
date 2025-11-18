import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text">
            INNOFEST 2025
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Where Innovation Meets Excellence | India's Premier Tech Festival
          </p>

          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
              <Calendar className="text-primary" size={20} />
              <span className="font-medium">March 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
              <MapPin className="text-primary" size={20} />
              <span className="font-medium">University Campus</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
              <Users className="text-primary" size={20} />
              <span className="font-medium">10,000+ Participants</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="glass-effect rounded-lg p-6 glow-primary">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm uppercase text-muted-foreground font-medium">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 glow-primary">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
              View Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
