import React from "react";
import podcastData from "@/data/podcasts/podcasts.json";
import PodCastCard from "@/components/ui/PodCastCard";

const PodCasts = () => {
  const { title, subTitle, btns, cards } = podcastData;

  const bgMap = {
    black: "bg-black",
    white: "bg-white",
  };

  const textMap = {
    black: "text-black",
    white: "text-white",
  };

  return (
    <>
    <div className="bg-[#333333] px-4 sm:px-6 lg:px-16 py-18">
      
      <div className="flex flex-col gap-6">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[60px] text-white uppercase font-normal leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-[16px] font-normal text-white max-w-2xl">
          {subTitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {btns.map((btn) => (
            <button
              key={btn.id}
              className={`${bgMap[btn.bgVarient]} ${textMap[btn.textVarient]} px-4 py-2 common__btn`}
            >
              {btn.content}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cards.map((card) => (
            <PodCastCard key={card.id} data={card} />
          ))}
        </div>

      </div>
    </div>
    </>
  );
};

export default PodCasts;