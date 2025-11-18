import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

const Team = () => {
  const teamSections = [
    {
      title: "Faculty Coordinators",
      members: [
        { name: "Dr. Suresh Patel", role: "Chief Coordinator", initials: "SP" },
        { name: "Prof. Kavita Rao", role: "Technical Head", initials: "KR" },
      ],
    },
    {
      title: "Core Team",
      members: [
        { name: "Aditya Sharma", role: "Festival Coordinator", initials: "AS" },
        { name: "Riya Gupta", role: "Events Head", initials: "RG" },
        { name: "Karthik Menon", role: "Technical Lead", initials: "KM" },
        { name: "Sneha Reddy", role: "Marketing Head", initials: "SR" },
      ],
    },
    {
      title: "Student Coordinators",
      members: [
        { name: "Rahul Kumar", role: "Competitions Coordinator", initials: "RK" },
        { name: "Priyanka Singh", role: "Workshops Coordinator", initials: "PS" },
        { name: "Aryan Verma", role: "Sponsorship Lead", initials: "AV" },
        { name: "Ananya Joshi", role: "Public Relations", initials: "AJ" },
        { name: "Siddharth Nair", role: "Logistics Head", initials: "SN" },
        { name: "Meera Kapoor", role: "Design & Media", initials: "MK" },
        { name: "Varun Khanna", role: "Hospitality Lead", initials: "VK" },
        { name: "Ishita Mehta", role: "Registration Head", initials: "IM" },
      ],
    },
  ];

  return (
    <section id="team" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Meet the dedicated individuals making INNOFEST 2025 possible
          </p>
        </div>

        <div className="space-y-16">
          {teamSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-fade-in" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
              <h3 className="font-display text-3xl font-bold text-center mb-8 text-primary">
                {section.title}
              </h3>
              <div
                className={`grid gap-8 ${
                  section.members.length <= 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {section.members.map((member, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-lg p-6 text-center hover:glow-primary transition-all duration-300 group"
                  >
                    <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-display text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@innofest.edu`}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
                    >
                      <Mail size={14} />
                      <span>Contact</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
