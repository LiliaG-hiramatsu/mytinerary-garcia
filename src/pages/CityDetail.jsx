import axios from "axios"
import { useEffect, useState } from "react"
import apiUrl from '../apiUrl'
import {  useParams } from "react-router-dom"
import { Link as Anchor } from 'react-router-dom'

export default function CityDetail() {
    const [city, setCity] = useState({})
    const { city_id } = useParams()
    // Este hook se engancha a la URL para evaluar todos lo parametros dinamicos que tiene la URL
    // Este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
    // y donde cada VALOR es el valor de la URL.

    useEffect(() => {
            axios(apiUrl+'cities/'+city_id)
            //.then(res => console.log(res.data.response))
            .then(res => setCity(res.data.response))
            .catch(err => console.log(err))
    }, [])
    //console.log(city)
    return (
        <div className="w-3/5 min-h-screen mx-64 mt-20 flex flex-col items-end">
            <Anchor to={'/cities/'} className="mb-10">
                <button className="bg-black px-3 py-1 rounded-xl text-white cursor-pointer hover:bg-[#282472]">
                    Back
                </button>
            </Anchor>
            <div className="self-center">
                <h1 className="text-[24px] font-semibold text-center">{city.city}</h1>
                <img src={city.photo} alt="City photo" className="my-5 shadow-lg" />
                <p>{city.description}</p>
                <p className="text-gray-400 my-5">CityDetail of {city.city} under construction</p>
            </div>
        </div>
    )
}
