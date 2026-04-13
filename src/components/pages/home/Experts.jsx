"use client";

import { useState, useEffect, useRef } from "react";
import expertsData from "@/data/experts.json";

export default function Experts() {
  const { title, testimonials } = expertsData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const totalSlides = testimonials.length;
  const currentTestimonial = testimonials[currentSlide];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, totalSlides]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="experts-section">
      <div className="container experts-container">
        <div className="experts-layout">
          <h2 className="experts-title">{title}</h2>

          <div className="experts-profile-wrap">
            <img
              src={currentTestimonial.profileImage}
              alt={currentTestimonial.name}
              className="experts-profile-image"
              loading="lazy"
            />
          </div>

          <div
            className="experts-content"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="experts-avatars-track" aria-label="Medical team members">
              {testimonials.map((testimonial, index) => (
                <span
                  key={testimonial.avatar}
                  className={`experts-avatar-wrap experts-avatar-wrap--${index} ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setCurrentSlide(index);
                    }
                  }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="experts-avatar"
                    loading="lazy"
                  />
                  <span
                    className="experts-avatar-white"
                    aria-hidden="true"
                    style={{
                      opacity: index === currentSlide ? 0 : 0.4,
                    }}
                  />
                </span>
              ))}
            </div>

            <h3 className="experts-name">{currentTestimonial.name}</h3>
            <p className="experts-role">{currentTestimonial.role}</p>
            <p className="experts-bio mb-3">{currentTestimonial.bio}</p>

            <div className="experts-slide-indicator">
              {currentSlide + 1} / {totalSlides}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
