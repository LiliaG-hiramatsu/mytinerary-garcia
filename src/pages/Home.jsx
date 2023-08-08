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
        <main className="w-4/5 ml-[219px] mt-[414px] flex justify-between mb-[400px]">
            <div className="w-[742px] h-[304px] flex flex-col gap-10">
                <h1 className="w-[742px] h-[64px] font-bold text-[48px] leading-10">Find the perfect destination</h1>
                <p className="w-[628px] h-[96px] text-[24px] font-semibold leading-8 text-[#1C1C1C99]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className="w-[346px] h-[64px] rounded-lg py-4 px-5 flex gap-4 justify-center bg-indigo-600 text-white text-[24px] font-semibold leading-8">
                    <Anchor to='/cities'>View More</Anchor>
                </button>
            </div>
            <Carousel data={data} />
        </main>
    )
}
