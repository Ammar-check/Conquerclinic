"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CloseButton, Container } from "react-bootstrap";
import Image from "next/image";

import styles from "./Navbar.module.css";
import navbarData from "@/data/navbar.json";
import { ChevronLeft, Search } from "react-bootstrap-icons";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const { logo, navItems, icons, button } = navbarData;

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(null); // men / women
  const [mobileSubMenu, setMobileSubMenu] = useState(null); // category
  const [activePanel,setActivePanel] = useState(null);


  return (
    <header className={styles.navbar}>
      <Container className={styles.navContainer}>
        {/* ==================== mobile navbar ==================== */}
        {isMobileOpen && (
          <div className={styles.mobileMenu}>
            {/* Top Bar */}
            <div className={styles.mobileTop}>
              <span onClick={() => setIsMobileOpen(false)}>✕</span>
            </div>

            {/* Buttons */}
            <button className={styles.mobileBtn}>Login</button>
            <button className={styles.mobileBtnPrimary}>{button}</button>

            {/* LEVEL 1 (Men / Women) */}
            {!mobileMenu &&
              navItems.map((item, i) => (
                <div
                  key={i}
                  className={styles.mobileItem}
                  onClick={() => setMobileMenu(item)}
                >
                  {item.label}
                </div>
              ))}

            {/* LEVEL 2 (Categories) */}
            {mobileMenu && !mobileSubMenu && (
              <>
                <div
                  className={styles.backBtn}
                  onClick={() => setMobileMenu(null)}
                >
                  ← Back
                </div>

                {mobileMenu.megaMenu.categories.map((cat, i) => (
                  <div
                    key={i}
                    className={styles.mobileItem}
                    onClick={() => {
                      if (cat.children) {
                        setMobileSubMenu(cat);
                      } else {
                        window.location.href = cat.href;
                      }
                    }}
                  >
                    {cat.label}
                  </div>
                ))}
              </>
            )}

            {/* LEVEL 3 (Sub Categories) */}
            {mobileSubMenu && (
              <>
                <div
                  className={styles.backBtn}
                  onClick={() => setMobileSubMenu(null)}
                >
                  ← Back
                </div>

                {mobileSubMenu.children.map((sub, i) => (
                  <a key={i} href={sub.href} className={styles.mobileItem}>
                    {sub.label}
                  </a>
                ))}
              </>
            )}

            {/* RIGHT */}
            {!mobileMenu &&
              navItems.map((item, i) => (
                <div className={styles.rightSec}>
                  <span className={styles.megaProdTitle}>
                    {item.megaMenu.productTitle}
                  </span>
                  <div className={styles.productRow}>
                    {item.megaMenu.products.map((prod, i) => (
                      <div key={i} className={styles.productCard}>
                        <img src={prod.image} alt={prod.name} />
                        <h1 className={styles.popularProdName}>{prod.name}</h1>
                        <p className={styles.prodDesc}>{prod.desc}</p>
                        <span className={styles.popularProdPrice}>
                          {prod.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* LEFT SIDE */}
        <div className={styles.left}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            {logo}
          </Link>

          {/* Nav Items */}
          <nav className={styles.navLinks}>
            {navItems.map((item, index) => (
              <div
                key={index}
                className={styles.navItem}
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className={styles.mainLink}>{item.label}</span>

                {/* MEGA MENU */}
                {activeMenu === index && item.megaMenu && (
                  <div className={styles.megaMenu}>
                    <div className={styles.megaInner}>
                      {/* LEFT */}
                      <div className={styles.leftSec}>
                        <h2 className={styles.megaTitle}>
                          {item.megaMenu.title}
                        </h2>
                        <button className={styles.allBtn}>
                          {item.megaMenu.cta}
                        </button>
                      </div>

                      {/* MIDDLE */}
                      <div className={styles.middleSec}>
                        {activeCategory && (
                          <div
                            className={styles.backBtn}
                            onClick={() => setActiveCategory(null)}
                          >
                            <ChevronLeft />
                            {activeCategory.label}
                          </div>
                        )}

                        {/* ============== main nav menu  ============== */}
                        {!activeCategory && (
                          <span className={styles.megaProdTitle}>
                            {item.megaMenu.categoryTitle}
                          </span>
                        )}
                        {!activeCategory &&
                          item.megaMenu.categories.map((cat, i) => (
                            <div
                              key={i}
                              href={cat.href}
                              className={styles.menuItem}
                              onClick={() => {
                                if (cat.children) {
                                  setActiveCategory(cat);
                                } else {
                                  window.location.href = cat.href;
                                }
                              }}
                            >
                              {cat.label}
                            </div>
                          ))}

                        {/* ============= sub category ============= */}
                        {activeCategory &&
                          activeCategory.children.map((sub, i) => (
                            <a
                              key={i}
                              className={styles.menuItem}
                              href={sub.href}
                            >
                              {" "}
                              {sub.label}
                            </a>
                          ))}
                      </div>

                      {/* RIGHT */}
                      <div className={styles.rightSec}>
                        <span className={styles.megaProdTitle}>
                          {item.megaMenu.productTitle}
                        </span>
                        <div className={styles.productRow}>
                          {item.megaMenu.products.map((prod, i) => (
                            <div key={i} className={styles.productCard}>
                              <img src={prod.image} alt={prod.name} />
                              <h1 className={styles.popularProdName}>
                                {prod.name}
                              </h1>
                              <p className={styles.prodDesc}>{prod.desc}</p>
                              <span className={styles.popularProdPrice}>
                                {prod.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          {icons.map((icon, i) => (
            <div className={styles.iconWrapper}
            key={icon.id}
            onClick={()=>setActivePanel(icon.id)}
            >
              <Image
                key={i}
                src={icon.src}
                alt="icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
          ))}

          <button className={styles.ctaBtn}>{button}</button>
          <div
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(true)}
          >
            ☰
          </div>
        </div>


{/* ====================== Search panels ================ */}
  <div
  className={`${styles.searchPanel} ${
    activePanel === "search" ? styles.searchPanelOpen : ""
  }`}
>
  <div className="flex gap-5 items-center">
    <span>Conquer Clinic</span>
    <div className={styles.search}>
      <Search/>
      <input  className={styles.searchInput} type="text" placeholder="Search..." />
    </div>
    <button onClick={() => setActivePanel(null)}>Close</button>
  </div>
  </div>

{/* ====================== Cart panels ================ */}
  <div className={`${styles.cartPanel} ${activePanel === "cart" ? styles.cartPanelOpen: ""}`}>
    <button onClick={()=>setActivePanel(null)}>close</button>
  </div>

{/* ====================== login panels ================ */}

<div  className={`${styles.loginPanel} ${activePanel==="login" ? styles.loginPanelOpen:""}`}
>
  <button onClick={()=>setActivePanel(null)}>X</button>
   <LoginForm/>

</div>


      </Container>
    </header>
  );
};

export default Navbar;
