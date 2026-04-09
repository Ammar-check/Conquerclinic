import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/pages/home/Hero";
import CareTabs from "@/components/pages/home/CareTabs";
import Faq from "@/components/pages/home/Faq";
import ResultsCarousel from "@/components/pages/home/ResultsCarousel";
import Experts from "@/components/pages/home/Experts";
import Benefits from "@/components/pages/home/Benefits";
import Branding from "@/components/pages/home/Branding";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CareTabs />
        <ResultsCarousel />
        <Experts />
        <Benefits />
        <Branding />
        <Faq />
      </main>
    </>
  );
}
