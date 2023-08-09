import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout"
import Cities from "./pages/Cities"
import Login from "./pages/Login"
import CityDetail from "./pages/CityDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/cities", element: <Cities /> },
            { path: "/login", element: <Login /> },
            { path: "/city/:city_id", element: <CityDetail /> },
            { path: "/*", element: <NotFound /> }
        ]
    }
])

export default router