import Image from "next/image";
import React from "react";
import { ArrowRight } from "react-bootstrap-icons";

const StoryCard = ({ card }) => {
  return (
    <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] overflow-hidden flex flex-col">

      {/* Image */}
      <div className="relative w-full aspect-[4/5]">
        <Image
          src={card.image}
          fill
          alt="card image"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col gap-3">

        {/* Date */}
        <span className="text-white text-xs sm:text-sm">
          {card.date}
        </span>

        {/* Description + Icon */}
        <div className="flex items-start justify-between gap-2 text-white text-sm sm:text-base">
          <p className="line-clamp-3">
            {card.description}
          </p>

          <ArrowRight className="shrink-0" size={20} />
        </div>

      </div>
    </div>
  );
};

export default StoryCard;