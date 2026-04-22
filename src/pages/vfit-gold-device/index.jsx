import Navbar from "@/components/layout/Navbar";
import YouMightLike from "@/components/pages/glp-1/YouMightLike";
import BenefitsBar from "@/components/pages/sections/BenefitsBar";
import FaqSection from "@/components/pages/sections/FaqSection";
import ProductShowCaseCream from "@/components/pages/sections/ProductShowCaseCream";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import vfitData from "@/data/vfit-gold-device/vfit-gold-device.json"



export default function VFitGoldDevice(){


    return(
        <>
         <Navbar/>

         <main>
            <ProductShowCaseCream data={vfitData} />
            <BenefitsBar data={vfitData}/>
            <SplitContentSection data={vfitData} />
            <FaqSection data={vfitData.faqs} />
            <YouMightLike youMightLikeData={vfitData.mightLike} />
         </main>
        </>
    )
}