"use client";

import React from "react";
import { Check } from "react-bootstrap-icons";
import styles from "./TestosteroneCard.module.css";

const TestosteroneCard = ({ data }) => {
  console.log("Testo Data:", data);
    if (!data) return null; // ✅ prevent crash
  const { bgVariant, card } = data || {};

  const sectionStyle =
    bgVariant.type === "image"
      ? {
          backgroundImage: `url(${bgVariant.value})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {
          backgroundColor: bgVariant.value,
        };

  return (
    <section className={styles.wrapper} >
      <div className={styles.card} style={sectionStyle}>
        
        <h2 className={styles.title}>{card.title}</h2>
        <p className={styles.desc}>{card.description}</p>

        <div className={styles.grid}>
          {card.features.map((item, i) => (
            <div key={i} className={styles.feature}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          className={styles.btn}
          style={{
            backgroundColor: card.button.variant,
            color: card.button.textColor,
          }}
        >
          {card.button.text}
        </button>

      </div>
    </section>
  );
};

export default TestosteroneCard;