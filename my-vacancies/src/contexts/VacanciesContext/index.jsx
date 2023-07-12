/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

import { useForm } from "react-hook-form";
import { api } from "../../services/api";

export const VacanciesContext = createContext();

export const VacanciesProvider = ({ children }) => {
  const [listVacancies, setListVacancies] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    /* formState: { errors }, */
    reset,
  } = useForm();

  const handleData = async () => {
    const vacancies = await api.get("/vacancies").finally(() => setLoading(false))
    setListVacancies(vacancies.data)
}

  const onSubmit = (data) => {
    setLoading(true)
    api
      .post("/vacancies", {
        url: data.url,
        platform: data.platform,
        status: data.status,
        date: data.date,
        wage: data.wage,
        isNational: data.isNational,
      })
      .then(handleData)
      .catch((err) => console.log(err))

    reset();
  };
  

  return (
    <VacanciesContext.Provider
      value={{
        listVacancies,
        setListVacancies,
        register,
        handleSubmit,
        onSubmit,
        loading
      }}
    >
      {children}
    </VacanciesContext.Provider>
  );
};
