import { useState } from "react"
import { useSelector } from "react-redux"
import Activities from './Activities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable react/prop-types */
export default function ItinerariesCard() {
    const [like, setLike] = useState(false)
    const count = 0
    const [show, setShow] = useState(false)
    const [view, setView] = useState(false)
    const itineraries_from_city = useSelector(store => store.itineraries.itineraries_from_city)
    //console.log(itineraries_from_city)
    
    return (
        <>
            {itineraries_from_city?.map(each => 
                <div key={each._id} className="w-full flex flex-col p-3 m-3 bg-white
                md:w-2/3 md:p-5 md:m-5
                lg:p-6 lg:m-6">
                    <h1 className="mb-1 text-[16px] font-semibold text-center
                    md:m-2 md:text-[20px]">{each.name}</h1>
                    <img src={each.photo} alt={each._id} className="h-fit"/>
                    <div className="flex flex-row justify-between my-4">
                        <div className="flex flex-row flex-start">
                            {like ?
                                (<svg onClick={() => setLike(!like)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                                ) : (
                                <svg onClick={() => setLike(!like)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                )
                            }
                            <span className="ml-2">
                                {like ? count+1 : count }
                            </span>
                        </div>
                        {show ?
                            (<svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                            </svg>
                            ) : 
                            (<svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>)
                        }
                    </div>
                    {show && 
                        <div className="flex flex-col">
                            <div className="flex flex-col items-center
                            md:flex md:flex-row md:justify-around md:items-start">
                                <div className="flex flex-col items-center gap-2">
                                    <img src={each.city_id.admin_id.photo} alt={each.city_id.admin_id._id} className="w-20 h-20 rounded-full" />
                                    <p>{each.city_id.admin_id.name}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="my-1 font-semibold">Hashtags</h1>
                                    {each.tags.map((tag, index) => <p key={index} className="text-indigo-500 font-semibold">{tag}</p>)}
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="my-1 font-semibold">Duration</h1>
                                    <p>{(each.duration/60).toFixed(2)} hours</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="my-1 font-semibold">
                                        Price    
                                    </h1>
                                    {each.price < 50 && <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />}
                                    {each.price >= 50 && each.price < 75 &&
                                    <div className="flex flex-col">
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                    </div>}
                                    {each.price >= 75 && each.price < 100 &&
                                    <div className="flex flex-col">
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                    </div>}
                                    {each.price >= 100 && each.price < 150 &&
                                    <div className="flex flex-col">
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                        <FontAwesomeIcon icon={faMoneyBill1} size="lg" style={{color: "#147658"}} />
                                    </div>}
                                    {each.price >= 150 && each.price <= 200 &&
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
                    }
                </div>
            )}
            {itineraries_from_city.length === 0 && <img src="/noItineraries.png" alt="no itineraries" className="w-1/3 self-center" />}
        </>
    )
}