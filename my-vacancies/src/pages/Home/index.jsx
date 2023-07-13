import { MainContentHome } from "./styles";

import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <MainContentHome>
      <h1>
        Se organize melhor, e se prepare para o próximo passo na sua carreira
      </h1>
      <button onClick={() => navigate("/dashboard")}>Iniciar</button>
    </MainContentHome>
  );
};
