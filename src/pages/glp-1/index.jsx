import Navbar from "@/components/layout/Navbar";
import ProductShowcaseSection from "@/components/pages/glp-1/ProductShowcaseSection";
import BenefitsBar from "@/components/pages/glp-1/BenefitsBar";
import Pricing from "@/components/pages/glp-1/Pricing";
import HRTStats from "@/components/pages/glp-1/HRTStats";
import TransparentPricing from "@/components/pages/glp-1/TransparentPricing";
import WhatIsPerimenopause from "@/components/pages/glp-1/WhatIsPerimenopause";
import MenopauseStats from "@/components/pages/glp-1/MenopauseStats";
import Faq from "@/components/pages/home/Faq";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-body-custom">
            <ProductShowcaseSection />
            <BenefitsBar />
            <Pricing />
            <HRTStats />
            <TransparentPricing />
            <WhatIsPerimenopause />
            <MenopauseStats />
            <Faq />
            <YouMightLike />
        </div>
      </main>
    </>
  );
}
