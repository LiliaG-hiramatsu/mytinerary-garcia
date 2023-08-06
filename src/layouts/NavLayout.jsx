import NavBar from "../components/NavBar"

export default function NavLayout({ children }) {
    return (
        <div className="w-full min-h-screen bg-[#EBEBEB] font-sans flex flex-col">
            <NavBar />
            {children}
        </div>
    )
}
