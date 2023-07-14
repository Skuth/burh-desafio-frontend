/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DivCard } from "../DivCard";
import { CardStyles, LinkStyles } from "./styles";
import { VacanciesContext } from "../../contexts/VacanciesContext";

import { GiBrazilFlag, GiEarthAmerica } from "react-icons/gi";
import { BsFillTrashFill } from "react-icons/bs";

export const Card = ({ vacancie }) => {
  
  const { deleteVacancie } = useContext(VacanciesContext);

  return (
    <CardStyles>
      <p className="vacancie-card__url">
        <LinkStyles to={vacancie.url} target="_blank">Link da vaga</LinkStyles>
      </p>
      <DivCard
        children1={"Plataforma:"}
        children2={vacancie.platform}
        bgColor={"var(--color-blue)"}
      />
      <DivCard
        children1={"Situação:"}
        children2={vacancie.status}
        bgColor={
          vacancie.status === "Não iniciado"
            ? "var(--color-light-gray)"
            : vacancie.status === "Candidatura Enviada"
            ? "var(--color-light-pink)"
            : vacancie.status === "Triagem"
            ? "var(--color-light-yellow)"
            : vacancie.status === "Entrevista comportamental"
            ? "var(--color-light-blue)"
            : vacancie.status === "Entrevista técnica"
            ? "var(--color-ciano)"
            : "var(--color-dark-gray)"
        }
      />
      <DivCard
        children1={"Data:"}
        children2={vacancie.date}
        bgColor={"var(--color-medium-gray)"}
      />
      <DivCard
        children1={"Salário:"}
        children2={(vacancie.wage * 1).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
        bgColor={"var(--color-medium-gray)"}
      />
      <DivCard
        children1={
          vacancie.isNational === "yes" ? <GiBrazilFlag /> : <GiEarthAmerica />
        }
        children2={vacancie.isNational === "yes" ? "Nacional" : "Internacional"}
        bgColor={
          vacancie.isNational === "yes"
            ? "var(--color-green)"
            : "var(--color-red)"
        }
      />
      <button
        className="card-button__delete"
        onClick={() => deleteVacancie(vacancie._id)}
      >
        <BsFillTrashFill />
      </button>
    </CardStyles>
  );
};
