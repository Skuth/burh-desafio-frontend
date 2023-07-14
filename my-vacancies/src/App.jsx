import "./App.css";
import { router } from "./routes";
import { GlobalStyles } from "./styles/global";
import { VacanciesProvider } from "./contexts/VacanciesContext";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <VacanciesProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </VacanciesProvider>
    </>
  );
}

export default App;
