import React from "react";
import Contact from "../../components/Contact/contact";
import s from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={s.contactPage}>

      <div className="page-banner">Contact Us</div>


      <section className={s.peopleSection}>
        <div className={s.peopleGrid}>
          <div className={s.peopleImageWrapper}>
            <img
              src="/images/showcase2.jpg"
              alt="People enjoying coffee in our cafe"
              className={s.peopleImage}
            />
          </div>
          <div className={s.peopleImageWrapper}>
            <img
              src="/images/showcase3.jpg"
              alt="Friends at Bite Me Cafe"
              className={s.peopleImage}
            />
          </div>
        </div>
      </section>

      {/* Contact Details + Photo */}
      <section className={s.detailsSection}>
        <div className={s.detailsGrid}>
          <div className={s.detailsInfo}>
            <h2 className={s.detailsTitle}>Get in Touch</h2>
            <div className={s.detailItem}>
              <span className={s.detailIcon}>📍</span>
              <div>
                <p className={s.detailLabel}>Location</p>
                <p className={s.detailValue}>123 Cafe Street, Edinburgh, UK</p>
              </div>
            </div>
            <div className={s.detailItem}>
              <span className={s.detailIcon}>📧</span>
              <div>
                <p className={s.detailLabel}>Email</p>
                <p className={s.detailValue}>hello@biteME.cafe</p>
              </div>
            </div>
            <div className={s.detailItem}>
              <span className={s.detailIcon}>📞</span>
              <div>
                <p className={s.detailLabel}>Phone</p>
                <p className={s.detailValue}>+44 131 234 5678</p>
              </div>
            </div>
          </div>
          <div className={s.detailsImageWrapper}>
            <img
              src="/images/coffee4.jpg"
              alt="Our cafe"
              className={s.detailsImage}
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={s.formSection}>
        <Contact />
      </section>
    </div>
  );
};

export default ContactPage;
