import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import itinerary_actions from '../store/actions/itineraries'
import ItinerariesCard from "./ItinerariesCard"

const { read_itineraries_from_city } = itinerary_actions

/* eslint-disable react/prop-types */
export default function CardCityDetail({ src, alt, text, id, description }) {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(read_itineraries_from_city({city_id: id}))
        },
        []
    )
    return (
        <div className="w-full flex flex-col items-center mb-10">
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
            <button onClick={() => setShow(!show)}
                className="bg-indigo-500 px-3 py-1.5 my-8 text-[12px] shadow-md rounded-lg text-white hover:bg-gradient-to-r from-purple-500 to-pink-500
                md:text-[14px]
                lg:px-4 lg:py-2">
                { show ? ('Hide itineraries') : ('View itineraries') }
            </button>
            { show && <ItinerariesCard /> }
        </div>
    )
}
