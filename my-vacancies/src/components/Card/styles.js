import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardStyles = styled.li`
  width: 95%;
  height: 280px;
  margin: 10px auto;
  position: relative;

  border: 1px solid var(--color-blue);

  .vacancie-card__url {
    margin: 10px;
  }

  span {
    display: flex;
  }

  .card-button__delete {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;
    background-color: var(--color-red);
    cursor: pointer;

    color: var(--color-white-fixed);
  }

  .card-button__edit {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 60px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;
    background-color: var(--color-dark-yellow);
    cursor: pointer;

    color: var(--color-white-fixed);
  }

  @media (min-width: 800px) {
    max-width: 800px;
  }
`;

export const LinkStyles = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-blue);
`;
