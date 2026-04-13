import React from "react";

/**
 * TierCard — reusable card for "Choose Your Level" section.
 * Accepts a single `tier` object from tiersData.json.
 * featured=true applies the gold border / elevated / recommended treatment.
 */
const TierCard = ({ tier }) => {
    const { title, tier: tierLabel, accessLabel, featured, badge, features, cta } = tier;

    return (
        <div className={`tier-card${featured ? " tier-card--featured" : ""}`}>
            {/* Top accent bar */}
            <div className="tier-card__top-bar" aria-hidden="true" />

            {/* Recommended badge — only on featured */}
            {featured && badge && (
                <div className="tier-card__badge" aria-label="Recommended plan">
                    {badge}
                </div>
            )}

            {/* Header */}
            <div className="tier-card__header">
                <p className={`tier-card__tier-label${featured ? " tier-card__tier-label--gold" : ""}`}>
                    {tierLabel}
                </p>
                <h3 className="tier-card__title">{title}</h3>
                <p className="tier-card__access-label">{accessLabel}</p>
            </div>

            {/* Feature list — looped */}
            <ul className="tier-card__features" aria-label={`${title} features`}>
                {features.map((feature) => (
                    <li key={feature} className="tier-card__feature-item">
                        {/* Gold checkmark icon */}
                        <svg
                            className="tier-card__check"
                            width="20" height="20" viewBox="0 0 20 20"
                            fill="none" aria-hidden="true"
                        >
                            <path
                                d="M4 10.5L8 14.5L16 6"
                                stroke="#C9A55A" strokeWidth="1.67"
                                strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href={cta.href}
                className={`tier-card__cta${featured ? " tier-card__cta--featured" : ""}`}
            >
                {cta.label}
            </a>
        </div>
    );
};

export default TierCard;