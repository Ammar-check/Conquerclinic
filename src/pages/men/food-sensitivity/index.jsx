import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import Ingredients from "@/components/pages/sections/Ingredients";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import foodData from "@/data/men/food-sensitivity/food-sensitivity.json"
import reviewsData from "@/data/reviews-data.json";



export default function FoodSensitivity(){
const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={foodData} />
            <BenefitsBar data={foodData}/>
            <Ingredients data={foodData}/>
            <IncludesSection data={foodData} />
            <QuoteSection data={foodData.quotes} />
            <FaqSection data={foodData.faqs} />
            <YouMightLike youMightLikeData={foodData.mightLike} />
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