import { useState } from "react";
import { Code, Cpu, Rocket, Lightbulb, Music, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Events = () => {
  const eventCategories = [
    {
      icon: Code,
      title: "Coding Challenges",
      description: "Competitive programming, hackathons, and algorithm battles",
      color: "text-primary",
      events: ["CodeSprint Marathon", "Algorithm Arena", "Capture The Flag"],
      details: "Test your coding prowess in 24-hour hackathons, solve complex algorithms, and compete for prizes worth ₹2 Lakhs.",
    },
    {
      icon: Cpu,
      title: "Robotics",
      description: "Autonomous bots, line followers, and combat robotics",
      color: "text-secondary",
      events: ["RoboWars", "Line Follower Challenge", "Drone Racing"],
      details: "Build and battle with custom robots, navigate complex courses, and experience the thrill of autonomous systems.",
    },
    {
      icon: Rocket,
      title: "Tech Workshops",
      description: "Hands-on sessions with industry experts",
      color: "text-accent",
      events: ["AI/ML Workshop", "Web3 & Blockchain", "IoT Development"],
      details: "Learn cutting-edge technologies from industry professionals. Limited seats, early registration recommended.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Startup pitches, product demos, and idea competitions",
      color: "text-primary",
      events: ["Startup Pitch", "Innovation Challenge", "Product Showcase"],
      details: "Present your innovative ideas to investors and industry leaders. Winners get mentorship and seed funding opportunities.",
    },
    {
      icon: Music,
      title: "Cultural Events",
      description: "Music nights, dance battles, and entertainment",
      color: "text-secondary",
      events: ["Battle of Bands", "Dance Competition", "Stand-up Night"],
      details: "Unwind with electrifying performances, cultural showcases, and celebrity guest performances.",
    },
    {
      icon: Mic,
      title: "Speaker Sessions",
      description: "Talks from tech leaders and industry pioneers",
      color: "text-accent",
      events: ["Tech Talks", "Panel Discussions", "Fireside Chats"],
      details: "Gain insights from CTOs, founders, and visionaries from leading tech companies worldwide.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Events & Competitions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Over 50+ events spanning technology, innovation, and culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCategories.map((category, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="glass-effect rounded-lg p-6 hover:glow-primary transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <category.icon className={`w-12 h-12 mb-4 ${category.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="font-display text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.events.map((event, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-primary group-hover:text-secondary transition-colors"
                  >
                    Learn More →
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl flex items-center gap-3">
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                    {category.title}
                  </DialogTitle>
                  <DialogDescription className="text-foreground/80 pt-4">
                    {category.details}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <h4 className="font-semibold mb-3">Included Events:</h4>
                  <ul className="space-y-2">
                    {category.events.map((event, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 glow-primary">Register for {category.title}</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
