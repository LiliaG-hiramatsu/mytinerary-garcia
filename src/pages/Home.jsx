import Carousel from "../components/Carousel"

export default function Home() {
    let data = [
        {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
        {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
        {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
        {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
        {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
        {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
        {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
        {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
        {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
        {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
        {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
        {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
        {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
        {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
        {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
        {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
        ]
    return (
        <main className="w-4/5 ml-[219px] mt-[414px] flex justify-between mb-[400px]">
            <div className="w-[742px] h-[304px] flex flex-col gap-10">
                <h1 className="w-[742px] h-[64px] font-bold text-[48px] leading-10">Find the perfect destination</h1>
                <p className="w-[628px] h-[96px] text-[24px] font-semibold leading-8 text-[#1C1C1C99]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className="w-[346px] h-[64px] rounded-lg py-4 px-5 flex gap-4 justify-center bg-indigo-600 text-white text-[24px] font-semibold leading-8">View More</button>
            </div>
            <Carousel data={data} />
        </main>
    )
}
