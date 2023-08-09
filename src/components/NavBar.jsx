import { useState } from "react";
import Display from "./Display";
import Label from "./Label";

export default function NavBar() {
    let [show, setShow] = useState(false);
    let optionLabel = [
        { to: "/", title: "Home" },
        { to: "/cities", title: "Cities" },
        {
            to: "/login",
            title: "Login",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4F46E5",
            color: "white",
            paddingInline: "32px",
            paddingBlock: "16px",
            borderRadius: "10px",
        },
    ];
    let optionDisplay = [
        { to: "/", title: "Home" },
        { to: "/cities", title: "Cities" },
        {
            to: "/login",
            title: "Login",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4F46E5",
            color: "white",
            paddingInline: "16px",
            paddingBlock: "8px",
            borderRadius: "8px",
        },
    ];
    return (
    <header className="mt-[32px] mx-[50px]
    md:mx-[100px]
    lg:mx-[200px]">
        {show && (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer
            md:hidden"
            onClick={() => setShow(!show)}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
            </svg>
        )}
        {show ? (
            <Display option={optionDisplay} />
        ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer
            md:hidden"
            onClick={() => setShow(!show)}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
        )}
        <nav className="w-full flex justify-between items-center">
        <h1
            className="hidden
            md:flex md:font-bold md:text-[28px]
            lg:text-[32px]
            2xl:text-[40px]"
        >
            My Tinerary
        </h1>
        <Label option={optionLabel} />
        </nav>
    </header>
    );
}
