import React from "react";
import "./hero.scss";
import { Typography, typographyTags, Section, Link } from "../common";
import heroInfo from "./data/heroInfo";

export const Hero = () => {
  return (
    <Section id="hero" className="hero">
      <div className="hero__body">
        <Typography className="hero__title title" tag={typographyTags.title}>
          {heroInfo.title}
        </Typography>
        <Typography className="hero__subtitle" tag={typographyTags.subtitle}>
          {heroInfo.subtitle}
        </Typography>
        <Link href="#contact" className="hero__button button">
          {heroInfo.button}
        </Link>
        <Typography className="hero__text text" tag={typographyTags.text}>
          {heroInfo.text}
        </Typography>
      </div>
    </Section>
  );
};
