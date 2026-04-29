import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import testosteroneData from "@/data/men/testosterone-replacement/testosterone-replacement.json";
import reviewsData from "@/data/reviews-data.json";

export default function Testosterone() {
    const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;


  return (
    <>
      <Navbar />

      <main>
        <ProductShowCaseCream data={testosteroneData} />
        <QuoteSection data={testosteroneData.quotes2} testoCard={testosteroneData.testosteroneSection} />
        <BenefitsBar data={testosteroneData} />
        <QuoteSection data={testosteroneData.quotes}/>
        <FaqSection data={testosteroneData.faqs} />
        <YouMightLike youMightLikeData={testosteroneData.mightLike} />
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
  );
}
