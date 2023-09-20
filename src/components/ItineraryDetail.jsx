/* eslint-disable react/prop-types */
import { useState } from "react"
import Arrow from "./Arrow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons'
import Activities from './Activities'

export default function ItineraryDetail({ src, alt, name, tags, duration, price, id_from_itinerary }) {
    const [isShown, setIsShown] = useState(false);
    const [view, setView] = useState(false)

    return (
        <>
            <div className="flex justify-end">
                <Arrow
                    direction={
                    isShown
                        ? "M4.5 15.75l7.5-7.5 7.5 7.5"
                        : "M19.5 8.25l-7.5 7.5-7.5-7.5"
                    }
                    onClick={() => setIsShown(!isShown)}
                />
            </div>

            <div className="flex flex-col">
                {isShown && 
                <>
                    <div className="flex flex-col items-center gap-3
                    md:flex md:flex-row md:justify-around md:items-start">
                        <div className="flex flex-col items-center gap-2">
                            <img src={src} alt={alt} className="w-20 h-20 rounded-full" />
                            <p>{name}</p>
                        </div>
                        <div className="flex flex-row gap-2
                        md:flex-col md:items-center md:gap-0">
                            {tags.map((tag, index) => <p key={index} className="text-indigo-500 font-semibold">{tag}</p>)}
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">Duration:
                                <span className="ml-2 font-normal
                                md:block md:ml-0">
                                    {(duration/60).toFixed(2)} hours
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-semibold">
                                Price
                            </h1>
                            {price < 50 && <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />}
                            {price >= 50 && price < 75 &&
                            <div className="flex flex-row gap-1
                            md:flex-col">
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                            </div>}
                            {price >= 75 && price < 100 &&
                            <div className="flex flex-row gap-1
                            md:flex-col">
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                            </div>}
                            {price >= 100 && price < 150 &&
                            <div className="flex flex-row gap-1
                            md:flex-col">
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                            </div>}
                            {price >= 150 && price <= 200 &&
                            <div className="flex flex-row gap-1
                            md:flex-col">
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                            </div>}
                        </div>
                    </div>
                    <button onClick={() => setView(!view)}
                        className="w-28 text-[14px] self-center bg-indigo-200 px-2 py-1 my-8 rounded-lg hover:bg-indigo-500 hover:text-white cursor-pointer
                        md:w-32 md:text-[16px]
                        lg:w-36 lg:px-3 lg:py-1">
                        {view ? 
                            <span className="flex justify-center">Hide activities</span> 
                            : 
                            <span className="flex justify-center">Show activities</span>
                        }
                    </button>
                    {view && <Activities id_itinerary={id_from_itinerary} />}
                </>
                }
            </div>
        </>
    )
}

