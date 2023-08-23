import { Link as Anchor } from "react-router-dom"

export default function Footer() {
    return (
        <div className="h-[100px] flex justify-evenly items-center bg-black
        md:h-[200px]">
            <div>
                <Anchor to={'/home/'}>
                    <h1 className="text-[12px] text-gray-200 hover:text-gray-300
                md:text-[14px]
                lg:text-[18px]
                xl:text-[20px]">Home</h1>
                </Anchor>
            </div>
            <div>
                <Anchor to={'/cities/'}>
                    <h1 className="text-[12px] text-gray-100 hover:text-gray-300
                md:text-[14px]
                lg:text-[18px]
                xl:text-[20px]">Cities</h1>
                </Anchor>
            </div>
            <div>
                <Anchor to={'/login/'}>
                    <h1 className="text-[12px] text-gray-100 hover:text-gray-300
                md:text-[14px]
                lg:text-[18px]
                xl:text-[20px]">Login</h1>
                </Anchor>
            </div>
        </div>
    )
}
