import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import activity_actions from "../store/actions/activities"
import { useParams } from "react-router-dom"

const { read_activities_from_itinerary } = activity_actions

export default function Activities() {
    const { itinerary_id } = useParams()
    const dispatch = useDispatch()
    const activities_from_itinerary = useSelector(store => store.activities)
    console.log(activities_from_itinerary)
    useEffect(
        () => {
            dispatch(read_activities_from_itinerary({id: itinerary_id}))
        },
        []
    )
    
    return (
        <div className="flex flex-col items-center">
            Activities under construction
        </div>
    )
}
