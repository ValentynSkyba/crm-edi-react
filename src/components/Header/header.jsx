import s from "./header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <nav className={s.navbar}>
        <h1 className={s.logo}>CRM Edi</h1>
        <ul className={s.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/src/pages/Food/FoodPage">Food</a>
          </li>
          <li>
            <a href="/src/pages/Drinks/DrinksPage">Drinks</a>
          </li>
          <li>
            <a href="/src/pages/Contact/ContactPage">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
