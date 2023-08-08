/*
  import NavLayout from "./layouts/NavLayout"
  import Home from "./pages/Home"
*/
import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {
  return (
    /*
      <NavLayout>
        <Home />
      </NavLayout>
    */
    <RouterProvider router={router} />
  )
}

export default App
