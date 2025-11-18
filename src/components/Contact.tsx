import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@innofest.edu",
      href: "mailto:info@innofest.edu",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "University Campus, Tech Block, Mumbai, India",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-lg p-8 animate-fade-in">
            <h3 className="font-display text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[150px] bg-background/50"
                />
              </div>
              <Button type="submit" className="w-full glow-primary">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="glass-effect rounded-lg p-6 flex items-start gap-4 hover:glow-primary transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-lg p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-display font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:glow-primary transition-all"
                  >
                    <social.icon className="text-primary" size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-effect rounded-lg p-6 h-64 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <MapPin className="text-primary mx-auto mb-2" size={32} />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground/70">Campus Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
