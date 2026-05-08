import { Link } from "react-router-dom";
import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <Link to="/" className={s.logoLink}>
          <img src="/logo/logo.svg" alt="Bite Me Cafe" className={s.logo} />
        </Link>
        <ul className={s.navLinks}>
          <li>
            <Link to="/" className={s.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/food" className={s.link}>
              Food
            </Link>
          </li>
          <li>
            <Link to="/drinks" className={s.link}>
              Drinks
            </Link>
          </li>
          <li>
            <Link to="/contact" className={s.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
