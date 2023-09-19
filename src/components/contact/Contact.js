import React from "react";
import "./contact.scss";
import { Typography, Section, Form, contactInfo } from "../";

export const Contact = () => {
  return (
    <Section className="contact" id="contact">
      <Typography variant="h2" className="contact__title title">
        {contactInfo.title}
      </Typography>
      <Form />
    </Section>
  );
};
