/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { api } from "../../services/api";

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
      .then((res) => setHistory((dataPrev) => [...dataPrev, res.data]))
      .catch((err) => console.log(err));

    reset();
  };

  useEffect(() => {
    const handleData = async () => {
        setLoading(true)
        const vacancies = await api
          .get("/vacancies")
          .finally(() => setLoading(false));
        setListVacancies(vacancies.data);
      };
    handleData()
  }, [history])

  const deleteVacancie = (vacancieId) => {
    api.delete(`/vacancies/${vacancieId}`).then(setHistory("delete"))
  }

  return (
    <VacanciesContext.Provider
      value={{
        listVacancies,
        setListVacancies,
        register,
        handleSubmit,
        onSubmit,
        loading,
        deleteVacancie
      }}
    >
      {children}
    </VacanciesContext.Provider>
  );
};
