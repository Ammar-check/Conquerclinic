"use client";

import React, { useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import heroData from "@/data/hero.json";

const Hero = () => {
    const { backgroundImage, backgroundVideo, heading, subHeading, buttons } = heroData;
    const videoRef = useRef(null);

    const normalizedBackgroundImage =
        backgroundImage?.startsWith("http") || backgroundImage?.startsWith("/")
            ? backgroundImage
            : `/${backgroundImage.replace(/^(\.\.\/)+/, "")}`;
    const normalizedBackgroundVideo =
        backgroundVideo?.startsWith("http") || backgroundVideo?.startsWith("/")
            ? backgroundVideo
            : `/${backgroundVideo?.replace(/^(\.\.\/)+/, "") || ""}`;

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                console.log("Video autoplay was prevented");
            });
        }
    }, []);

    return (
        <section className="hero-section position-relative overflow-hidden">
            {backgroundVideo ? (
                <video
                    ref={videoRef}
                    className="hero-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                    preload="auto"
                    crossOrigin="anonymous"
                >
                    <source src={normalizedBackgroundVideo.replace(/\.MOV$/i, ".webm")} type="video/webm" />
                    <source src={normalizedBackgroundVideo.replace(/\.MOV$/i, ".mp4")} type="video/mp4" />
                    <source src={normalizedBackgroundVideo} type="video/quicktime" />
                    <img src={normalizedBackgroundImage} alt="Hero background" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </video>
            ) : (
                <div
                    className="hero-bg"
                    style={{ backgroundImage: `url(${normalizedBackgroundImage})` }}
                    aria-hidden="true"
                />
            )}
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