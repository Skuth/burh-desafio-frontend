/* eslint-disable react/prop-types */

import { DivCardStyles } from "./styles";

export const DivCard = ({ children1, children2, bgColor }) => {
  return (
    <DivCardStyles>
      <h2>{children1}</h2>
      <p style={{ backgroundColor: bgColor }}>{children2}</p>
    </DivCardStyles>
  );
};
