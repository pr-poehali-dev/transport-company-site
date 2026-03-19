import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesAboutRoutes from "@/components/ServicesAboutRoutes";
import ContactsFooter from "@/components/ContactsFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesAboutRoutes />
      <ContactsFooter />
    </div>
  );
}
