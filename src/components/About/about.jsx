import React from "react";
import s from "./about.module.css";

const About = () => {
  return (
    <section className={s.about}>
      <h2 className={s.title}>Our History</h2>
      <p className={s.description}>
        Welcome to Bite Me Cafe — a place where passion meets flavor. Founded with 
        a love for exceptional coffee and wholesome food, our cafe has grown from a 
        small neighborhood spot into a beloved destination for locals and visitors alike. 
        Every cup we brew and every dish we serve tells a story of dedication, quality 
        ingredients, and the warmth of community.
      </p>
      <p className={s.description}>
        Our journey began with a simple idea: to create a space where people could slow 
        down, savor the moment, and connect over great food and drinks. From our carefully 
        sourced coffee beans to our freshly baked pastries and hearty savory dishes, we 
        take pride in offering an experience that feels like home — only better.
      </p>
    </section>
  );
};

export default About;
