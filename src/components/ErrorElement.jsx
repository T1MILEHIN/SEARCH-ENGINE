import { NavLink } from "react-router-dom"

const ErrorElement = ()=> {
    return (
        <div className="min-h-screen grid place-items-center text-center">
            <div>
                <h1 className="font-black text-xl md:text-2xl mb-3">PAGE NOT FOUND</h1>
                <NavLink to={"/"} className={({isActive})=> isActive ? "text-red-600 font-bold" : "text-blue-400 font-bold"}>Go to Home</NavLink>
            </div>
        </div>
    )
}

export default ErrorElement;