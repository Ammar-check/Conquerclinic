"use client";

import styles from "./ClinicalStats.module.css";

/**
 * StatCard — individual statistic tile
 *
 * Props:
 *   value        {string}  — e.g. "77%"
 *   description  {string}  — short label below the value
 *   citation     {string=} — study citation text
 */
function StatCard({ value, description, citation }) {
    return (
        <div className={styles["stat-card"]}>
            <p className={styles["stat-card__value"]}>{value}</p>
            <p className={styles["stat-card__description"]}>{description}</p>
            {citation && (
                <p className={styles["stat-card__citation"]}>{citation}</p>
            )}
        </div>
    );
}

/**
 * ClinicalStats
 *
 * Props:
 *   heading         {string}   — section heading text
 *   stats           {Array}    — array of stat objects (see StatCard props + id)
 *   disclaimer      {string=}  — small footnote at the bottom
 *   className       {string=}  — extra class on the section wrapper
 *   containerClass  {string=}  — inner container class e.g. "container"
 *
 * Stat object shape:
 *   {
 *     id:          number | string,
 *     value:       string,   // e.g. "77%"
 *     description: string,
 *     citation:    string    // optional
 *   }
 */
export default function ClinicalStats({
    heading = "",
    stats = [],
    disclaimer = "",
    className = "",
    containerClass = "container",
}) {
    return (
        <section className={`${styles["clinical-stats-section"]} ${className}`}>
            <div className={containerClass}>
                {/* ── Heading ── */}
                {heading && (
                    <h2 className={styles["clinical-stats__heading"]}>{heading}</h2>
                )}

                {/* ── Stats Grid ── */}
                {stats.length > 0 && (
                    <div className={styles["clinical-stats__grid"]}>
                        {stats.map((stat) => (
                            <StatCard
                                key={stat.id}
                                value={stat.value}
                                description={stat.description}
                                citation={stat.citation}
                            />
                        ))}
                    </div>
                )}

                {/* ── Disclaimer ── */}
                {disclaimer && (
                    <p className={styles["clinical-stats__disclaimer"]}>{disclaimer}</p>
                )}
            </div>
        </section>
    );
}
