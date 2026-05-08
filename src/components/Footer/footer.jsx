import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <div class="footer-column">
          <h3 class="logo">Bite Me</h3>
          <p>Cozy café with signature dishes and freshly baked treats</p>
          <div class="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>

        <div class="footer-column">
          <h3>Contact</h3>
          <p>Edinburgh, UK</p>
          <p>
            <a href="tel:+441234567890">+44 123 456 7890</a>
          </p>
          <p>
            <a href="mailto:info@biteme.com">info@biteme.com</a>
          </p>
        </div>

        <div class="footer-column">
          <h3>Opening Hours</h3>
          <p>Mon–Fri: 08:00 – 22:00</p>
          <p>Sat–Sun: 09:00 – 23:00</p>
        </div>

        <div class="footer-column">
          <h3>Newsletter</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <p className={s.copy}>© 2026 Bite Me Cafe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
