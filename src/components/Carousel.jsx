import CardPolaroid from "../components/CardPolaroid"
import Arrow from "../components/Arrow"
import { useState } from "react"

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
    return (
        <div className="flex justify-center items-center">
            <Arrow direction="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" onClick={prev_slide} />
            <div className="flex w-11/12 flex-wrap justify-center mt-5">
                {data.slice(counter, counterTo).map((each, index) =>
                <CardPolaroid 
                    key={index}
                    src={each.photo}
                    alt={each.id}
                    text={each.city}
                />)}
            </div>
            <Arrow direction="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" onClick={next_slide} />
        </div>
    )
}
