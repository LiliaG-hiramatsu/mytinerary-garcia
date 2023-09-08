import { useRef, useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from 'react-redux'
import user_actions from '../store/actions/users'
const { read_users } = user_actions

export default function SignUp() {
  const name = useRef();
  const lastName = useRef();
  const country = useRef();
  const photo = useRef();
  const mail = useRef();
  const password = useRef();

  const [reload, setReload] = useState(false)

  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(read_users())
    },
    [reload]
  )

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(
        //requiere dos parametros:
        //url del endpoint de creacion
        //objeto con los datos a crear
        apiUrl + "users/signup",
        data
      );
      setReload(!reload)
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full min-h-screen mt-5 flex flex-col bg-gradient-to-r from-indigo-950 to-indigo-600
    lg:flex-row lg:justify-between">
      <h1 className="font-bold text-slate-200 self-center mt-14 text-[28px]
            md:text-[36px]
            lg:ml-[180px] lg:text-[48px]
            min-[1800px]:ml-[350px]
            min-[2300px]:ml-[500px]">My Tinerary</h1>
      <div className="flex flex-col items-center bg-white rounded-lg m-6 px-2 py-8
            md:w-1/2 md:self-center md:py-16
            lg:mx-[120px] lg:my-[100px] lg:py-10
            min-[1440px]:w-1/3 min-[1440px]:mr-[200px]
            min-[1800px]:w-1/4 min-[1800px]:mr-[350px] min-[1800px]:py-20
            min-[2300px]:mr-[500px]">
        <h1 className="mb-4 text-[20px] font-bold
        lg:mb-5 lg:text-[24px]">Create an account</h1>
        <form className="w-full flex flex-col items-center">
          <input
            className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
            ref={name}
            type="text"
            name="name"
            id="name"
            placeholder="Type Name"
          />
          <input
            className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
            ref={lastName}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Type Lastname"
          />
          <input
            className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
            ref={country}
            type="text"
            name="country"
            id="country"
            placeholder="Type Country"
          />
          <input
            className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
            ref={photo}
            type="text"
            name="photo"
            id="photo"
            placeholder="URL photo"
          />
          <input
            className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
            ref={mail}
            type="text"
            name="mail"
            id="mail"
            placeholder="Type Mail"
          />
          <input
            className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Type Password"
          />
          <input
            className="w-2/3 my-2 px-3 py-2 rounded bg-indigo-300 hover:bg-indigo-500 hover:text-white cursor-pointer
            lg:w-1/2 lg:my-4"
            type="button"
            value="Sign Up!"
            onClick={handleSignUp}
          />
          <p className="flex flex-col text-gray-500
          md:flex-row md:gap-1">
            Already have an account?
            <Anchor to="/signin" className="text-black font-semibold hover:text-indigo-500">Sign In</Anchor>
          </p>
        </form>
      </div>
    </div>
  );
}
