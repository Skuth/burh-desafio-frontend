/* eslint-disable react/prop-types */
import { DivCard } from "../DivCard";
import { CardStyles, LinkStyles } from "./styles";

import { GiBrazilFlag, GiEarthAmerica } from "react-icons/gi";

export const Card = ({ vacancie }) => {
  return (
    <CardStyles>
      <p className="vacancie-card__url">
        <LinkStyles to={vacancie.url}>Link da vaga</LinkStyles>
      </p>
      <DivCard children1={"Plataforma:"} children2={vacancie.platform} bgColor={"var(--color-blue)"}/>
      <DivCard children1={"Situação:"} children2={vacancie.status} />
      <span>
        <DivCard children1={"Data:"} children2={vacancie.date} />
        <DivCard
          children1={"Salário:"}
          children2={vacancie.wage.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        />
      </span>
      <DivCard
        children1={vacancie.isNational === "yes" ? <GiBrazilFlag /> : <GiEarthAmerica />}
        children2={vacancie.isNational === "yes" ? "Nacional" : "Internacional"}
      />
    </CardStyles>
  );
};
