import { MainContent } from "./styles";
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { VacanciesList } from "../../components/VacanciesList"
import { useContext } from "react";
import { VacanciesContext } from "../../contexts/VacanciesContext";

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Modal } from "../../components/Modal";

export const Dashboard = () => {

    const { loading, modal } = useContext(VacanciesContext)
    
  return (
    <>
    <Header />
    <MainContent>
      <Form />
      {loading ? <p className="dashboard-loading">Carregando...</p> : <VacanciesList />}
    <Modal display={modal === "close" ? "none" : "flex"}/>
    </MainContent>
    <ToastContainer/>
    </>
  );
};
