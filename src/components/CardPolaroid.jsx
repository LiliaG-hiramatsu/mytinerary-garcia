import { Link as Anchor } from "react-router-dom"

export default function CardPolaroid({ src, alt, text, id }) {
    return (
        <Anchor to={'/city/'+id} className="w-2/5 flex flex-col items-center p-2 m-2 bg-white">
            <img src={src} alt={alt} className="h-fit
            lg:mb-2" />
            <p className="text-[10px]
            md:text-[14px]">{text}</p>
        </Anchor>
    )
}
