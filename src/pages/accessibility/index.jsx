import React from 'react'
import AccessibilityData from "@/data/accessibility/accessibility.json"
import Navbar from '@/components/layout/Navbar';

const Accessibility = () => {
  const { hero } = AccessibilityData;

  return (
    <>
      <Navbar/>
    <div className='flex flex-col items-center bg-[#333333]'>
      <div className=' px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20 '>
        
        {/* Heading */}
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-8 max-w-4xl">
          {hero.paragraph.para}
        </span>

        {/* Points */}
        <div className="space-y-6 max-w-3xl mt-3">
          {hero.mainPoints.map((p, index) => (
            <div key={index} className='text-white'>

              <p className='font-normal text-sm sm:text-base leading-relaxed'>
                {p.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  )
}

export default Accessibility