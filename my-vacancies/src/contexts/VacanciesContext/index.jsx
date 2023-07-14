/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const VacanciesContext = createContext();

export const VacanciesProvider = ({ children }) => {
  const [listVacancies, setListVacancies] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    /* formState: { errors }, */
    reset,
  } = useForm();

  const toastSuccessAdd = () => {
    toast.success("Vaga adicionada com sucesso!");
  };
  const toastErrorInternal = () => {
    toast.error("Ocorreu um erro inesperado, tente novamente mais tarde.");
  };
  const toastErrorTimeout = () => {
    toast.error(
      "Não foi possível estabelecer uma conexão com o servidor, tente novamente mais tarde."
    );
  };
  const toastErrorTimeoutUser = () => {
    toast.error(
      "Sua conexão parece estar lenta, não foi possível realizar a simulação."
    );
  };
  const toastSuccessDelete = () => {
    toast.success("Vaga deletada com sucesso!");
  };

  const onSubmit = (data) => {
    setLoading(true);
    api
      .post("/vacancies", {
        url: data.url,
        platform: data.platform,
        status: data.status,
        date: data.date,
        wage: data.wage,
        isNational: data.isNational,
      })
      .then(() => setHistory("post"))
      .then(toastSuccessAdd())
      .catch((err) => {
        if (err.message === "Request failed with status code 500") {
          toastErrorInternal();
        } else if (err.message === "Request failed with status code 408") {
          toastErrorTimeout();
        } else if (err.message === "timeout of 5000ms exceeded") {
          toastErrorTimeoutUser;
        }
      });

    reset();
  };

  useEffect(() => {
    const handleData = async () => {
      setLoading(true);
      const vacancies = await api
        .get("/vacancies")
        .finally(() => setLoading(false));
      setListVacancies(vacancies.data);
    };
    handleData();
  }, [history]);

  const deleteVacancie = async (vacancieId) => {
    await api.delete(`/vacancies/${vacancieId}`).then(toastSuccessDelete());
    setHistory("delete");
  };

  return (
    <VacanciesContext.Provider
      value={{
        listVacancies,
        setListVacancies,
        register,
        handleSubmit,
        onSubmit,
        loading,
        deleteVacancie,
      }}
    >
      {children}
    </VacanciesContext.Provider>
  );
};
