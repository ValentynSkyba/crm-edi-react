import React from "react";
import Food from "../../components/Food/food";
import s from "./FoodPage.module.css";

const foodPhotos = [
  { src: "/images/food_salty3.jpg", alt: "Savory dish" },
  { src: "/images/food_sweet2.jpg", alt: "Sweet pastry" },
  { src: "/images/food_salty4.jpg", alt: "Savory plate" },
  { src: "/images/food_sweet3.jpg", alt: "Dessert" },
  { src: "/images/food_salty5.jpg", alt: "Appetizer" },
  { src: "/images/food_sweet4.jpg", alt: "Cake" },
  { src: "/images/food_salty6.jpg", alt: "Sandwich" },
  { src: "/images/food_sweet5.jpg", alt: "Cookies" },
];

function FoodPage() {
  return (
    <div className={s.foodPage}>
      <div className="page-banner">Food</div>

      <section className={s.featuredSection}>
        <Food />
      </section>

  
      <section className={s.gridSection}>
        <div className={s.photoGrid}>
          {foodPhotos.map((photo, index) => (
            <div key={index} className={s.gridItem}>
              <img
                src={photo.src}
                alt={photo.alt}
                className={s.gridImage}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FoodPage;
