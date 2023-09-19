import React from "react";
import "./hero.scss";
import { Section, Typography, Link, heroInfo } from "../";

export const Hero = () => {
  return (
    <Section id="hero" className="hero">
      <div className="hero__body">
        <Typography variant="h1" className="hero__title title">
          {heroInfo.title}
        </Typography>
        <Typography variant="h3" className="hero__subtitle">
          {heroInfo.subtitle}
        </Typography>
        <Link href="#contact" className="hero__button button">
          {heroInfo.button}
        </Link>
        <Typography variant="p" className="hero__text text">
          {heroInfo.text}
        </Typography>
      </div>
    </Section>
  );
};
