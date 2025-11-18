import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin } from "lucide-react";

const Schedule = () => {
  const scheduleData = {
    day1: [
      { time: "09:00 AM", event: "Registration & Welcome", venue: "Main Auditorium", type: "general" },
      { time: "10:00 AM", event: "Inaugural Ceremony", venue: "Main Auditorium", type: "ceremony" },
      { time: "11:30 AM", event: "Keynote: Future of AI", venue: "Main Auditorium", type: "talk" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Food Court", type: "break" },
      { time: "02:00 PM", event: "Workshop: Web3 Development", venue: "Lab A", type: "workshop" },
      { time: "02:00 PM", event: "CodeSprint Begins", venue: "Coding Arena", type: "competition" },
      { time: "05:00 PM", event: "RoboWars Qualifiers", venue: "Arena B", type: "competition" },
      { time: "07:00 PM", event: "Cultural Night - Battle of Bands", venue: "Open Ground", type: "cultural" },
    ],
    day2: [
      { time: "09:00 AM", event: "Hackathon Continues", venue: "Coding Arena", type: "competition" },
      { time: "10:00 AM", event: "Panel Discussion: Startups", venue: "Seminar Hall", type: "talk" },
      { time: "11:30 AM", event: "Workshop: IoT & Arduino", venue: "Lab B", type: "workshop" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Food Court", type: "break" },
      { time: "02:00 PM", event: "Innovation Challenge Finals", venue: "Main Auditorium", type: "competition" },
      { time: "04:00 PM", event: "Drone Racing Championship", venue: "Open Ground", type: "competition" },
      { time: "06:00 PM", event: "Tech Talk: Cloud Architecture", venue: "Seminar Hall", type: "talk" },
      { time: "08:00 PM", event: "DJ Night", venue: "Open Ground", type: "cultural" },
    ],
    day3: [
      { time: "09:00 AM", event: "Final Round Competitions", venue: "Various Venues", type: "competition" },
      { time: "11:00 AM", event: "Startup Pitch Finals", venue: "Main Auditorium", type: "competition" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Food Court", type: "break" },
      { time: "02:00 PM", event: "Product Showcase", venue: "Exhibition Hall", type: "general" },
      { time: "04:00 PM", event: "Prize Distribution", venue: "Main Auditorium", type: "ceremony" },
      { time: "06:00 PM", event: "Closing Ceremony", venue: "Main Auditorium", type: "ceremony" },
      { time: "07:00 PM", event: "Farewell Party", venue: "Open Ground", type: "cultural" },
    ],
  };

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      general: "border-muted-foreground/30",
      ceremony: "border-primary",
      talk: "border-secondary",
      workshop: "border-accent",
      competition: "border-primary",
      cultural: "border-secondary",
      break: "border-muted-foreground/20",
    };
    return colors[type] || "border-primary";
  };

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Event Schedule
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Three days packed with competitions, workshops, and celebrations
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="day1" className="font-display">Day 1</TabsTrigger>
            <TabsTrigger value="day2" className="font-display">Day 2</TabsTrigger>
            <TabsTrigger value="day3" className="font-display">Day 3</TabsTrigger>
          </TabsList>

          {Object.entries(scheduleData).map(([day, events]) => (
            <TabsContent key={day} value={day} className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`glass-effect rounded-lg p-6 border-l-4 ${getEventTypeColor(event.type)} hover:glow-primary transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold mb-2">{event.event}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium capitalize w-fit">
                      {event.type}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
