/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import activity_actions from "../store/actions/activities"

const { read_activities_from_itinerary } = activity_actions

export default function Activities({ id_itinerary }) {
    const dispatch = useDispatch()
    const activities_from_itinerary = useSelector(store => store.activities.activities_from_itinerary)
    console.log(activities_from_itinerary)
    useEffect(
        () => {
            dispatch(read_activities_from_itinerary({itinerary_id: id_itinerary}))
        },
        []
    )
    // Surgio un nuevo problema que probablemente tenga relacion con lo que me pasaba al principio, que se muestran los detalles de todos los itinerarios
    // cuando solo quiero mostrar uno. Lo que pasa ahora es que cuando doy en "show activities" en un itinerario, se hace el dispatch correspondiente
    // pero despues le doy en "show activities" en otro itinerario posterior de esa misma city, y se hace el mismo dispatch pero con los datos de ese itinerario
    // y me queda en las activities del primer itinerario con las activities del segundo, y si sucesivamente si quisiera mostrar
    // las activities de otros itinerarios posteriores.
    return (
        <>
            <div className="w-full flex justify-between mb-5">
                {activities_from_itinerary?.map(each =>
                    <div key={each._id} className="w-1/3 flex flex-col items-center p-2 m-3 bg-indigo-50 rounded-xl">
                        <img src={each.photo} alt={each._id} className="w-full h-16 object-cover rounded-xl" />
                        <h1 className="text-[14px] my-1 mb-4">{each.name}</h1>
                    </div>    
                )}
            </div>
            <div className="flex flex-col items-center">
                <h1>Comments</h1>
            </div>
        </>
    )
}
