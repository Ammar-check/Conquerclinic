"use client";

import React from "react";

const CreamSubscriptions = ({ data }) => {
  return (
    <div className="cream-subscriptions">
      {data.card.subscriptions.map((item) => (
        <div key={item.id} className="cream-sub">

          {/* Title Row */}
          <h1 className="cream-sub__title">
            <div className="left">
              <span className={`circle ${item.circleColor}`}></span>
              <span className="text">{item.title}</span>
            </div>

            <span className="price">{item.price}</span>
          </h1>

          {/* Description */}
          <p className="cream-sub__desc">
            <span>{item.description}</span>
            {item.highlight && (
          <span className="highlight">{item.highlight}</span>
        )}
          </p>

          {/* CTA Button */}
          <button className="cream-sub__btn">
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
};

export default CreamSubscriptions;