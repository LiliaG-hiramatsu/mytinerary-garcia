import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link as Anchor } from "react-router-dom"
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
    const city = useSelector((store) => store.cities.city)
    //console.log(city)
    useEffect(() => {
            dispatch(read_city({ id: city_id }))
    }, [])

    return (
        <div className="w-3/4 min-h-screen mt-4 self-center
        md:w-4/5
        min-[1400px]:w-3/5">
            <Anchor to={'/cities/'} className="mb-10 flex">
                <button className="bg-black px-2 py-1 mt-10 rounded text-[12px] text-white cursor-pointer hover:bg-indigo-700
                md:px-3 md:py-1 md:rounded-lg md:text-[14px]">
                    Back
                </button>
            </Anchor>
            <CardCityDetail
                src={city.photo}
                alt={city_id}
                text={city.city}
                id={city_id}
                description={city.description}
            />
        </div>
    )
}
