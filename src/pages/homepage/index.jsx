import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/pages/home/Hero";
import Faq from "@/components/pages/home/Faq";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Faq />
      </main>
    </>
  );
}
