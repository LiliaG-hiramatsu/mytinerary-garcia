/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2"

const { logout } = user_actions;

export default function Display({ option }) {
    const [show, setShow] = useState(true)  // Estado para que cada vez que haga click en una opcion del menu, este se oculte.
    // show empieza en true, entonces el menu hamburguesa esta desplegado (icono de cruz)
    // cuando show sea false (que es cuando haga click en alguna opcion del menu), se tiene que cerrar el menu (icono menu hamburguesa)
    const dispatch = useDispatch();
    const user = useSelector(store => store.users.user)
    return (
        <>
            {show ? (
                <>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 cursor-pointer {`${show ? 'block' : 'hidden'}`}
                                md:hidden"
                    onClick={() => setShow(!show)}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                    <div className="w-fit flex flex-col justify-between
                        md:hidden">
                        {option.map((each) => (
                            <Anchor
                                key={each.to}
                                to={each.to}
                                className="font-bold text-[20px] text-start mt-2"
                                onClick={() => setShow(!show)}>
                                {each.title}
                            </Anchor>
                        ))}
                        {user.mail ? (
                        <Anchor
                            to=""
                            onClick={() => dispatch(logout())
                                &&
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Logged Out!'
                                })
                                && 
                                setShow(!show)}
                            className="bg-[#4F46E5] hover:bg-indigo-700 text-white px-[16px] py-[8px] rounded-lg font-bold text-[20px] text-start mt-2"
                        >
                            Sign Out
                        </Anchor>
                        ) : (
                        <Anchor
                            to="/signin"
                            className="flex items-center bg-[#4F46E5] hover:bg-indigo-700 text-white px-[16px] py-[8px] rounded-lg font-bold text-[20px] text-start mt-2"
                            onClick={() => setShow(!show)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 mr-1"
                            >
                            <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clipRule="evenodd"
                            />
                            </svg>
                            Login
                        </Anchor>
                        )}
                    </div>
                </>
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
        </>
    );
}
