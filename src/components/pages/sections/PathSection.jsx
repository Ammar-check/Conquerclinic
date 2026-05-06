import React from "react";
import styles from "./PathSection.module.css";
import PathSectionCard from "@/components/ui/PathSectionCard";


const PathSection = ({ data }) => {
  const { heading, subHeading, cards } = data.pathSection;

  return (
    <section className={styles.section}>
      
      <div className={styles.container}>
        
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subHeading}>{subHeading}</p>

        <div className={styles.grid}>
          {cards.map((card) => (
            <PathSectionCard key={card.id} data={card} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default PathSection;