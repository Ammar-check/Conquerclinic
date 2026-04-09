"use client";

import React from "react";
import Button from "@/components/ui/Button";
import heroData from "@/data/hero.json";

const Hero = () => {
    const { backgroundImage, heading, subHeading, buttons } = heroData;
    const normalizedBackgroundImage =
        backgroundImage?.startsWith("http") || backgroundImage?.startsWith("/")
            ? backgroundImage
            : `/${backgroundImage.replace(/^(\.\.\/)+/, "")}`;

    return (
        <section className="hero-section position-relative overflow-hidden">
            <div
                className="hero-bg"
                style={{ backgroundImage: `url(${normalizedBackgroundImage})` }}
                aria-hidden="true"
            />
            <div className="hero-overlay" aria-hidden="true" />

            <div className="hero-content container text-start">
                <h1 className="hero-heading">{heading}</h1>
                <p className="hero-subheading">{subHeading}</p>

                <div className="hero-buttons d-flex gap-3 mt-4">
                    {buttons.map((btn, idx) => (
                        <Button
                            key={idx}
                            label={btn.label}
                            variant={btn.variant}
                            className="custom-hero-btn"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;