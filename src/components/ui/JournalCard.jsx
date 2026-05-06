import Image from "next/image";
import styles from "./JournalCard.module.css";

const JournalCard = ({ data }) => {
  const { image, title, description, label, height } = data;

  return (
    <div className={styles.card}>
      
      {/* Image */}
      <div
        className={styles.imageWrapper}
        style={{ height: height || "300px" }} // dynamic height
      >
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>

        <div>
          <span className={styles.description}>{description}</span>
          <p className={styles.label}>{label}</p>
        </div>
      </div>

    </div>
  );
};

export default JournalCard;