import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import sexualPerformanceData from "@/data/sexual-performance/sexual-performance.json"
import reviewsData from "@/data/reviews-data.json";



export default function SexualPerformance(){
const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={sexualPerformanceData} />
            <BenefitsBar data={sexualPerformanceData}/>
            <SplitContentSection data={sexualPerformanceData} />
            <QuoteSection data={sexualPerformanceData.quotes} />
            <FaqSection data={sexualPerformanceData.faqs} />
            <YouMightLike youMightLikeData={sexualPerformanceData.mightLike} />
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