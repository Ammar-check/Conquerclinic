"use client";

import { useState } from "react";
import faqData from "@/data/faq.json";

export default function Faq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const source = data || faqData;
  const { title, items } = source;

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container faq-container">
        <h2 className="faq-title">{title}</h2>

        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-question-row"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
