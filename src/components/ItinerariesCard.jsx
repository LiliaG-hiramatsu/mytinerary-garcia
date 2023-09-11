import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import ItineraryDetail from "./ItineraryDetail";
import Likes from "./Likes";
import Arrow from "./Arrow";

const { read_itineraries_from_city } = itinerary_actions;

/* eslint-disable react/prop-types */
export default function ItinerariesCard({ id_from_city }) {
  

  const dispatch = useDispatch();
  const itineraries_from_city = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  //console.log(itineraries_from_city)
  useEffect(() => {
    dispatch(read_itineraries_from_city({ city_id: id_from_city })); //despacho la accion a la cual le paso el id de la ciudad
  }, []);
  return (
    <>
      {itineraries_from_city?.map((each) => (
        <div
          key={each._id}
          className="w-full flex flex-col p-3 m-3 bg-white
                        md:w-2/3 md:p-5 md:m-5
                        lg:p-6 lg:m-6"
        >
          <h1
            className="mb-1 text-[16px] font-semibold text-center
                            md:m-2 md:text-[20px]"
          >
            {each.name}
          </h1>
          <img src={each.photo} alt={each._id} className="h-fit" />
          <div className="flex justify-start mt-4">
            <Likes id_from_itinerary={each._id} />
          </div>
          <ItineraryDetail
            src={each.city_id.admin_id.photo}
            alt={each.city_id.admin_id._id}
            name={each.city_id.admin_id.name}
            tags={each.tags}
            duration={each.duration}
            price={each.price}
            id_from_itinerary={each._id}
          />
        </div>
      ))}
      {itineraries_from_city.length === 0 && (
        <img
          src="/noItineraries.png"
          alt="no itineraries"
          className="w-1/3 self-center"
        />
      )}
    </>
  );
}
