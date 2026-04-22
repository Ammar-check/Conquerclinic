import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import oxytocinData from "@/data/oxytocin-nasal-spray/oxytocin-nasal-spray.json"



export default function OxytocinNasalSpray(){


    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={oxytocinData} />
            <BenefitsBar data={oxytocinData}/>
            <SplitContentSection data={oxytocinData} />
            <IncludesSection data={oxytocinData} />
            <QuoteSection data={oxytocinData.quotes} />
            <FaqSection data={oxytocinData.faqs} />
            <YouMightLike youMightLikeData={oxytocinData.mightLike} />
         </main>
        </>
    )
}