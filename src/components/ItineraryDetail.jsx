/* eslint-disable react/prop-types */
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons'
import Activities from './Activities'

export default function ItineraryDetail({ src, alt, name, tags, duration, price }) {
    const [view, setView] = useState(false)
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center
            md:flex md:flex-row md:justify-around md:items-start">
                <div className="flex flex-col items-center gap-2">
                    <img src={src} alt={alt} className="w-20 h-20 rounded-full" />
                    <p>{name}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="my-1 font-semibold">Hashtags</h1>
                    {tags.map((tag, index) => <p key={index} className="text-indigo-500 font-semibold">{tag}</p>)}
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="my-1 font-semibold">Duration</h1>
                    <p>{(duration/60).toFixed(2)} hours</p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="my-1 font-semibold">
                        Price    
                    </h1>
                    {price < 50 && <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />}
                    {price >= 50 && price < 75 &&
                    <div className="flex flex-col">
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                    </div>}
                    {price >= 75 && price < 100 &&
                    <div className="flex flex-col">
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                    </div>}
                    {price >= 100 && price < 150 &&
                    <div className="flex flex-col">
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                    </div>}
                    {price >= 150 && price <= 200 &&
                    <div className="flex flex-col">
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                    </div>}
                </div>
            </div>
            <button onClick={() => setView(!view)}
                className="w-28 self-center bg-pink-300 px-2 py-1 my-8 rounded-lg font-semibold hover:bg-pink-400 hover:text-white cursor-pointer
                lg:w-48 lg:px-4 lg:py-2">
                {view ? 
                    <span className="flex justify-center">View less</span> 
                    : 
                    <span className="flex justify-center">View more</span>
                }
            </button>
            {view && <Activities />}
        </div>
    )
}
