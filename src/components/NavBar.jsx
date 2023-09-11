import { useState } from "react";
import Display from "./Display";
import Label from "./Label";
import { useSelector } from "react-redux";

export default function NavBar() {
  let [show, setShow] = useState(false);
  let option = [
    { to: "/", title: "Home" },
    { to: "/cities", title: "Cities" },
  ];
  const user = useSelector((store) => store.users.user);
  return (
    <header
      className="mt-[32px] mx-[50px]
    md:mx-[100px]
    lg:mx-[80px]
    xl:mx-[120px]
    2xl:mx-[200px]
    min-[1800px]:mx-[250px]
    min-[2000px]:mx-[300px]
    min-[2500px]:mx-[400px]"
    >
      <div
        className="flex justify-between items-center
        md:hidden"
      >
        <div className="flex flex-col items-start">
          {show && (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          {show ? (
            <Display option={option} />
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
        </div>
        {!show && user.mail && (
          <div className="flex justify-end items-center">
            <img
              src={user.photo}
              alt={user._id}
              className="w-10 h-10 rounded-full border-2 mr-2 border-indigo-700"
            />
            <span className="capitalize font-semibold text-center">
              {user.name}
            </span>
          </div>
        )}
      </div>
      <nav
        className="hidden
        md:w-full md:flex md:justify-between md:items-center"
      >
        <h1
          className="flex font-bold text-[28px]
                lg:text-[32px]
                2xl:text-[40px]
                min-[2500px]:text-[50px]"
        >
          My Tinerary
        </h1>
        <div className="flex justify-end">
          <Label option={option} />
          {user.mail && (
            <div className="flex justify-end items-center">
              <img
                src={user.photo}
                alt={user._id}
                className="w-12 h-12 rounded-full border-2 mx-2 border-indigo-700
                        lg:ml-4"
              />
              <span className="capitalize font-semibold text-center">
                {user.name}
              </span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
