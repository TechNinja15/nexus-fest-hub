import { Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Workshops = () => {
  const workshops = [
    {
      title: "AI & Machine Learning Workshop",
      instructor: "Dr. Rajesh Kumar",
      company: "Tech Giants Inc.",
      duration: "6 hours",
      capacity: "50 participants",
      level: "Intermediate",
      description: "Deep dive into neural networks, computer vision, and natural language processing with hands-on projects.",
      prerequisites: ["Python basics", "Linear algebra", "Statistics fundamentals"],
      topics: ["Neural Networks", "TensorFlow", "Computer Vision", "NLP"],
      price: "₹499",
    },
    {
      title: "Web3 & Blockchain Development",
      instructor: "Vikram Singh",
      company: "CryptoChain Labs",
      duration: "8 hours",
      capacity: "40 participants",
      level: "Advanced",
      description: "Build decentralized applications using Ethereum, smart contracts, and Web3.js framework.",
      prerequisites: ["JavaScript", "Node.js", "React basics"],
      topics: ["Smart Contracts", "Solidity", "DApps", "Web3.js"],
      price: "₹599",
    },
    {
      title: "IoT Development with Arduino",
      instructor: "Dr. Anita Desai",
      company: "FutureBots",
      duration: "5 hours",
      capacity: "60 participants",
      level: "Beginner",
      description: "Learn to build IoT projects from scratch using Arduino, sensors, and cloud integration.",
      prerequisites: ["Basic electronics", "C programming"],
      topics: ["Arduino Programming", "Sensors", "IoT Protocols", "Cloud Integration"],
      price: "₹399",
    },
    {
      title: "Cloud Architecture & DevOps",
      instructor: "Priya Sharma",
      company: "CloudSys Solutions",
      duration: "7 hours",
      capacity: "45 participants",
      level: "Intermediate",
      description: "Master cloud deployment, CI/CD pipelines, containerization with Docker and Kubernetes.",
      prerequisites: ["Linux basics", "Git", "Basic networking"],
      topics: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD"],
      price: "₹549",
    },
  ];

  return (
    <section id="workshops" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Workshops
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hands-on learning sessions with industry experts and cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-8 hover:glow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold flex-1">{workshop.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {workshop.level}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  <span className="text-primary font-medium">{workshop.instructor}</span> • {workshop.company}
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/90 mb-6">{workshop.description}</p>

              {/* Info Pills */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-primary" />
                  <span>{workshop.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users size={16} className="text-primary" />
                  <span>{workshop.capacity}</span>
                </div>
              </div>

              {/* Topics */}
              <div className="mb-6">
                <h4 className="font-display font-bold text-sm mb-3">What You'll Learn</h4>
                <div className="flex flex-wrap gap-2">
                  {workshop.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-background/50 border border-primary/20 text-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div className="mb-6">
                <h4 className="font-display font-bold text-sm mb-3">Prerequisites</h4>
                <div className="space-y-2">
                  {workshop.prerequisites.map((prereq, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Workshop Fee</div>
                  <div className="font-display text-2xl font-bold text-primary">{workshop.price}</div>
                </div>
                <Button className="glow-primary">
                  Register Now
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 glass-effect rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-bold mb-3">Workshop Package Deal</h3>
          <p className="text-muted-foreground mb-4">
            Register for 3 or more workshops and get 20% off! Plus, receive exclusive workshop materials and certificates.
          </p>
          <Button size="lg" className="glow-primary">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
