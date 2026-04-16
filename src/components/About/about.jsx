import React from "react";
import s from "./about.module.css";

const About = () => {
  return (
    <div className={s.about}>
      <h1>About Us</h1>
      <p className={s.description}>Welcome to our company!</p>
      <p className={s.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia,
        quibusdam cupiditate maxime debitis quod possimus mollitia perferendis.
        Quis suscipit ducimus dolorem, neque sequi dignissimos aliquam eum optio
        provident commodi.
      </p>
    </div>
  );
};

export default About;
