import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Calendar, Users, CreditCard } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TicketsPage = () => {
  const { toast } = useToast();
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const ticketTypes = [
    {
      id: "early-bird",
      name: "Early Bird Pass",
      price: "₹499",
      features: ["Access to all tech events", "2 Workshop credits", "Event merchandise", "Digital certificate"],
      available: true,
    },
    {
      id: "regular",
      name: "Regular Pass",
      price: "₹799",
      features: ["Access to all tech events", "3 Workshop credits", "Event merchandise", "Digital certificate", "Lunch included"],
      available: true,
    },
    {
      id: "premium",
      name: "Premium Pass",
      price: "₹1499",
      features: ["Access to all events", "Unlimited workshops", "Premium merchandise kit", "VIP seating at speaker sessions", "All meals included", "Networking dinner access"],
      available: true,
    },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "Your ticket has been booked successfully. Check your email for details.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">
              Book Your Tickets
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your pass and be part of India's premier tech festival
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ticketTypes.map((ticket) => (
              <Card 
                key={ticket.id}
                className={`hover:glow-primary transition-all cursor-pointer ${
                  selectedTicket === ticket.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Ticket className="text-primary" size={32} />
                    <span className="text-3xl font-bold gradient-text">{ticket.price}</span>
                  </div>
                  <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                  <CardDescription>Perfect for tech enthusiasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 glow-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTicket(ticket.id);
                    }}
                  >
                    Select Pass
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedTicket && (
            <Card className="max-w-2xl mx-auto glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="text-primary" />
                  Complete Your Booking
                </CardTitle>
                <CardDescription>Fill in your details to book your ticket</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="college">College/Organization</Label>
                    <Input id="college" required placeholder="Your institution name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tickets">Number of Tickets</Label>
                    <Input id="tickets" type="number" min="1" max="10" defaultValue="1" />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg">Selected Pass:</span>
                      <span className="text-lg font-bold gradient-text">
                        {ticketTypes.find(t => t.id === selectedTicket)?.name}
                      </span>
                    </div>
                    <Button type="submit" className="w-full glow-primary" size="lg">
                      Proceed to Payment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <Calendar className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2">3-Day Pass</h3>
              <p className="text-sm text-muted-foreground">Full access to all 3 days of INNOFEST 2025</p>
            </div>
            <div className="text-center">
              <Users className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2">Group Discounts</h3>
              <p className="text-sm text-muted-foreground">Book 5+ tickets and get 15% off</p>
            </div>
            <div className="text-center">
              <Ticket className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2">Instant Confirmation</h3>
              <p className="text-sm text-muted-foreground">Get your e-tickets immediately via email</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TicketsPage;
