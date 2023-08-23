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
    })
    //console.log(city)
    return (
        <div className="w-3/4 min-h-screen mx-[50px] mt-4 flex flex-col items-end
        md:w-4/5 md:mx-[100px]
        min-[1400px]:mx-[150px]
        min-[1700px]:mx-[250px]">
            <Anchor to={'/cities/'} className="mb-10">
                <button className="bg-black px-2 py-1 mt-10 rounded text-[12px] text-white cursor-pointer hover:bg-[#282472]
                md:px-3 md:py-1 md:rounded-lg md:text-[14px]">
                    Back
                </button>
            </Anchor>
            <div className="flex flex-col items-center">
                <h1 className="text-[20px] font-semibold text-center
                lg:text-[24px]
                xl:text-[28px]">
                    {city.city}
                </h1>
                <img src={city.photo} alt="City photo" className="my-5 shadow-lg" />
                <p className="text-[14px] text-justify
                md:text-[16px]
                lg:text-[18px]
                xl:text-[20px]">
                    {city.description}
                </p>
                <p className="text-[14px] text-gray-400 my-5
                md:text-[16px]
                lg:text-[18px]
                xl:text-[20px]">
                    CityDetail of {city.city} under construction
                </p>
            </div>
        </div>
    )
}
