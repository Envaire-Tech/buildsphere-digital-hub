import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicePillars from "@/components/ServicePillars";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustBar />
      <ServicePillars />
      <FeaturedProjects />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
