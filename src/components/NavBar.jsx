export default function NavBar() {
    return (
        <header className="h-[64px] w-[1291px] mt-8 ml-56 fixed flex justify-between items-center">
            <span className="w-[183px] h-[43px] font-bold text-3xl leading-10">My Tinerary</span>
            <nav className="w-[354px] h-[64px] flex justify-center items-center gap-8">
                <a href="#" className="w-[69px] h-[32px] font-bold text-2x1 leading-8">Home</a>
                <a href="#" className="w-[62px] h-[32px] font-bold text-2x1 leading-8">Cities</a>
                <button className="w-[64px] h-[32px] rounded-xl py-2 px-4 flex justify-center items-center gap-2.5 bg-indigo-600 font-bold text-2x1 leading-8 text-white">Login</button>
            </nav>
        </header>
    )
}
