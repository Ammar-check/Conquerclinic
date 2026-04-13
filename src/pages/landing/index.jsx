import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/pages/landing/HeroSection";
import ChoosePathSection from "@/components/pages/landing/ChoosePathSection";
import OptimizationSection from "@/components/pages/landing/OptimizationSection";
import ChooseLevelSection from "@/components/pages/landing/ChooseLevelSection";
import MetabolicProtocol from "@/components/pages/landing/MetabolicProtocol";
import ReadyToOptimize from "@/components/pages/landing/ReadyToOptimize";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="landing-page">
            <HeroSection />
            <ChoosePathSection />
            <OptimizationSection />
            <ChooseLevelSection />
            <MetabolicProtocol />
            <ReadyToOptimize />
        </div>
      </main>
    </>
  );
}
