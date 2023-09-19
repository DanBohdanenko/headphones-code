import React from "react";
import "./contact.scss";
import { Typography, typographyTags, Section } from "../common";
import { Form, contactInfo } from "./";

export const Contact = () => {
  return (
    <Section className="contact" id="contact">
      <Typography
        className="contact__title title"
        tag={typographyTags.sectionTitle}
      >
        {contactInfo.title}
      </Typography>
      <Form />
    </Section>
  );
};
