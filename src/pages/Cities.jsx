import { useEffect, useState, useRef } from 'react'
import CardCity from '../components/CardCity'
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
        <div className='w-full flex flex-col items-center mb-[200px]'>
            <div className="flex items-center border-b-2 border-blue-500 py-1 mb-20 mt-[200px]">
                <input className='appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    ref={text}
                    type="text"
                    name="text"
                    id="text"
                    onChange={handleFilter}
                    placeholder='Search city...'
                />
            </div>
            
            <div className='grid grid-cols-1 gap-3 mt-2 mx-[80px]
            md:grid-cols-2 md:gap-7
            lg:grid-cols-3 lg:gap-10'>
                { cities.map(each =>
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
        </div>
    )
}
