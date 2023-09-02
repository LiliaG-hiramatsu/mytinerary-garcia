import { useSelector } from "react-redux"

export default function Users() {
    const user_state = useSelector(store => store.users.users)
    //console.log(user_state)
    return (
        <div className="w-1/2 flex flex-col">
            {user_state?.map(each => <img src={each.photo} key={each._id} className="w-[150px]" />)}
        </div>
    )
}
