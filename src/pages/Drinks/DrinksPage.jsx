import React from "react";
import Drinks from "../../components/Drinks/drinks";
import s from "./DrinksPage.module.css";

const drinkPhotos = [
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
  "/images/coffee10.jpg",
  "/images/coffee2.jpg",
  "/images/coffe5.jpg",
  "/images/coffe11.jpg",
  "/images/coffee4.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
];

function DrinksPage() {
  return (
    <div className={s.drinksPage}>
   
      <div className="page-banner">Drinks</div>


      <section className={s.introSection}>
        <p className={s.introText}>
          At Bite Me Cafe, our drinks are crafted with care and passion. From 
          rich, aromatic espressos to creamy lattes and refreshing iced coffees, 
          every beverage is made using premium beans and the freshest ingredients. 
          Whether you're starting your morning or taking an afternoon break, 
          we have the perfect drink waiting for you.
        </p>
      </section>

      {/* Featured Drinks with Accordion */}
      <section className={s.featuredSection}>
        <Drinks />
        <p className={s.featuredNote}>
          Click on each drink to see more details
        </p>
      </section>

      {/* Drinks Photo Grid */}
      <section className={s.gridSection}>
        <div className={s.photoGrid}>
          {drinkPhotos.map((photo, index) => (
            <div key={index} className={s.gridItem}>
              <img
                src={photo}
                alt={`Coffee drink ${index + 1}`}
                className={s.gridImage}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DrinksPage;
