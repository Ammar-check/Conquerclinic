"use client";

import { useEffect, useRef } from "react";
import FeatureCard from "@/components/resuabale/FeatureCard";
import resultsData from "@/data/results.json";

export default function ResultsCarousel() {
  const { titlePrefix, titleHighlight, description, cards } = resultsData;
  const carouselRef = useRef(null);
  const loopCards = [...cards, ...cards];

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel || cards.length <= 1) {
      return undefined;
    }

    let animationId;
    const speedPerFrame = 0.6;
    const resetPoint = carousel.scrollWidth / 2;

    const animate = () => {
      carousel.scrollLeft += speedPerFrame;

      if (carousel.scrollLeft >= resetPoint) {
        carousel.scrollLeft -= resetPoint;
      }

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationId);
  }, [cards.length]);

  return (
    <section className="results-section">
      <div className="container results-container">
        <h2 className="results-title">
          <span className="results-title-prefix">{titlePrefix} </span>
          <span className="results-title-highlight">{titleHighlight}</span>
        </h2>
        <p className="results-description">{description}</p>

        <div
          ref={carouselRef}
          className="results-carousel"
          role="list"
          aria-label="Featured services"
        >
          {loopCards.map((card, index) => (
            <div key={`${card.title}-${index}`} className="results-card-item" role="listitem">
              <FeatureCard title={card.title} buttonLabel={card.buttonLabel} image={card.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
