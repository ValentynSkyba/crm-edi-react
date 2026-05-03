import React from "react";
import s from "./food.module.css";

const foodFeatured = [
  {
    name: "Savory Delights",
    description: "Fresh, hearty dishes made with locally sourced ingredients",
    image: "/images/food_salty2.jpg",
  },
  {
    name: "Sweet Treats",
    description: "Handcrafted pastries and desserts baked daily in-house",
    image: "/images/food_sweet1.jpg",
  },
];

const Food = () => {
  return (
    <div className={s.featured}>
      {foodFeatured.map((item, index) => (
        <div
          key={index}
          className={`${s.featuredItem} ${index % 2 !== 0 ? s.reversed : ""}`}
        >
          <div className={s.featuredImageWrapper}>
            <img
              src={item.image}
              alt={item.name}
              className={s.featuredImage}
            />
          </div>
          <div className={s.featuredInfo}>
            <span className={s.featuredBadge}>{item.name}</span>
            <p className={s.featuredDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
