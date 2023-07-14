import { HeaderStyles } from "./styles";

import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyles>
        <h1>My Vacancies</h1>
        <button onClick={() => navigate("/")}>
          <AiOutlineHome />
        </button>
      </HeaderStyles>
    </>
  );
};
