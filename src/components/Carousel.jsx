/* eslint-disable react/prop-types */
import CardPolaroid from "../components/CardPolaroid"
import Arrow from "../components/Arrow"
import { useState, useEffect } from "react"

export default function Carousel({ data }) {
    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)
    
    function next_slide() {
        if (data.length <= counterTo) {
            setCounter(0)
            setCounterTo(4)
        } else {
            setCounter(counter + 4)
            setCounterTo(counterTo + 4)
        }
    }
    function prev_slide() {
        if (counter <= 0) {
            setCounter(data.length - 4)
            setCounterTo(data.length)
        } else {
            setCounter(counter - 4)
            setCounterTo(counterTo - 4)
        }
    }
    
    useEffect(
        () => {
            setTimeout(() => {
                next_slide()
            }, 5000)
        }
    )

    return (
        <div className="flex justify-center items-center mt-[20px]
        md:mt-[50px]
        lg:w-1/2 lg:mt-0">
            <Arrow direction="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" onClick={prev_slide} />
            <div className="flex w-11/12 h-full flex-wrap justify-center">
                {data.slice(counter, counterTo).map((each, index) =>
                <CardPolaroid 
                    key={index}
                    src={each.photo}
                    alt={each.id}
                    text={each.city}
                    id={each.id}
                />)}
            </div>
            <Arrow direction="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" onClick={next_slide} />
        </div>
    )
}
