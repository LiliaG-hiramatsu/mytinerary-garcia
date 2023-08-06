import CardPolaroid from "../components/CardPolaroid"
import Arrow from "../components/Arrow"

export default function Carousel({ data }) {
    return (
        <div className="flex justify-center items-center">
            <Arrow direction="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            <div className="flex w-11/12 flex-wrap justify-center mt-5">
            {data.slice(0,4).map(each =>
            <CardPolaroid 
                key={each.id} 
                src={each.photo} 
                alt={each.id} 
                text={each.city} 
            />)}
            </div>
            <Arrow direction="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </div>
    )
}
