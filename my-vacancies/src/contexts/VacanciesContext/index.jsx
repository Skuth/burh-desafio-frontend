/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

import { useForm } from "react-hook-form";

export const VacanciesContext = createContext();

export const VacanciesProvider = ({ children }) => {
  const [listVacancies, setListVacancies] = useState([]);

  const {
    register,
    handleSubmit,
    /* formState: { errors }, */
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setListVacancies((dataPrev) => [...dataPrev, data]);

    reset();
  };

  return (
    <VacanciesContext.Provider
      value={{
        listVacancies,
        setListVacancies,
        register,
        handleSubmit,
        onSubmit
      }}
    >
      {children}
    </VacanciesContext.Provider>
  );
};
