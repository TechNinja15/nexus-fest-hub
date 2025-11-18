import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import SpeakersPage from "./pages/SpeakersPage";
import SchedulePage from "./pages/SchedulePage";
import WorkshopsPage from "./pages/WorkshopsPage";
import SponsorsPage from "./pages/SponsorsPage";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import TicketsPage from "./pages/TicketsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
