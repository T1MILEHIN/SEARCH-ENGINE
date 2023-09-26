import { Outlet, useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Results = ({nightMode})=> {
    const searchValue = useOutletContext()
    
    return (
        <div className={`${nightMode && "bg-slate-800"} duration-300`}>
            <div className="flex justify-center gap-5 font-bold text-sm md:text-lg duration-300">
                <NavLink to={`/${searchValue}/web`} className={({isActive})=> isActive ? "border-b-2 border-blue-400" : "border-none"}>WEB</NavLink>
                <NavLink to={`/${searchValue}/img`} className={({isActive})=> isActive ? "border-b-2 border-blue-400" : "border-none"}>IMAGES</NavLink>
            </div>
            <Outlet context={searchValue} />
        </div>
    )
}

export default Results;