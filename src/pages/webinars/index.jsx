import React, { useState } from "react";
import webinarsData from "@/data/webinars/webinars.json";
import StorySection from "@/components/pages/sections/StorySection";
import Navbar from "@/components/layout/Navbar";
import { PlayFill } from "react-bootstrap-icons";
import Image from "next/image";
import styles from "./Webinars.module.css";

const Webinars = () => {
    const [active, setActive] = useState("all");
  const { hero, buttons, webinarContent } = webinarsData;

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.hero}>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.description}>{hero.description}</p>

          {/* Buttons */}
          <div className={styles.buttons}>
            {buttons.map((btn) => (
              <button key={btn.id} 
              onClick={()=>setActive(btn.value)}
              className={`${styles.button} ${active === btn.value ? styles.active:'' }`}>
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Webinar Section */}
        <div className={styles.webinarBox}>
          
          {/* Video */}
          <div className={styles.videoBox}>
            <span className={styles.videoLabel}>
              <a className={styles.videoLink} href="">Video <PlayFill /></a>
            </span>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <span className={styles.smallTitle}>
              {webinarContent.title}
            </span>

            <h2 className={styles.heading}>
              {webinarContent.subtitle}
            </h2>

            <p className={styles.text}>
              {webinarContent.description}
            </p>

            {/* Speakers */}
            <div className={styles.speakers}>
              {webinarContent.speakers.map((card, index) => (
                <div className={styles.card} key={index}>
                  
                  <div className={styles.cardImage}>
                    <Image
                      src={card.image}
                      fill
                      alt={card.name}
                      className={styles.img}
                    />
                  </div>

                  <h3 className={styles.name}>{card.name}</h3>
                  <span className={styles.position}>
                    {card.position}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <StorySection data={webinarsData.storySection} />
      </div>
    </>
  );
};

export default Webinars;