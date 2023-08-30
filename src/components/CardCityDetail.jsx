import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import itinerary_actions from '../store/actions/itineraries'
import ItinerariesCard from "./ItinerariesCard"

const { read_itineraries_from_city } = itinerary_actions

/* eslint-disable react/prop-types */
export default function CardCityDetail({ src, alt, text, id, description }) {
    const [show, setShow] = useState(false)
    const itineraries_from_city = useSelector(store => store.itineraries.itineraries_from_city)
    //console.log(itineraries_from_city)
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(read_itineraries_from_city({city_id: id}))
        },
        []
    )
    
    return (
        <div className="flex flex-col items-center mb-10">
            <h1 className="text-[20px] font-semibold text-center
            lg:text-[24px]
            xl:text-[28px]">
                {text}
            </h1>
            <img src={src} alt={alt} className="my-5 shadow-lg" />
            <p className="text-[14px] text-justify
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">
                {description}
            </p>
            <button onClick={() => setShow(!show)} className="bg-indigo-500 px-4 py-2 my-8 rounded-lg text-slate-200 font-semibold hover:bg-indigo-700 hover:text-white">
                { show ? ('Hide itineraries') : ('View itineraries') }
            </button>
            { show && itineraries_from_city.map((each, index) => 
                <ItinerariesCard
                    key={index}
                    src={each.photo}
                    alt={each.city_id}
                    text={each.name}
                />
            )}
        </div>
    )
}
