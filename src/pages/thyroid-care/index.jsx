import Navbar from "@/components/layout/Navbar";
import ProductShowcaseSection from "@/components/pages/glp-1/ProductShowcaseSection";
import Faq from "@/components/pages/home/Faq";
import productShowcaseData from "@/data/thyroid-care/productShowcaseData.json";
import benefitsBarData from "@/data/thyroid-care/benefitsBarData.json";
import BenefitsBar from "@/components/pages/glp-1/BenefitsBar";
import transparentPricingData from "@/data/thyroid-care/transparentPricing.json";
import TransparentPricing from "@/components/pages/glp-1/TransparentPricing";
import whatsIncludedData from "@/data/thyroid-care/whatsIncluded.json";
import WhatsIncluded from "@/components/pages/thyroid-care/WhatsIncluded";
import icons from "@/components/pages/thyroid-care/icons";
import youMightLikeData from "@/data/glp-1/youMightLike.json";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";

export default function ThyroidCarePage() {
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
            <Faq />
            <YouMightLike youMightLikeData={youMightLikeData} />
        </div>
      </main>
    </>
  );
}
