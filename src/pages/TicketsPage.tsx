import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TicketsPage = () => {
  const navigate = useNavigate();

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
              Be part of India's premier tech festival - INNOFEST 2025
            </p>
          </div>

          <Card className="max-w-2xl mx-auto glass-effect mb-12">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Ticket className="text-primary" size={64} />
              </div>
              <CardTitle className="text-3xl gradient-text mb-2">Open Concert Pass</CardTitle>
              <CardDescription className="text-lg">
                Select your preferred seating section and book your seats
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-1">VIP</div>
                  <div className="text-sm text-muted-foreground">Premium Seating</div>
                  <div className="text-lg font-bold mt-2">₹2,999</div>
                </div>
                <div className="p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-1">General</div>
                  <div className="text-sm text-muted-foreground">Standard Seating</div>
                  <div className="text-lg font-bold mt-2">₹1,299</div>
                </div>
                <div className="p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-1">1100+</div>
                  <div className="text-sm text-muted-foreground">Total Seats</div>
                </div>
              </div>

              <Button 
                className="w-full glow-primary" 
                size="lg"
                onClick={() => navigate('/seat-selection')}
              >
                Select Your Seats
              </Button>
            </CardContent>
          </Card>

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
