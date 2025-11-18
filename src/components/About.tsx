import { Zap, Target, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Zap, value: "10+", label: "Years of Excellence" },
    { icon: Target, value: "50+", label: "Events & Competitions" },
    { icon: Trophy, value: "₹10L+", label: "Prize Pool" },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About INNOFEST
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            India's most anticipated tech festival bringing together the brightest minds in technology, innovation, and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-display text-3xl font-bold text-primary">Our Vision</h3>
            <p className="text-foreground/90 leading-relaxed">
              INNOFEST has been at the forefront of technological innovation since its inception. Over the past decade, 
              we've grown from a modest college event to one of India's premier national-level tech festivals, 
              attracting thousands of participants from across the country.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our mission is to provide a platform where creativity meets technology, where students can showcase 
              their talent, learn from industry experts, and push the boundaries of innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 text-center hover:glow-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-lg p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-center">Past Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Record-breaking participation of 10,000+ students in 2024",
              "Featured renowned speakers from Google, Microsoft, and Tesla",
              "Hosted India's largest student robotics competition",
            ].map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
