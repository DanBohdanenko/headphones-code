import React from "react";
import "./results.scss";
import { Typography, typographyTags, Section, resultsInfo } from "../";

export const Results = () => {
  return (
    <Section className="results" id="results">
      <div className="results__body">
        <Typography
          tag={typographyTags.sectionTitle}
          className="results__title title"
        >
          {resultsInfo.title}
        </Typography>
        <Typography tag={typographyTags.text} className="results__text text">
          {resultsInfo.text}
        </Typography>
      </div>
      <ul className="results__list">
        {resultsInfo.items.map((item) => (
          <li key={item.id} className="results__item">
            <Typography
              tag={typographyTags.itemTitle}
              className="results__item-title"
            >
              {item.title}
            </Typography>
            <Typography
              tag={typographyTags.text}
              className="results__item-text"
            >
              {item.text}
            </Typography>
          </li>
        ))}
      </ul>
    </Section>
  );
};
