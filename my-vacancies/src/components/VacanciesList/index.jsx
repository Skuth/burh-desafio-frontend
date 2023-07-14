import { useContext } from "react";
import { VacanciesContext } from "../../contexts/VacanciesContext";
import { VacanciesListStyles } from "./styles";
import { Card } from "../Card";

export const VacanciesList = () => {
  const { listVacancies } = useContext(VacanciesContext);

  return (
    <VacanciesListStyles>
      {listVacancies.map((vacancie, index) => (
        <Card vacancie={vacancie} key={index} id={vacancie.id} />
      ))}
    </VacanciesListStyles>
  );
};
