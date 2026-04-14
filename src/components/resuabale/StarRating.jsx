import React from "react";

/**
 * StarRating — renders N gold stars.
 * `rating` (float) — used for aria-label only; all 5 stars rendered gold per Figma.
 * `count`  (string) — review count label.
 */
const StarRating = ({ rating, count }) => (
    <div className="star-rating" aria-label={`Rated ${rating} out of 5. ${count} reviews.`}>
        <span className="star-rating__count">Reviews {count}</span>
        <div className="star-rating__stars" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="star-rating__star" viewBox="0 0 16 15" fill="none">
                    <path
                        d="M8 0.5L9.79611 6.02786H15.6085L10.9062 9.44427L12.7023 14.9721L8 11.5557L3.29772 14.9721L5.09383 9.44427L0.391548 6.02786H6.20389L8 0.5Z"
                        fill="#C9A55A"
                    />
                </svg>
            ))}
        </div>
        <span className="star-rating__score">{rating}</span>
    </div>
);

export default StarRating;