import React from "react";
import { Link } from "react-router-dom";
import About from "../../components/About/about";
import s from "./HomePage.module.css";

const Home = () => {
  return (
    <div className={s.homePage}>
      <div className="page-banner">Home</div>

      <section className={s.hero}>
        <img
          src="/images/showcase1.jpg"
          alt="Bite Me Cafe interior"
          className={s.heroImage}
        />
        <div className={s.heroOverlay}>
          <h1 className={s.heroTitle}>Welcome to Bite Me Cafe</h1>
          <p className={s.heroSubtitle}>Where every sip tells a story</p>
        </div>
      </section>

      {/* Our History / About section */}
      <About />

      {/* Cards Section - Drinks & Food links */}
      <section className={s.cardsSection}>
        <div className={s.cardsGrid}>
          <Link to="/drinks" className={s.card}>
            <div className={s.cardImageWrapper}>
              <img
                src="/images/coffee2.jpg"
                alt="Our drinks"
                className={s.cardImage}
              />
            </div>
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>Drinks</h3>
              <p className={s.cardDescription}>
                Explore our handcrafted beverages — from rich espressos to refreshing 
                cold brews. Every cup is made with love and the finest beans.
              </p>
            </div>
          </Link>

          <Link to="/food" className={s.card}>
            <div className={s.cardImageWrapper}>
              <img
                src="/images/food_salty1.jpg"
                alt="Our food"
                className={s.cardImage}
              />
            </div>
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>Food</h3>
              <p className={s.cardDescription}>
                From savory bites to sweet treats, our menu is crafted with fresh, 
                locally sourced ingredients. Come hungry, leave happy.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Review Section */}
      <section className={s.reviewSection}>
        <div className={s.reviewCard}>
          <div className={s.reviewStars}>★★★★★</div>
          <p className={s.reviewText}>
            "The best cafe in town! Amazing coffee and the pastries are to die for. 
            The atmosphere is warm and inviting — perfect for a morning treat or 
            an afternoon catch-up with friends."
          </p>
          <p className={s.reviewAuthor}>— Sarah M.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
