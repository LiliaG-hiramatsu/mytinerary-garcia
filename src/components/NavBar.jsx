import { useState } from "react";

export default function NavBar() {
    let [show, setShow] = useState(false)
    return (
    <header className="w-4/5 mt-[32px] ml-[219px] flex justify-between items-center">
        <span className="font-bold text-[32px]">My Tinerary</span>
        <nav className="flex justify-end px-10">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={()=>setShow(!show)}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
        {show ? (
            <div className="flex ms-5 absolute top-[80px] rigth-[80px] flex-col">
                <p className="font-bold text-[24px] px-2 bg-white rounded-xl w-[100px] text-center my-1">
                Home
                </p>
                <p className="font-bold text-[24px] px-2 bg-white rounded-xl w-[100px] text-center my-1">
                Cities
                </p>
                <button className="rounded-[10px] py-[16px] px-[32px] flex justify-center items-center gap-2.5 bg-indigo-600 font-bold text-[24px] text-white my-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                    />
                </svg>
                Login
                </button>
            </div>
        ) : (null)}
        
        </nav>
    </header>
    );
}
