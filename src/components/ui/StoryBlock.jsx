import Image from "next/image";
import React from "react";

const StoryBlock = ({ data }) => {
  const { num, title, subTitle, storySec,image } = data;

  return (
   <div className="bg-[#DCDCDC] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[100px]">
    <div className="bg-[#DCDCDC] flex flex-col lg:flex-row gap-6 lg:gap-24 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
      
      {/* Number */}
      <div className="text-3xl sm:text-4xl lg:text-[58px] font-medium text-[#363636] uppercase">
        {num}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-1 ">
        
        {/* Title */}
        <span className="text-3xl sm:text-4xl lg:text-[58px] font-medium text-[#363636] uppercase">
          {title}
        </span>

        {/* Subtitle */}
        <div className="mt-24 text-lg sm:text-xl lg:text-3xl font-medium text-[#363636]">
          {subTitle}
        </div>

        {/* Paragraph */}
        <p className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-[#555] leading-relaxed">
          {storySec.map((s, index) => (
            <span key={index}>{s}</span>
          ))}
        </p>
      </div>
    </div>
      {data?.image && (
  <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
    <Image
      src={image}
      alt="section image"
      fill
      className="object-cover"
    />
  </div>
)}

      <div className="h-[1px] bg-[#BBBBBB] w-full"></div>
    </div>
  );
};

export default StoryBlock;