import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <p className={s.brand}>Bite Me Cafe</p>
        <p className={s.copy}>© 2026 Bite Me Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
