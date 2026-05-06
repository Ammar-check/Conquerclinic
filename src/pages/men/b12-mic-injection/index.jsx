import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import QuoteSection from "@/components/pages/sections/QuoteSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import micInjectionData from "@/data/men/b12-mic-injection/b12-mic-injection.json"



export default function MicInjection(){


    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={micInjectionData} />
            <BenefitsBar data={micInjectionData}/>
            <SplitContentSection data={micInjectionData} />
            <IncludesSection data={micInjectionData} />
            <QuoteSection data={micInjectionData.quotes} />
            <FaqSection data={micInjectionData.faqs} />
            <YouMightLike youMightLikeData={micInjectionData.mightLike} />
         </main>
        </>
    )
}