import styled from "styled-components";

export const FormStyles = styled.form`
  width: 95%;
  height: 560px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  border: 1px solid var(--color-blue);

  label {
    font-size: 18px;
    margin: 10px 0px 10px 2.5%;
  }

  input,
  select {
    width: 95%;
    height: 40px;
    margin: 0 auto;

    outline: none;
    border: none;
    border-radius: 10px;
    background-color: var(--color-light-gray);

    font-size: 18px;
    text-align: center;
  }

  span {
    margin: 8px 0px 0px 10px;

    font-size: 14px;
    color: var(--color-dark-gray);
  }

  button {
    width: 95%;
    height: 40px;
    margin: 15px auto;

    border: none;
    border-radius: 10px;
    background-color: var(--color-blue);
    cursor: pointer;

    font-size: 18px;
    color: var(--color-white-fixed);
  }

  @media (min-width: 750px) {
    max-width: 750px;
    height: 580px;
    margin: 20px;

    span {
      margin-left: 20px;
    }
  }
`;
