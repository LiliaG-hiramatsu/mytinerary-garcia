import { useParams } from "react-router-dom"

export default function CityDetail() {
    const { city_id } = useParams()
    // Este hook se engancha a la URL para evaluar todos lo parametros dinamicos que tiene la URL
    // Este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
    // y donde cada VALOR es el valor de la URL.
    return (
        <div className="mx-5">CityDetail of city {city_id} under construction</div>
    )
}
