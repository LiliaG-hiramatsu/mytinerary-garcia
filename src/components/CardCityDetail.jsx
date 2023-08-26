/* eslint-disable react/prop-types */
export default function CardCityDetail({ name_city, photo_city, description_city, id_city }) {
    return (
        <div className="flex flex-col items-center">
                <h1 className="text-[20px] font-semibold text-center
                lg:text-[24px]
                xl:text-[28px]">
                    {name_city}
                </h1>
                <img src={photo_city} alt={id_city} className="my-5 shadow-lg" />
                <p className="text-[14px] text-justify
                md:text-[16px]
                lg:text-[18px]
                xl:text-[20px]">
                    {description_city}
                </p>
                <p className="text-[14px] text-gray-400 my-5
                md:text-[16px]
                lg:text-[18px]
                xl:text-[20px]">
                    CityDetail of {name_city} under construction
                </p>
        </div>
    )
}
