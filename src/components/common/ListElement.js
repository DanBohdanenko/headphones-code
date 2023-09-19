import React from "react";

export const ListElement = ({ key, className, children }) => {
  return (
    <li key={key} className={className}>
      {children}
    </li>
  );
};
