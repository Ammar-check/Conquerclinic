import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import Ingredients from "@/components/pages/sections/Ingredients";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import advancePanelData from "@/data/men/advance-panel/advance-panel.json"
import reviewsData from "@/data/reviews-data.json";



export default function AdvancePanel(){
const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={advancePanelData} />
            <BenefitsBar data={advancePanelData}/>
            <Ingredients data={advancePanelData}/>
            <IncludesSection data={advancePanelData} />
            <QuoteSection data={advancePanelData.quotes} />
            <FaqSection data={advancePanelData.faqs} />
            <YouMightLike youMightLikeData={advancePanelData.mightLike} />
            <ReviewsSection
                      overallRating={overallRating}
                      maxRating={maxRating}
                      totalReviews={totalReviews}
                      platform={platform}
                      reviews={reviews}
                      reviewsPerPage={3}
                      containerClass="container"
                    />
         </main>
        </>
    )
}