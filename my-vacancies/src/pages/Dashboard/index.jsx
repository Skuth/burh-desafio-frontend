import { MainContent } from "./styles";
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { VacanciesList } from "../../components/VacanciesList"

export const Dashboard = () => {
  return (
    <>
    <Header />
    <MainContent>
      <Form />
      <VacanciesList />
    </MainContent>
    </>
  );
};
