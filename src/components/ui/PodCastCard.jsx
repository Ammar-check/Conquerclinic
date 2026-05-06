import Image from "next/image";
import React from "react";

const PodCastCard = ({ data }) => {
  return (
    <div className="w-full bg-white rounded-[10px] overflow-hidden flex flex-col ">

      {/* Image */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={data.image}
          fill
          className="object-cover"
          alt={data.title}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 sm:gap-5 lg:gap-6">

        {/* Title */}
        <span className="text-lg sm:text-xl lg:text-2xl font-normal text-[#363636]">
          {data.title}
        </span>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
          {data.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 sm:gap-5">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-sm sm:text-base hover:underline " style={{color:'#333333'}}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PodCastCard;