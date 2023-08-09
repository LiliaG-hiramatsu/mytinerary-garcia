import { useState, useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"
import { Link as Anchor } from "react-router-dom"

export default function Home() {
    const [data, setData] = useState([])
    useEffect(
        () => {
            axios('/data.json')
                .then(res => setData(res.data))
                .catch(err=>console.log(err))
        },          // callback que No debe retornar nada y NO puede ser asincrona
        []          // array de dependencias
                    // cuando esta vacio, EL EFECTO se ejecuta una unica vez cuando se monta el componente
                    // cuando tiene variables de dependencias, EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que cambia alguna de esas variables
        // [show]   // es ese ejemplo CADA VEZ que el booleano cambie, se ejecuta la callback de la linea 24
    )
    
    return (
        <main className="mx-[50px] my-[100px] flex flex-col flex-wrap
        md:mx-[100px] md:my-[150px]
        lg:mx-[200px] lg:my-[318px] lg:flex-row lg:justify-between lg:flex-nowrap">
            <div className="flex flex-col gap-5 items-center
            md:w-fit md:gap-7
            lg:gap-10 lg:items-start">
                <h1 className="font-bold text-[24px] leading-8
                md:text-[38px] md:leading-10
                lg:text-[48px] lg:leading-tight">Find the perfect destination</h1>
                <p className="text-[18px] leading-6 font-semibold text-[#1C1C1C99]
                md:w-5/6 md:text-[20px] md:leading-8
                lg:text-[24px]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className="w-2/3 rounded-lg py-[8px] px-[10px] flex justify-center bg-indigo-600 text-white text-[15px] font-semibold
                md:py-[13px] md:px-[15px] md:gap-4 md:text-[18px] md:leading-8
                lg:w-1/2 lg:py-[16px] lg:px-[20px] lg:text-[24px]
                xl:w-5/12">
                    <Anchor to='/cities'>View More</Anchor>
                </button>
            </div>
            <Carousel data={data} />
        </main>
    )
}
