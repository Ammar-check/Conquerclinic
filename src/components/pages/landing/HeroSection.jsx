import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroData from "@/data/heroData.json";

/**
 * HeroSection
 * ─────────────────────────────────────────────
 * Section 1: Full-viewport hero with background
 * image, badge strip, headline, description, and
 * CTA button.
 *
 * Data source: src/data/heroData.json
 */
const HeroSection = () => {
    const { badge, subBadge, headline, description, cta } = heroData;

    return (
        <section className="hero-section">
            {/* Background image layer */}
            <div className="hero-bg" aria-hidden="true" />

            <Container className="hero-container">
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">

                        {/* ── Badge strip ── */}
                        <div className="hero-badges">
                            <div className="hero-badge-pill">
                                {badge.dot && <span className="hero-badge-dot" aria-hidden="true" />}
                                <span className="hero-badge-text">{badge.text}</span>
                            </div>
                            <p className="hero-sub-badge">{subBadge}</p>
                        </div>

                        {/* ── Headline ── */}
                        <div className="hero-headline">
                            <h1 className="hero-headline-white">{headline.line1}</h1>
                            <h1 className="hero-headline-gold">{headline.line2}</h1>
                        </div>

                        {/* ── Description ── */}
                        <p className="hero-description">{description}</p>

                        {/* ── CTA ── */}
                        <a href={cta.href} className="hero-cta">
                            {cta.label}
                            <svg
                                className="hero-cta-arrow"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 8H13M13 8L9 4M13 8L9 12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;