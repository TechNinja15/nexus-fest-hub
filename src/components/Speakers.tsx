import { Linkedin, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Chief AI Scientist",
      company: "Tech Giants Inc.",
      expertise: "Artificial Intelligence & Machine Learning",
      image: "RK",
    },
    {
      name: "Priya Sharma",
      designation: "VP of Engineering",
      company: "CloudSys Solutions",
      expertise: "Cloud Architecture & DevOps",
      image: "PS",
    },
    {
      name: "Arjun Mehta",
      designation: "Founder & CEO",
      company: "InnovateTech",
      expertise: "Startups & Entrepreneurship",
      image: "AM",
    },
    {
      name: "Dr. Anita Desai",
      designation: "Robotics Lead",
      company: "FutureBots",
      expertise: "Robotics & Automation",
      image: "AD",
    },
    {
      name: "Vikram Singh",
      designation: "Head of Blockchain",
      company: "CryptoChain Labs",
      expertise: "Web3 & Blockchain Technology",
      image: "VS",
    },
    {
      name: "Neha Gupta",
      designation: "Director of UX",
      company: "DesignFirst Co.",
      expertise: "User Experience & Product Design",
      image: "NG",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Speakers & Guests
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Learn from industry leaders and technology pioneers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:glow-primary transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4 ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                    {speaker.image}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-display text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{speaker.designation}</p>
                <p className="text-sm text-muted-foreground mb-3">{speaker.company}</p>
                <div className="px-4 py-2 rounded-full bg-background/50 border border-primary/20 mb-4">
                  <p className="text-xs text-muted-foreground">{speaker.expertise}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin size={16} className="text-primary" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Twitter size={16} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
