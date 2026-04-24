import s from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <nav className={s.navbar}>
        <h1 className={s.logo}>CRM Edi</h1>
        <ul className={s.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/food">Food</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
