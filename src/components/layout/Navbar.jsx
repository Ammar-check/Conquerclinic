
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";

import styles from "./Navbar.module.css";
import navbarData from "@/data/navbar.json";

const Navbar = () => {
  const { logo, navItems, icons, button } = navbarData;

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className={styles.navbar}>
      <Container className={styles.navContainer}>

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
        <h2 className={styles.megaTitle}>{item.megaMenu.title}</h2>
        <button className={styles.allBtn}>
          {item.megaMenu.cta}
        </button>
      </div>

      {/* MIDDLE */}
      <div className={styles.middleSec}>
        {item.megaMenu.categories.map((cat, i) => (
          <a key={i} href={cat.href}>
            {cat.label}
          </a>
        ))}
      </div>

      {/* RIGHT */}
      <div className={styles.rightSec}>
        <div className={styles.productRow}>
          {item.megaMenu.products.map((prod, i) => (
            <div key={i} className={styles.productCard}>
              <img src={prod.image} alt={prod.name} />
              <p>{prod.name}</p>
              <span>{prod.price}</span>
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
            <div className={styles.iconWrapper}>
            <Image
              key={i}
              src={icon}
              alt="icon"
              width={20}
              height={20}
              className={styles.icon}
            />
            </div>
          ))}

          <button className={styles.ctaBtn}>{button}</button>
        </div>

      </Container>
    </header>
  );
};

export default Navbar;