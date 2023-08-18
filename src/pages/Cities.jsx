import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import apiUrl from '../apiUrl'
import CardCity from '../components/CardCity'

export default function Cities() {
    const [cities, setCities] = useState([])
    const text = useRef()
    const [reEffect, setReEffect] = useState(true)
    useEffect(
        () => {
            axios(apiUrl+'cities?city='+text.current.value)
                .then(res => setCities(res.data.response))
                .catch(err => console.log(err))
        }, [reEffect]
    )
    function handleFilter() {
        //console.log(text.current.value)
        setReEffect(!reEffect)
    }
    return (
        <div className='w-full flex flex-col items-center'>
            <input className='w-[100px] h-[40px] mx-[100px] my-[50px] px-[3px] bg-slate-200 border-gray-500' ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} placeholder='Search city'/>
            
            <div className="w-1/3 flex flex-wrap justify-center">
                {cities.map(each => 
                    <CardCity
                        key={each._id}
                        src={each.photo}
                        alt={each._id}
                        text={ each.city }
                        id={each._id}
                    />
                )}
            </div>
        </div>
    )
}
