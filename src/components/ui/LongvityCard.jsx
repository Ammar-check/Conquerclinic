import React from "react";
import styles from "./LongevityCard.module.css";
import Image from "next/image";

const LongevityCard = ({ data }) => {
  if (!data) return null;

  const {
    image,
    title,
    subtitle,
    note,
    label,
    features,
    description,
    button,
    footer,
    bgVariant,
  } = data;

  return (
    <div
      className={styles.card}
      style={{ background: bgVariant }}
    >
      <Image src={image} width={260} height={260} alt="home blood product" className={styles.cardImage} />
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.subtitle}>{subtitle}</p>

      <span className={styles.note}>{note}</span>

      <span className={styles.label}>{label}</span>

      <ul className={styles.list}>
        {features?.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {/* <span className={styles.dot}></span> */}
            {item}
          </li>
        ))}
      </ul>

      <p className={styles.description}>{description}</p>

      <button
        className={styles.button}
        style={{
          background: button?.variant,
          color: button?.textColor,
        }}
      >
        {button?.text}
      </button>

      <span className={styles.footer}>{footer}</span>
    </div>
  );
};

export default LongevityCard;