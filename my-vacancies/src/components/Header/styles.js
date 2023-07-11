import styled from "styled-components";

export const HeaderStyles = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;

  h1 {
    margin-left: 50px;

    font-size: 25px;
    font-weight: 600;
    color: var(--color-blue);
  }

  button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-right: 50px;

    border: 1px solid var(--color-blue);
    border-radius: 5px;
    cursor: pointer;

    font-size: 18px;
    color: var(--color-blue);
  }

  button:hover {
    background-color: var(--color-blue);
    color: var(--color-white-fixed);
  }
`;
