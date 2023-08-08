import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NavLayout from "./layouts/NavLayout"
import Cities from "./pages/Cities"
import CityDetail from "./pages/CityDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <NavLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/cities", element: <Cities /> },
            { path: "/city/:city_id", element: <CityDetail /> },
            { path: "/*", element: <NotFound /> }
        ]
    }
])

export default router