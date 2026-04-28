import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import thyroidCareData from "@/data/men/thyroid-care/thyroid-care.json";
import reviewsData from "@/data/reviews-data.json";

export default function ThyroidCare() {
    const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;


  return (
    <>
      <Navbar />

      <main>
        <ProductShowCaseCream data={thyroidCareData} />
        <BenefitsBar data={thyroidCareData} />
        <SplitContentSection data={thyroidCareData} />
        <IncludesSection data={thyroidCareData} />
        <FaqSection data={thyroidCareData.faqs} />
        <YouMightLike youMightLikeData={thyroidCareData.mightLike} />
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
