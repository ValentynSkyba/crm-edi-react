import React, { useState } from "react";
import s from "./drinks.module.css";

const drinkItems = [
  {
    name: "Espresso Classico",
    image: "/images/coffee4.jpg",
    description:
      "A bold, rich shot of pure espresso — the foundation of all great coffee. Made from our signature dark roast blend.",
  },
  {
    name: "Caramel Latte",
    image: "/images/coffee6.jpg",
    description:
      "Silky smooth steamed milk meets rich espresso, finished with a drizzle of house-made caramel sauce.",
  },
  {
    name: "Iced Mocha",
    image: "/images/coffee7.jpg",
    description:
      "The perfect blend of chocolate and coffee over ice. Topped with whipped cream for an indulgent treat.",
  },
];

const DrinkCard = ({ drink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.drinkCard}>
      <div className={s.drinkImageWrapper}>
        <img src={drink.image} alt={drink.name} className={s.drinkImage} />
      </div>
      <div className={s.drinkBadge}>{drink.name}</div>
      <button
        className={`${s.accordionBtn} ${isOpen ? s.accordionOpen : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Hide details" : "Show details"}
        <span className={s.accordionIcon}>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className={s.accordionContent}>
          <p>{drink.description}</p>
        </div>
      )}
    </div>
  );
};

const Drinks = () => {
  return (
    <div className={s.featuredDrinks}>
      {drinkItems.map((drink, index) => (
        <DrinkCard key={index} drink={drink} />
      ))}
    </div>
  );
};

export default Drinks;
