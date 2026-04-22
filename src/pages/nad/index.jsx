import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import nadData from "@/data/nad/nad.json"



export default function NAD(){


    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={nadData} />
            <BenefitsBar data={nadData}/>
            <SplitContentSection data={nadData} />
            <IncludesSection data={nadData} />
            <QuoteSection data={nadData.quotes} />
            <FaqSection data={nadData.faqs} />
            <YouMightLike youMightLikeData={nadData.mightLike} />
         </main>
        </>
    )
}