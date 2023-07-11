import './App.css'
import { router } from "./routes"
import { GlobalStyles } from './styles/global'

import { RouterProvider  } from 'react-router-dom'

function App() {

  return (
    <>
        <GlobalStyles />
        <RouterProvider router={router} />
    </>
  )
}

export default App
