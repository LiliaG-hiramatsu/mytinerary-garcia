import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
        <div className="w-full min-h-screen bg-[#EBEBEB] font-sans flex flex-col justify-between">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
