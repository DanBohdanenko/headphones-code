import React from "react";
import "./about.scss";
import {
  Section,
  aboutImages,
  aboutInfo,
  Typography,
  typographyTags,
} from "../";

export const About = () => {
  return (
    <Section className="about" id="about">
      <div className="about__body">
        <Typography
          className="about__title title"
          tag={typographyTags.sectionTitle}
        >
          {aboutInfo.title}
        </Typography>
        <Typography className="about__text text" tag={typographyTags.text}>
          {aboutInfo.text}
        </Typography>
      </div>
      <ul className="about__items">
        {aboutInfo.items.map((item) => (
          <li key={item.id} className="about__item">
            <div className="about__item-img">
              <img src={aboutImages[item.src]} alt="about-image" />
            </div>
            <Typography
              className="about__item-title"
              tag={typographyTags.itemTitle}
            >
              {item.title}
            </Typography>
            <Typography className="about__item-text" tag={typographyTags.text}>
              {item.description}
            </Typography>
          </li>
        ))}
      </ul>
    </Section>
  );
};
