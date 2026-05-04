import Navbar from "@/components/layout/Navbar";
import FaqSection from "@/components/pages/sections/FaqSection";
import SplitContentSection from "@/components/pages/sections/SplitContentSection";
import advocatesData from "@/data/advocates/advocates.json"



export default function Advocates(){
    const {howItWorks} = advocatesData;

    return(
        <>
         <Navbar/>

         <main >
            <SplitContentSection data={advocatesData} />

<div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 items-center px-4 sm:px-6 lg:px-12 py-10">

  {/* Title */}
  <div className="text-white text-center font-normal text-xl sm:text-2xl lg:text-[30px]">
    {howItWorks.title}
  </div>

  {/* Cards */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
    {howItWorks.cards.map((card, index) => (
      
      <div
        key={index}
        className="flex flex-col items-center gap-3 sm:gap-4 w-[140px] sm:w-[180px] lg:w-[200px]"
      >

        {/* Circle */}
        <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full bg-black"></div>

        {/* Heading */}
        <span className="font-bold text-[10px] sm:text-xs text-center uppercase text-white">
          {card.heading}
        </span>

        {/* Subheading */}
        <p className="font-normal text-sm sm:text-base lg:text-[18px] text-center text-white">
          {card.subHeading}
        </p>

      </div>

    ))}
  </div>

</div>
                    <FaqSection data={advocatesData.faqs} />
         </main>
        </>
    )
}