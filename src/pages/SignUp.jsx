import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function SignUp() {
  const name = useRef();
  const lastName = useRef();
  const country = useRef();
  const photo = useRef();
  const mail = useRef();
  const password = useRef();

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full mt-5 flex justify-between bg-gradient-to-r from-indigo-950 to-indigo-600">
      <h1 className="mt-80 ml-[180px] text-[48px] font-bold text-slate-200">My Tinerary</h1>
      <div className="w-1/3 mx-[180px] my-[100px] flex flex-col items-center py-5 bg-white rounded-lg">
        <h1 className="mb-5 text-[24px] font-bold">Create an account</h1>
        <form className="w-full flex flex-col items-center">
          <input
            className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            ref={name}
            type="text"
            name="name"
            id="name"
            placeholder="Type Name"
          />
          <input
            className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            ref={lastName}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Type Lastname"
          />
          <input
            className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            ref={country}
            type="text"
            name="country"
            id="country"
            placeholder="Type Country"
          />
          <input
            className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            ref={photo}
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo"
          />
          <input
            className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            ref={mail}
            type="text"
            name="mail"
            id="mail"
            placeholder="Type Mail"
          />
          <input
            className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Type Password"
          />
          <input
            className="w-1/2 my-4 px-3 py-2 rounded bg-indigo-200 hover:bg-indigo-500 hover:text-white cursor-pointer"
            type="button"
            value="Sign Up!"
            onClick={handleSignUp}
          />
          <p className="flex gap-1 text-gray-500">
            Already have an account?
            <Anchor to="/signin" className="text-black font-semibold hover:text-indigo-500">Sign In</Anchor>
          </p>
        </form>
      </div>
    </div>
  );
}
