"use client";

import { useState } from "react";
import styles from "./ReviewsSection.module.css";

/**
 * StarRating — renders N filled stars up to maxStars
 */
function StarRating({ rating, maxStars = 5, className = "", starClassName = "" }) {
    return (
        <div className={`${styles["reviews-section__stars"]} ${className}`}>
            {Array.from({ length: maxStars }, (_, i) => (
                <span
                    key={i}
                    className={`${styles["reviews-section__star-icon"]} ${starClassName}`}
                    aria-hidden="true"
                >
                    {i < Math.round(rating) ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
}

/**
 * ReviewCard — individual review tile
 *
 * Props:
 *   rating      {number}  — star rating (1–5)
 *   title       {string}  — review headline
 *   excerpt     {string}  — truncated review body
 *   reviewer    {string}  — reviewer display name
 *   date        {string}  — formatted date string  e.g. "Apr 15, 2026"
 *   time        {string}  — formatted time string  e.g. "7:23 pm"
 *   reviewUrl   {string=} — optional href for "Read review" link
 */
function ReviewCard({ rating, title, excerpt, reviewer, date, time, reviewUrl = "#" }) {
    return (
        <article className={styles["review-card"]}>
            <StarRating
                rating={rating}
                className={styles["review-card__stars"]}
                starClassName={styles["review-card__star-icon"]}
            />
            <h3 className={styles["review-card__title"]}>{title}</h3>
            <p className={styles["review-card__excerpt"]}>{excerpt}</p>
            <a href={reviewUrl} className={styles["review-card__link"]}>
                Read review by {reviewer}
                <span className={styles["review-card__link-arrow"]} aria-hidden="true">→</span>
            </a>
            <p className={styles["review-card__date"]}>
                {date} · {time}
            </p>
        </article>
    );
}

/**
 * ReviewsSection
 *
 * Props:
 *   overallRating   {number}   — e.g. 4.6
 *   maxRating       {number}   — e.g. 5.0
 *   totalReviews    {number}   — e.g. 1307
 *   platform        {string}   — e.g. "Trustpilot"
 *   reviews         {Array}    — array of review objects (see ReviewCard props)
 *   reviewsPerPage  {number=}  — how many cards to show per page (default: 3)
 *   filterOptions   {string[]} — dropdown options (default: ["All stars","5 stars","4 stars","3 stars","2 stars","1 star"])
 *   className       {string=}  — extra class on the section wrapper
 *   containerClass  {string=}  — class for the inner container (e.g. your Bootstrap "container")
 */
export default function ReviewsSection({
    overallRating = 4.6,
    maxRating = 5.0,
    totalReviews = 0,
    platform = "Trustpilot",
    reviews = [],
    reviewsPerPage = 3,
    filterOptions = ["All stars", "5 stars", "4 stars", "3 stars", "2 stars", "1 star"],
    className = "",
    containerClass = "container",
}) {
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState(filterOptions[0]);

    // Filter reviews by star rating if a specific filter is selected
    const filteredReviews = filter === filterOptions[0]
        ? reviews
        : reviews.filter((r) => {
              const stars = parseInt(filter, 10);
              return r.rating === stars;
          });

    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    const currentReviews = filteredReviews.slice(
        page * reviewsPerPage,
        page * reviewsPerPage + reviewsPerPage
    );

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setPage(0);
    };

    return (
        <section className={`${styles["reviews-section"]} ${className}`}>
            <div className={containerClass}>
                {/* ── Header ── */}
                <div className={styles["reviews-section__header"]}>
                    <div className={styles["reviews-section__meta"]}>
                        <StarRating rating={overallRating} />
                        <h2 className={styles["reviews-section__overall-rating"]}>
                            {overallRating.toFixed(1)} out of {maxRating.toFixed(1)} stars
                        </h2>
                        <p className={styles["reviews-section__platform-note"]}>
                            Based on {totalReviews.toLocaleString()} reviews on{" "}
                            <span className={styles["reviews-section__trustpilot-star"]} aria-hidden="true">★</span>
                            {" "}{platform}
                        </p>
                    </div>

                    {/* ── Filter ── */}
                    <div className={styles["reviews-section__filter"]}>
                        <label htmlFor="reviews-filter" className="visually-hidden">
                            Filter by stars
                        </label>
                        <select
                            id="reviews-filter"
                            className={styles["reviews-section__select"]}
                            value={filter}
                            onChange={handleFilterChange}
                        >
                            {filterOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* ── Review Cards Grid ── */}
                {currentReviews.length > 0 ? (
                    <div className={styles["reviews-section__grid"]}>
                        {currentReviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                rating={review.rating}
                                title={review.title}
                                excerpt={review.excerpt}
                                reviewer={review.reviewer}
                                date={review.date}
                                time={review.time}
                                reviewUrl={review.reviewUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={styles["reviews-section__no-results"]}>
                        No reviews found for this filter.
                    </p>
                )}

                {/* ── Pagination ── */}
                {totalPages > 1 && (
                    <div className={styles["reviews-section__pagination"]}>
                        <button
                            className={styles["reviews-section__page-btn"]}
                            onClick={() => setPage((p) => Math.max(0, p - 1))}
                            disabled={page === 0}
                            aria-label="Previous page"
                        >
                            ←
                        </button>
                        <button
                            className={styles["reviews-section__page-btn"]}
                            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                            disabled={page === totalPages - 1}
                            aria-label="Next page"
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
