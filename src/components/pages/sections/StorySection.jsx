import StoryCard from "@/components/ui/StoryCard";
import React from "react";

const StorySection = ({ data }) => {
  const { title, btn, cards } = data;

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-16 py-18">

      {/* Title */}
      <h1 className="text-white text-xl sm:text-2xl lg:text-[28px] font-normal">
        {title}
      </h1>

      {/* Button */}
      <button className="common__btn bg-white text-black px-4 py-2 w-[200px]">
        {btn}
      </button>

      {/* Scroll Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {cards.map((card, index) => (
          <StoryCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default StorySection;