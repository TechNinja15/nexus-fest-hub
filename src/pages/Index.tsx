import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Workshops from "@/components/Workshops";
import Sponsors from "@/components/Sponsors";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Speakers />
      <Schedule />
      <Workshops />
      <Sponsors />
      <Gallery />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
