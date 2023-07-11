import { HeaderStyles } from "./styles";

import { AiOutlineHome } from "react-icons/ai"

export const Header = () => {
  return (
    <>
      <HeaderStyles>
        <h1>My Vacancies</h1>
        <button><AiOutlineHome /></button>
      </HeaderStyles>
    </>
  );
};
