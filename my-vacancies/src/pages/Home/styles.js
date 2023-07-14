import { styled } from "styled-components";

export const MainContentHome = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue);

  h1 {
    width: 400px;
    height: 80px;

    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: var(--color-white-fixed);
  }

  button {
    width: 250px;
    height: 40px;
    margin: 15px auto;

    border: none;
    border-radius: 10px;
    background-color: var(--color-white-fixed);
    cursor: pointer;

    font-size: 18px;
    font-weight: 600;
    color: var(--color-blue);
  }
`;
