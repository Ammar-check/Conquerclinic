import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import sermorelinData from "@/data/sermorelin/sermorelin.json"



export default function Sermorelin(){


    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={sermorelinData} />
            <BenefitsBar data={sermorelinData}/>
            <SplitContentSection data={sermorelinData} />
            <IncludesSection data={sermorelinData} />
            <QuoteSection data={sermorelinData.quotes} />
            <FaqSection data={sermorelinData.faqs} />
            <YouMightLike youMightLikeData={sermorelinData.mightLike} />
         </main>
        </>
    )
}