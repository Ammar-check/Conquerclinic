import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import ClinicalStats from "@/components/pages/sections/ClinicalStats";
import FaqSection from "@/components/pages/sections/FaqSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import ReviewsSection from "@/components/pages/sections/ReviewsSection";
import enclomipheneData from "@/data/men/enclomiphene/enclomiphene.json";
import reviewsData from "@/data/reviews-data.json";

export default function Enclomiphene() {
    const { overallRating, maxRating, totalReviews, platform, reviews } =
    reviewsData.reviewsSection;

    const { heading, stats, disclaimer } = enclomipheneData.clinicalStats;


  return (
    <>
      <Navbar />

      <main>
        <ProductShowCaseCream data={enclomipheneData} />
        <BenefitsBar data={enclomipheneData} />
         <QuoteSection data={enclomipheneData.quotes2} testoCard={enclomipheneData.testosteroneSection} />
         <ClinicalStats
      heading={heading}
      stats={stats}
      disclaimer={disclaimer}
      containerClass="container"
    />
        <QuoteSection data={enclomipheneData.quotes}/>
        <FaqSection data={enclomipheneData.faqs} />
        <YouMightLike youMightLikeData={enclomipheneData.mightLike} />
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
