import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import ComparisonTable from "@/components/pages/sections/ComparisonTable";
import FaqSection from "@/components/pages/sections/FaqSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import homeBloodData from "@/data/men/home-blood-test/home-blood-test.json";
import reviewsData from "@/data/reviews-data.json";
import comparisonData from "@/data/comparison-data.json";
import RightTest from "@/components/pages/sections/RightTest";

export default function HomeBloodTest() {
  const { brandName, competitors, features } = comparisonData.comparisonTable;
  const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

  return (
    <>
      <Navbar />

      <main>
        <ProductShowCaseCream data={homeBloodData} />
        <BenefitsBar data={homeBloodData} />
        <RightTest data={homeBloodData} />
        <QuoteSection data={homeBloodData.quotes} />
        <ComparisonTable
          brandName={brandName}
          competitors={competitors}
          features={features}
          containerClass="container"
        />
        <FaqSection data={homeBloodData.faqs} />
        <YouMightLike youMightLikeData={homeBloodData.mightLike} />
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
