"use client";

import { useState } from "react";
import data from "@/data/limit-personal-info/limit-personal-info.json";
import styles from "./LimitPersonalInfo.module.css";
import Navbar from "@/components/layout/Navbar";
import { ChevronDown, ChevronLeft, ChevronRight, InfoCircleFill } from "react-bootstrap-icons";

const LimitPersonalInfo = () => {
  const [active, setActive] = useState("privacy-policy");
  const [openItems, setOpenItems] = useState([]);

  const currentPage = data.privacyPages.find((p) => p.id === active);
  const faqs = currentPage?.content?.faqs || [];

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const expandAll = () => {
    if (openItems.length === faqs.length) {
      setOpenItems([]);
    } else {
      setOpenItems(faqs.map((f) => f.id));
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {data.privacyPages.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`${styles.link} ${
                active === item.id ? styles.active : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>{currentPage.content.title}</h1>
          <h2 className={styles.privacyDate}>{currentPage.content.date}</h2>
          <h2 className={styles.subtitle}>{currentPage.content.sub}</h2>

          {/* faqs section privacy policy  */}
          {faqs.length > 0 && (
            <div className="pt-12 relative">
              {/* Expand All Button */}
              <button className={styles.allBtn} onClick={expandAll}>
                {openItems.length === faqs.length
                  ? "Collapse All"
                  : "Expand All"} <ChevronRight/>
              </button>

              {/* FAQs */}
              {faqs.map((faq) => (
                <div key={faq.id} className={styles.faqItem}>
                  {/* Question */}
                  <div
                    className={styles.question}
                    onClick={() => toggleItem(faq.id)}
                  >
                    {faq.question}  <ChevronDown/>
                  </div>

                  {/* Answer */}
                  {openItems.includes(faq.id) && (
                    <div className={styles.answer}>
                      {faq.answer || "Content coming soon..."}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Example: mainPoints */}
          {currentPage.content.mainPoints?.map((point, i) => (
            <div key={i}>
              <h3 className={styles.mainPoints}>{point}</h3>

            </div>
          ))}
          {currentPage?.content?.optout && (
            <div className="my-4">
              <input type="checkbox" /> {currentPage.content.optout}
            </div>
          )}
          {currentPage?.content?.privacyChoiceBtn && (
            <button className={styles.privacyChoiceBtn}>
              {currentPage.content.privacyChoiceBtn}
            </button>
          )}
          {currentPage?.content.additional && (
            <div className="bg-white p-3 flex gap-2 my-4 rounded-[6px]">
              <InfoCircleFill color="#C9A55A" size={30} />{" "}
              <span className="text-black">
                {currentPage.content.additional}
              </span>
            </div>
          )}

          {/* Example: form */}
          {currentPage.content.form && (
            <div> {/* your form component here */} </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LimitPersonalInfo;
