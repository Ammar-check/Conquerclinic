"use client";

import styles from "./ComparisonTable.module.css";

/**
 * CheckBox — filled (brand) or outlined (competitor) indicator
 */
function CheckBox({ variant = "competitor", show = true }) {
    if (!show) return <div className={styles["check-box"]} style={{ background: "transparent" }} />;

    return (
        <div
            className={`${styles["check-box"]} ${
                variant === "brand"
                    ? styles["check-box--brand"]
                    : styles["check-box--competitor"]
            }`}
        >
            <div
                className={`${styles["check-icon"]} ${
                    variant === "brand" ? styles["check-icon--white"] : ""
                }`}
            />
        </div>
    );
}

/**
 * ComparisonTable
 *
 * Props:
 *   brandName       {string}         — primary brand name  e.g. "Conquer Clinic"
 *   competitors     {string[]}       — array of competitor names
 *   features        {Array}          — array of feature rows (see shape below)
 *   className       {string=}        — extra class on the section wrapper
 *   containerClass  {string=}        — inner container class  e.g. "container"
 *
 * Feature row shape:
 *   {
 *     id:           number | string,
 *     label:        string,           // feature name
 *     brand:        boolean,          // does primary brand have it?
 *     competitors:  boolean[]         // one entry per competitor (same order)
 *   }
 *
 * Example usage:
 *   <ComparisonTable
 *     brandName="Conquer Clinic"
 *     competitors={["Function Health", "Rhythm", "Oura/Whoop"]}
 *     features={features}
 *   />
 */
export default function ComparisonTable({
    brandName = "Conquer Clinic",
    competitors = [],
    features = [],
    className = "",
    containerClass = "container",
}) {
    return (
        <section className={`${styles["comparison-section"]} ${className}`}>
            <div className={containerClass}>
                {/* Scroll hint visible only on mobile */}
                <p className={styles["comparison-section__scroll-hint"]}>
                    ← Swipe to compare →
                </p>

                <div className={styles["comparison-section__wrapper"]}>
                    <table className={styles["comparison-table"]} role="table">
                        <colgroup>
                            <col className={styles["comparison-table__feature-col"]} />
                            {/* brand col */}
                            <col className={styles["comparison-table__brand-col"]} />
                            {/* competitor cols */}
                            {competitors.map((_, i) => (
                                <col key={i} className={styles["comparison-table__brand-col"]} />
                            ))}
                        </colgroup>

                        <thead>
                            <tr>
                                {/* empty feature col header */}
                                <th
                                    scope="col"
                                    className={styles["comparison-table__th-feature"]}
                                    aria-label="Feature"
                                />

                                {/* Primary brand header */}
                                <th
                                    scope="col"
                                    className={styles["comparison-table__th-brand"]}
                                >
                                    <div className={styles["comparison-table__brand-logo"]}>
                                        {/* Cross / plus icon */}
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <rect x="5" y="0" width="2" height="12" fill="#1a1a1a" />
                                            <rect x="0" y="5" width="12" height="2" fill="#1a1a1a" />
                                        </svg>
                                        {brandName}
                                    </div>
                                </th>

                                {/* Competitor headers */}
                                {competitors.map((name, i) => (
                                    <th
                                        key={i}
                                        scope="col"
                                        className={styles["comparison-table__th-competitor"]}
                                    >
                                        {name}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {features.map((feature) => (
                                <tr key={feature.id}>
                                    {/* Feature label */}
                                    <td className={styles["comparison-table__feature-label"]}>
                                        {feature.label}
                                    </td>

                                    {/* Brand check */}
                                    <td className={styles["comparison-table__check-cell"]}>
                                        <CheckBox variant="brand" show={feature.brand} />
                                    </td>

                                    {/* Competitor checks */}
                                    {competitors.map((_, i) => (
                                        <td
                                            key={i}
                                            className={styles["comparison-table__check-cell"]}
                                        >
                                            <CheckBox
                                                variant="competitor"
                                                show={
                                                    feature.competitors?.[i] !== undefined
                                                        ? feature.competitors[i]
                                                        : true
                                                }
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
