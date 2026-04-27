import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import PanelSection from "@/components/pages/sections/PanelSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import PanelCard from "@/components/ui/PanelCard";
import compareAllLabsData from "@/data/compare-all-labs/compare-all-labs.json"
import reviewsData from "@/data/reviews-data.json";



export default function CompareAllLabs(){
const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    return(
        <>
         <Navbar/>

         <main>
            {/* <IncludesSection data={compareAllLabsData} /> */}   
            {/* <PanelCard data={compareAllLabsData} /> */}
            <PanelSection data={compareAllLabsData}/>
            <FaqSection data={compareAllLabsData.faqs} />
            <YouMightLike youMightLikeData={compareAllLabsData.mightLike} />
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