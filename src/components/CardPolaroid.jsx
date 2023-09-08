/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom"

export default function CardPolaroid({ src, alt, text, id }) {
    //console.log(id)
    return (
        <Anchor to={'/city/'+id} className="w-2/5 flex flex-col items-center p-2 m-2 bg-white">
            <img src={src} alt={alt} className="w-full h-10 object-cover
            min-[440px]:h-16
            md:h-20
            lg:h-24
            min-[2300px]:h-28" />
            <p className="text-[10px] mt-1
            min-[440px]:text-[12px]
            md:text-[14px] md:mt-2
            lg:text-[16px]
            2xl:text-[18px]
            min-[2300px]:text-[20px]">{text}</p>
        </Anchor>
    )
}
