import { Building2 } from "lucide-react";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      sponsors: [{ name: "TechCorp Global", logo: "TC" }],
    },
    {
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "CloudSys Solutions", logo: "CS" },
        { name: "InnovateTech", logo: "IT" },
      ],
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "DataFlow Systems", logo: "DF" },
        { name: "CyberSecure", logo: "CY" },
        { name: "AI Innovations", logo: "AI" },
        { name: "RoboTech", logo: "RT" },
      ],
    },
    {
      tier: "Partners",
      sponsors: [
        { name: "StartupHub", logo: "SH" },
        { name: "DevCommunity", logo: "DC" },
        { name: "TechMedia", logo: "TM" },
        { name: "CodeAcademy", logo: "CA" },
        { name: "DesignStudio", logo: "DS" },
        { name: "CloudVentures", logo: "CV" },
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Sponsors & Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Powered by industry leaders and innovative companies
          </p>
        </div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="animate-fade-in" style={{ animationDelay: `${tierIndex * 0.1}s` }}>
              <h3 className="font-display text-2xl font-bold text-center mb-8 text-primary">
                {tier.tier}
              </h3>
              <div
                className={`grid gap-8 ${
                  tier.sponsors.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : tier.sponsors.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                    : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                }`}
              >
                {tier.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-lg p-8 flex flex-col items-center justify-center hover:glow-primary transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Building2 size={40} className="text-primary" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-center group-hover:text-primary transition-colors">
                      {sponsor.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-muted-foreground mb-6">
              Join us in empowering the next generation of innovators. Showcase your brand to 10,000+ students and tech enthusiasts.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:glow-primary transition-all"
            >
              Get Sponsorship Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
