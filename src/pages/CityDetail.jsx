import { useEffect } from "react"
import {  useParams } from "react-router-dom"
import { Link as Anchor } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"
import CardCityDetail from "../components/CardCityDetail"
const { read_city } = city_actions

export default function CityDetail() {
    const { city_id } = useParams()
    // Este hook se engancha a la URL para evaluar todos lo parametros dinamicos que tiene la URL
    // Este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
    // y donde cada VALOR es el valor de la URL.
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(read_city({ id:city_id }))
    }, [])
    
    const city = useSelector(store => store.cities.city)
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
            <CardCityDetail
                name_city={city.city}
                photo_city={city.photo}
                description_city={city.description}
                id_city={city.city_id}
            />
        </div>
    )
}
