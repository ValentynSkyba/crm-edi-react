import React, { useState } from "react";
import s from "./contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={s.contactForm}>
      <h3 className={s.formTitle}>Contact Form</h3>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.formGroup}>
          <label htmlFor="contact-name" className={s.label}>Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={s.input}
            required
          />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="contact-email" className={s.label}>Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={s.input}
            required
          />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="contact-message" className={s.label}>Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what's on your mind..."
            className={s.textarea}
            rows={5}
            required
          />
        </div>
        <button type="submit" className={s.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
