import LongevityCard from '@/components/ui/LongvityCard'
import React from 'react'

const RightTest = ({ data }) => {
  const { rightTest } = data;

  return (
    <section className="bg-[#333333] py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-white text-center">
        {rightTest.title}
      </h1>

      {/* Subheading */}
      <p className="text-sm sm:text-base md:text-lg lg:text-[22px] text-white text-center mt-3 max-w-3xl mx-auto">
        {rightTest.subTitle}
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-12">
        {rightTest.longevityCards.map((card) => (
          <LongevityCard key={card.id} data={card} />
        ))}
      </div>

    </section>
  );
};

export default RightTest;