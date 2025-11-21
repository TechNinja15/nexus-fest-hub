import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SeatSelectionPage = () => {
  const { toast } = useToast();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [seatCount, setSeatCount] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const sections = [
    { id: "vip-left", name: "VIP Left", capacity: 100, available: 45, price: 2999 },
    { id: "vip-right", name: "VIP Right", capacity: 250, available: 180, price: 2999 },
    { id: "general", name: "General", capacity: 750, available: 520, price: 1299 },
  ];

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    setShowBookingForm(true);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingForm(false);
    toast({
      title: "Booking Confirmed!",
      description: `${seatCount} seat(s) reserved. Redirecting to payment...`,
    });
  };

  const selectedSectionData = sections.find(s => s.id === selectedSection);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">
              Select Your Seats
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your preferred section and book your seats for INNOFEST 2025
            </p>
          </div>

          {/* Venue Layout */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-6">
              {/* Stage */}
              <div className="flex justify-center mb-8">
                <div className="bg-foreground text-background px-12 py-6 rounded-lg font-bold text-xl">
                  STAGE
                </div>
              </div>

              {/* VIP Sections */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button
                  onClick={() => handleSectionClick("vip-left")}
                  className="glass-effect rounded-3xl p-8 hover:glow-primary transition-all cursor-pointer hover:scale-105 border-2 border-border hover:border-primary"
                >
                  <div className="text-2xl font-bold mb-2">{sections[0].available}</div>
                  <div className="text-sm text-muted-foreground">Seats Available</div>
                  <div className="text-xs text-primary mt-2">₹{sections[0].price}</div>
                </button>

                <div className="flex items-center justify-center">
                  <div className="w-full h-32 glass-effect rounded-lg"></div>
                </div>

                <button
                  onClick={() => handleSectionClick("vip-right")}
                  className="glass-effect rounded-3xl p-8 hover:glow-primary transition-all cursor-pointer hover:scale-105 border-2 border-primary"
                >
                  <div className="text-2xl font-bold mb-2">{sections[1].available}</div>
                  <div className="text-sm text-muted-foreground">Seats Available</div>
                  <div className="text-xs text-primary mt-2">₹{sections[1].price}</div>
                </button>
              </div>

              {/* General Section */}
              <button
                onClick={() => handleSectionClick("general")}
                className="w-full glass-effect rounded-3xl p-12 hover:glow-primary transition-all cursor-pointer hover:scale-105 border-2 border-border hover:border-primary"
              >
                <div className="text-3xl font-bold mb-2">{sections[2].available}</div>
                <div className="text-sm text-muted-foreground">Seats Available</div>
                <div className="text-xs text-primary mt-2">₹{sections[2].price}</div>
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border-2 border-primary bg-primary/20"></div>
              <span className="text-sm">VIP Section</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border-2 border-border bg-background"></div>
              <span className="text-sm">General Section</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">Complete Your Booking</DialogTitle>
            <DialogDescription>
              {selectedSectionData && (
                <span>
                  {selectedSectionData.name} Section - ₹{selectedSectionData.price} per seat
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleBooking} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="seats">Number of Seats</Label>
              <Input
                id="seats"
                type="number"
                min="1"
                max={selectedSectionData?.available || 10}
                value={seatCount}
                onChange={(e) => setSeatCount(Number(e.target.value))}
                required
              />
              <p className="text-xs text-muted-foreground">
                {selectedSectionData?.available} seats available
              </p>
            </div>

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

            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg">Total Amount:</span>
                <span className="text-2xl font-bold gradient-text">
                  ₹{selectedSectionData ? selectedSectionData.price * seatCount : 0}
                </span>
              </div>
              <Button type="submit" className="w-full glow-primary" size="lg">
                Proceed to Payment
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default SeatSelectionPage;
