import { useEffect, useState, useRef } from 'react'
import CardCity from '../components/CardCity'
import ErrorCard from '../components/ErrorCard'
import { useSelector, useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities'

const { read_cities } = city_actions

export default function Cities() {
    const cities = useSelector(store => store.cities.cities)
    const [reEffect, setReEffect] = useState(true)
    const text = useRef()
    const dispatch = useDispatch()
    //console.log(cities)
    useEffect(
        () => {
            dispatch(read_cities({ text:text.current?.value }))
        }, [reEffect]
    )
    function handleFilter() {
        //console.log(text.current.value)
        setReEffect(!reEffect)
    }

    return (
        <div className='w-full flex flex-col items-center mb-[50px]
        lg:mb-[200px]'>
            <div className="flex items-center border-b-2 border-indigo-500 py-1 mb-20 mt-[100px]
            lg:mt-[200px]">
                <input className='appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    ref={text}
                    type="text"
                    name="text"
                    id="text"
                    onChange={handleFilter}
                    placeholder='Search city...'
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <div className='grid grid-cols-1 gap-5 mt-2 mx-[30px]
            md:grid-cols-2 md:gap-7 md:mx-[60px]
            lg:grid-cols-3 lg:gap-10 lg:mx-[100px]'>
                { cities?.map(each =>
                    <CardCity
                        key={each._id}
                        src={each.photo}
                        alt={each._id}
                        text={each.city}
                        textCountry={each.country}
                        id={each._id}
                    />
                    )
                }
            </div>
            {cities.length === 0 && <ErrorCard />}
        </div>
    )
}
