import Navbar from "@/components/layout/Navbar";
import ProductShowcaseSection from "@/components/pages/glp-1/ProductShowcaseSection";
import Faq from "@/components/pages/home/Faq";
import productShowcaseData from "@/data/weight-loss/productShowcaseData.json";
import benefitsBarData from "@/data/weight-loss/benefitsBarData.json";
import BenefitsBar from "@/components/pages/glp-1/BenefitsBar";
import transparentPricingData from "@/data/weight-loss/transparentPricing.json";
import TransparentPricing from "@/components/pages/glp-1/TransparentPricing";
import youMightLikeData from "@/data/glp-1/youMightLike.json";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import menopauseStatData from "@/data/weight-loss/statsData.json";
import MenopauseStats from "@/components/pages/glp-1/MenopauseStats";
import Testimonial from "@/components/pages/weight-loss/Testimonial";
import testimonialData from "@/data/weight-loss/testimonial.json";

export default function WeightLossPage() {
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
            <section className="weightloss-stats-wrapper">
                <MenopauseStats menopauseStatData={menopauseStatData} />

                <div className="weightloss-stats-footnote">
                    <p>
                        *In a 72-week study of adults without diabetes, average weight loss was 15.0% (34 lbs) for 5mg, 19.5% (44 lbs) for 10mg, 20.9% (48 lbs) for 15 mg, and 3.1 (7 lbs) for placebo. Average starting weights were 226.8 lbs
                        for 5 mg, 233.3 lbs for 10 mg, 232.8 lbs for 15 mg, and 231.0 lbs for placebo. In a 72-week study of adults with diabetes, average weight loss was 12.8% for 10 mg, 14.7% (33 lbs) for 15 mg, and 3.2% (7 lbs) for placebo.
                        Average starting weights were 222.4 lbs for 10 mg, 219.6 lbs for 15 mg, and 224.2 lbs for placebo. Individual results may vary.
                    </p>
                </div>
            </section>
            <Testimonial testimonialData={testimonialData} />
            <Faq />
            <YouMightLike youMightLikeData={youMightLikeData} />
        </div>
      </main>
    </>
  );
}
