import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import CategoriesSection from "@/components/CategoriesSection";
import BrandsSection from "@/components/BrandsSection";
import HowToBuySection from "@/components/HowToBuySection";
import QuoteForm from "@/components/QuoteForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#020c02]">
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <CategoriesSection />
      <BrandsSection />
      <HowToBuySection />
      <QuoteForm />
      <ContactSection />
      <Footer />
    </main>
  );
}
