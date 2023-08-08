import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

export default function NavLayout() {
    return (
        <div className="w-full min-h-screen bg-[#EBEBEB] font-sans flex flex-col">
            <NavBar />
            <Outlet />
        </div>
    )
}
