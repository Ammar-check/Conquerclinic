import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import screamCreamData from "@/data/scream-cream/scream-cream.json"



export default function ScreamCream(){


    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={screamCreamData} />
            <BenefitsBar data={screamCreamData}/>
            <SplitContentSection data={screamCreamData} />
            <IncludesSection data={screamCreamData} />
            <QuoteSection data={screamCreamData.quotes} />
            <FaqSection data={screamCreamData.faqs} />
            <YouMightLike youMightLikeData={screamCreamData.mightLike} />
         </main>
        </>
    )
}