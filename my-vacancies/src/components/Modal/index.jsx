/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ModalStyles } from "./styles";
import { VacanciesContext } from "../../contexts/VacanciesContext";
import { FormStyles } from "../Form/styles";

export const Modal = ({ display }) => {
  const { setModal, register, handleSubmit, onEdit } = useContext(VacanciesContext);

  return (
    <ModalStyles style={{ display: display }}>
      <h1>Editar informações</h1>
      <button className="modal-button__close" onClick={() => setModal("close")}>
        X
      </button>
      <FormStyles onSubmit={handleSubmit(onEdit)}>
        <label htmlFor="url">Link da vaga</label>
        <input
          type="url"
          id="url"
          placeholder="Editar url"
          {...register("url")}
          required
        />
        <label htmlFor="platform">Plataforma</label>
        <input
          type="text"
          id="platform"
          placeholder="Editar plataforma"
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
          placeholder="Editar salário"
          {...register("wage")}
          required
        />
        <label htmlFor="isNational">A vaga é nacional?</label>
        <select id="isNational" {...register("isNational")}>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
        <button type="submit">Editar</button>
      </FormStyles>
    </ModalStyles>
  );
};
