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
import productShowcaseData from "@/data/glp-1/productShowcaseData.json";
import benefitsBarData from "@/data/glp-1/benefitsBarData.json";
import transparentPricingData from "@/data/glp-1/transparentPricing.json";
import youMightLikeData from "@/data/glp-1/youMightLike.json";
import menopauseStatData from "@/data/glp-1/menopauseStats.json";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-body-custom">
            <ProductShowcaseSection productShowcaseData={productShowcaseData} />
            <BenefitsBar benefitsBarData={benefitsBarData}/>
            <Pricing />
            <HRTStats />
            <TransparentPricing transparentPricingData={transparentPricingData}/>
            <WhatIsPerimenopause />
            <MenopauseStats menopauseStatData={menopauseStatData} />
            <Faq />
            <YouMightLike youMightLikeData={youMightLikeData} />
        </div>
      </main>
    </>
  );
}
