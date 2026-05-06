import React, { useState } from "react";
import journalData from "@/data/journal/journal.json";
import StorySection from "@/components/pages/sections/StorySection";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import styles from "@/pages/journal/Journal.module.css";
import JournalCard from "@/components/ui/JournalCard";

const Journal = () => {
  const [active, setActive] = useState("all");
  const { hero, buttons, imageSection,imageSection2 } = journalData;

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
              <button
                key={btn.id}
                onClick={() => setActive(btn.value)}
                className={`${styles.button} ${active === btn.value ? styles.active : ""}`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <input
            className="bg-[#DEE2E6] rounded-[30px] px-12 py-2 outline-0 w-full"
            type="text"
            placeholder="Search"
          />

          <div className={styles.jImageWrapper}>
            <Image src={imageSection.image} fill />
            <span className={styles.tag}>{imageSection.tag}</span>
          </div>

          <div className="flex  gap-3 my-4">
            <span className="text-white text-[12px] font-normal">
              {imageSection.title}
            </span>
            <div>
              <span className="text-white text-[23px]  font-normal">
                {imageSection.description}
              </span>
              <p className="text-white text-[13px] ">{imageSection.label}</p>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#BBBBBB]"></div>

      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 bg-[#DCDCDC] p-12">
  {imageSection2.map((item, index) => (
    <JournalCard key={index} data={item} />
  ))}
</div> 
        <StorySection data={journalData.storySection} />
    </>
  );
};

export default Journal;
