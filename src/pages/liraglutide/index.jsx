import Navbar from "@/components/layout/Navbar";
import ProductShowcaseSection from "@/components/pages/glp-1/ProductShowcaseSection";
import Faq from "@/components/pages/home/Faq";
import productShowcaseData from "@/data/liraglutide/productShowcaseData.json";
import benefitsBarData from "@/data/liraglutide/benefitsBarData.json";
import BenefitsBar from "@/components/pages/glp-1/BenefitsBar";
import TransparentPricing from "@/components/pages/glp-1/TransparentPricing";
import transparentPricingData from "@/data/liraglutide/transparentPricing.json";
import whatsIncludedData from "@/data/liraglutide/whatsIncluded.json";
import icons from "@/components/pages/liraglutide/icons";
import WhatsIncluded from "@/components/pages/thyroid-care/WhatsIncluded";
import youMightLikeData from "@/data/glp-1/youMightLike.json";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import testimonialData from "@/data/weight-loss/testimonial.json";
import Testimonial from "@/components/pages/weight-loss/Testimonial";

export default function LiraglutidePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-body-custom">
            <ProductShowcaseSection productShowcaseData={productShowcaseData} />
            <BenefitsBar benefitsBarData={benefitsBarData}/>
            <div className={"section-block"}>
                <TransparentPricing transparentPricingData={transparentPricingData}/>
            </div>
            <WhatsIncluded whatsIncludedData={whatsIncludedData} icons={icons} />
            <div className={"section-block"}>
                <Testimonial testimonialData={testimonialData} />
            </div>
            <Faq />
            <YouMightLike youMightLikeData={youMightLikeData} />
        </div>
      </main>
    </>
  );
}
