import Navbar from "@/components/layout/Navbar";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import IncludesSection from "@/components/pages/sections/IncludesSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
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
         </main>
        </>
    )
}