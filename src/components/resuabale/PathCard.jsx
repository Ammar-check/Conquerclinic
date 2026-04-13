import React from "react";

/**
 * PathCard — reusable card for "Choose Your Path" section.
 * Accepts a single `path` object from choosePathData.json.
 */
const PathCard = ({ path, isLast }) => {
  const { label, title, features, cta } = path;

  return (
    <div className={`path-card${isLast ? "" : " path-card--border-right"}`}>
      <div className="path-card__accent" aria-hidden="true" />

      <div className="path-card__body">
        {/* Label */}
        <p className="path-card__label">{label}</p>

        {/* Title */}
        <h2 className="path-card__title">{title}</h2>

        {/* Feature list — looped */}
        <ul className="path-card__features" aria-label={`${title} features`}>
          {features.map((feature) => (
            <li key={feature} className="path-card__feature-item">
              <span className="path-card__feature-dot" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={cta.href} className="path-card__cta">
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
    </div>
  );
};

export default PathCard;