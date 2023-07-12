import { DivCard } from "../DivCard";
import { CardStyles } from "./styles";

import { Link } from "react-router-dom";
import { GiBrazilFlag, GiEarthAmerica } from "react-icons/gi";

export const Card = ({ vacancie }) => {
  return (
    <CardStyles>
      <p>
        <Link to={vacancie.url} />
      </p>
      <DivCard children1={"Plataforma:"} children2={vacancie.platform} />
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
        children1={vacancie.isNational ? <GiBrazilFlag /> : <GiEarthAmerica />}
        children2={vacancie.isNational ? "Nacional" : "Internacional"}
      />
    </CardStyles>
  );
};
