import Navbar from "@/components/layout/Navbar";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import giftCardData from "@/data/gift-card/gift-card.json"
import reviewsData from "@/data/reviews-data.json";



export default function Creatine(){
const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={giftCardData} />
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