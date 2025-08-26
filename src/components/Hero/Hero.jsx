import React from "react";
import styles from "./Hero.module.css";
import pictureHero from "./images/pictureHero.png";
import pictureHero2x from "./images/pictureHero2x.png";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Hero = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  function handleSmoothScroll(event, targetId) {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className={styles.hero}>
      <img
        className={styles.heroPhoto}
        srcSet={`
                    
                    ${pictureHero2x} 1612w
                `}
        sizes="
                  (min-width: 1440px) 806px,
                  
                  "
      />
      <div className={styles.heroTitleAndBtns}>
        <h1 className={styles.heroTitle}>Campers of your dreams</h1>
        <h2 className={styles.heroTitleFind}>
          You can find everything you want in our catalog
        </h2>
        <div className={styles.heroBtns}>
          <a
            className={styles.heroViewNow}
            onClick={(e) => handleSmoothScroll(e, "camperList")}
          >
            View Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
