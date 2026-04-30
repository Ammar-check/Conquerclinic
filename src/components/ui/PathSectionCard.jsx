import Image from "next/image";
import React from "react";
import styles from "./../pages/sections/PathSection.module.css";

const PathSectionCard = ({ data }) => {

  return (
    <div className={styles.card}>
      
      {/* Image */}
      <div className={styles.imageWrapper}>
        <span className="bg-[#C9A55A] p-1 px-2 text-white absolute right-3 top-3 z-10 rounded-[4px]">{data.tag}</span>
        <Image src={data.image} fill alt={data.title} className={styles.image} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>{data.title}</h2>
        <span className={styles.price}>{data.price}</span>

        <p className={styles.shortDesc}>{data.shortDesc}</p>
        <p className={styles.description}>{data.description}</p>

        <ul className={styles.list}>
          {data.features.map((item, i) => (
            <li key={i} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>

        <button className={styles.button}>{data.button}</button>
      </div>

    </div>
  );
};

export default PathSectionCard;