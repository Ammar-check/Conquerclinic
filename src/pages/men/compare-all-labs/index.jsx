import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BiomarkerTable from "@/components/pages/sections/BioMarkerTable";
import FaqSection from "@/components/pages/sections/FaqSection";

import Ingredients from "@/components/pages/sections/Ingredients";
import PanelSection from "@/components/pages/sections/PanelSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import compareAllLabsData from "@/data/men/compare-all-labs/compare-all-labs.json"
import reviewsData from "@/data/reviews-data.json";



export default function CompareAllLabs(){
const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    return(
        <>
         <Navbar/>

         <main>

            {/* <PanelCard data={compareAllLabsData} /> */}
            <PanelSection data={compareAllLabsData}/>
            <BiomarkerTable data={compareAllLabsData} />
            {/* <IncludesSection data={compareAllLabsData} />    */}
            <Ingredients data={compareAllLabsData}/>
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