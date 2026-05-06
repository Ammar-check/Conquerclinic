import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import essentialsCreamData from "@/data/essentials-skin-cream/essentials-skin-cream.json"
import reviewsData from "@/data/reviews-data.json";



export default function GHKcuCream(){
const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={essentialsCreamData} />
            <BenefitsBar data={essentialsCreamData}/>
            <SplitContentSection data={essentialsCreamData} />
            <QuoteSection data={essentialsCreamData.quotes} />
            <FaqSection data={essentialsCreamData.faqs} />
            <YouMightLike youMightLikeData={essentialsCreamData.mightLike} />
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