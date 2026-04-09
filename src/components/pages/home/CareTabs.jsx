"use client";

import { useState } from "react";
import careTabsData from "@/data/careTabs.json";

export default function CareTabs() {
  const { heading, subheading, tabs } = careTabsData;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <section className="care-tabs-section">
      <div className="container care-tabs-container">
        <h2 className="care-tabs-heading">{heading}</h2>
        <p className="care-tabs-subheading">{subheading}</p>

        <div className="care-tabs-bar" role="tablist" aria-label="Care categories">
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${tab.label}-${index}`}
                type="button"
                role="tab"
                id={`care-tab-${index}`}
                aria-selected={isActive}
                aria-controls={`care-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
                className={`care-tabs-tab ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          className="care-tabs-panel"
          role="tabpanel"
          id={`care-panel-${activeIndex}`}
          aria-labelledby={`care-tab-${activeIndex}`}
        >
          <div className="care-tabs-columns">
            <ul className="care-tabs-list">
              {active.leftColumn.map((item, i) => (
                <li key={`left-${activeIndex}-${i}`} className="care-tabs-item">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="care-tabs-list">
              {active.rightColumn.map((item, i) => (
                <li key={`right-${activeIndex}-${i}`} className="care-tabs-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="care-tabs-cta-wrap">
            <button type="button" className="care-tabs-cta">
              {active.ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
