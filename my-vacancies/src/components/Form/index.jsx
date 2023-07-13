/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FormStyles } from "./styles";
import { VacanciesContext } from "../../contexts/VacanciesContext";

export const Form = () => {
  const { register, handleSubmit, onSubmit } = useContext(VacanciesContext);

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="url">Link da vaga</label>
      <input
        type="url"
        id="url"
        placeholder="Insira a url da vaga"
        {...register("url")}
        required
      />
      <label htmlFor="platform">Plataforma</label>
      <input
        type="text"
        id="platform"
        placeholder="Digite a plataforma"
        {...register("platform")}
        required
      />
      <span>Ex: burh, linkedin</span>
      <label htmlFor="status">Situação</label>
      <select id="status" {...register("status")}>
        <option value="Não iniciado">Não iniciado</option>
        <option value="Candidatura Enviada">Candidatura enviada</option>
        <option value="Triagem">Triagem</option>
        <option value="Entrevista comportamental">
          Entrevista comportamental
        </option>
        <option value="Entrevista técnica">Entrevista técnica</option>
        <option value="Teste técnico">Teste técnico</option>
      </select>
      <label htmlFor="date">Data</label>
      <input
        type="date"
        id="date"
        placeholder="Selecione a data"
        {...register("date")}
        required
      />
      <label htmlFor="wage">Salário</label>
      <input
        type="number"
        id="wage"
        placeholder="Digite o valor"
        {...register("wage")}
        required
      />
      <label htmlFor="isNational">A vaga é nacional?</label>
      <select id="isNational" {...register("isNational")}>
        <option value="yes">Sim</option>
        <option value="no">Não</option>
      </select>
      <button type="submit">Adicionar</button>
    </FormStyles>
  );
};
