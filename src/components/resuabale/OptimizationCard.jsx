import React from "react";

/**
 * OptimizationCard — reusable card for "What Are You Optimizing?" section.
 * Accepts a single `card` object from optimizationData.json.
 * Icon slot uses a gold placeholder; swap `card.icon` for a real SVG/image later.
 */
const OptimizationCard = ({ card }) => {
    const { title, description, cta } = card;

    return (
        <div className="opt-card">
            {/* Gold icon box */}
            <div className="opt-card__icon-wrap" aria-hidden="true">
                <span className="opt-card__icon-inner" />
            </div>

            {/* Title */}
            <h3 className="opt-card__title">{title}</h3>

            {/* Description */}
            <p className="opt-card__description">{description}</p>

            {/* CTA */}
            <a href={cta.href} className="opt-card__cta">
                {cta.label}
                <svg
                    width="16" height="16" viewBox="0 0 16 16"
                    fill="none" aria-hidden="true"
                >
                    <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"
                    />
                </svg>
            </a>
        </div>
    );
};

export default OptimizationCard;