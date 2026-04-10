"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductStories({ stories }) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeItems = [...stories.items, ...stories.items];

  return (
    <section className="product-stories-section py-5">
      <div className="container mb-4 product-stories-head">
        <h2 className="product-stories-title">{stories.title}</h2>
        <div className="product-stories-cta-row">
          <Link href={stories.cta?.href || "/stories"} className="product-stories-cta">
            {stories.cta?.label || "Explore"}
          </Link>
        </div>
      </div>

      <div
        className="product-marquee-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`product-marquee-track ${isPaused ? "paused" : ""}`}>
          {marqueeItems.map((story, index) => (
            <article key={`${story.id}-${index}`} className="story-card">
              <img src={story.image} alt={story.title} className="story-image" />
              <div className="story-content">
                <p className="story-date">{story.date}</p>
                <div className="story-footer-row">
                  <h4 className="story-title">{story.title}</h4>
                  <Link href={story.href || "/stories"} className="story-arrow">
                    →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
