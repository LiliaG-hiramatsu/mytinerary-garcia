export default function NavBar() {
    return (
        <header className="w-4/5 mt-[32px] ml-[219px] flex justify-between items-center">
            <span className="font-bold text-[32px] leading-10">My Tinerary</span>
            <nav className="flex justify-center items-center gap-8">
                <a href="#" className="font-bold text-[24px] leading-8">Home</a>
                <a href="#" className="font-bold text-[24px] leading-8">Cities</a>
                <button className="rounded-[10px] py-[16px] px-[32px] flex justify-center items-center gap-2.5 bg-indigo-600 font-bold text-[24px] leading-8 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                    Login
                </button>
            </nav>
        </header>
    )
}
