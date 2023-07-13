import { useContext } from "react";
import { MainContent } from "./styles";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { VacanciesList } from "../../components/VacanciesList";
import { VacanciesContext } from "../../contexts/VacanciesContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Dashboard = () => {
  const { loading } = useContext(VacanciesContext);

  return (
    <>
      <Header />
      <MainContent>
        <Form />
        {loading ? (
          <p className="dashboard-loading">Carregando...</p>
        ) : (
          <VacanciesList />
        )}
      </MainContent>
      <ToastContainer />
    </>
  );
};
