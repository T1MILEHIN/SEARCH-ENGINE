import { useState } from "react";
import { Outlet, useParams, Link, useNavigate } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import SearchApiHook from "../hooks/SearchApiHook";

const Datas = ({nightMode, toggleNightMode})=> {
    const { searchInput } = useParams();
    const [search, setSearch] = useState(searchInput)
    const [showDropDown, setShowDropDown] = useState(false)
    const navigate = useNavigate()
    const inputSearch = (e)=> {
        const {value} = e.target
        setSearch(value)
        setShowDropDown(value.length > 2)
    }
    const removeDropDown = ()=> {
        setShowDropDown(false)
    }
    const onSubmit = (e)=> {
        e.preventDefault()
        if (search.includes("img" || "image" || "images")) navigate(`/${search}/img`)
        if (search.includes("/")) navigate(`/${search.replaceAll("/", "%")}/web`)
        else navigate(`/${search}/web`)
    }

    const {data} = SearchApiHook(search)
    const examples = data?.data?.items.map((search, index)=> index < 3 && <Link to={`/${search.title}/web`} key={index}><p onClick={removeDropDown} className="font-bold hover:text-blue-400 duration-300">{search.title}</p></Link> )
    return (
        <>
            <div className={`px-2 flex gap-3 md:gap-10 items-center ${nightMode && "bg-slate-800"} duration-300`}>
                <Link to={"/"} className="w-fit flex-none text-xs md:text-xl text-center font-mono">T SEARCH</Link>
                <div className="flex-1">
                    <form onSubmit={onSubmit} action="">
                        <div className="my-5 flex md:gap-5 gap-1">
                            <div className={`relative flex-1`}>
                                <input type="text" onBlur={removeDropDown} onChange={inputSearch} value={search} name="search" id="search" className={`pl-1 md:pl-2 font-bold border-black border-2 placeholder:text-black text-sm md:text-xl placeholder:font-bold placeholder:tracking-wider w-full h-8 md:h-10 rounded md:rounded-md focus:ring duration-300`} placeholder="Search Anything" />
                                {data?.data?.items && showDropDown && 
                                <ul className={`shadow-lg absolute text-xs md:text-lg top-10 bg-white p-2 rounded-md leading-7 divide-y-2`}>
                                    {examples}
                                </ul>}
                            </div>
                            <button type="submit" className="block bg-blue-500 hover:bg-blue-300 duration-300 px-1 md:px-3 md:py-1 rounded-md font-bold text-xs md:text-lg">SEARCH</button>
                        </div>
                    </form>
                </div>
                <div onClick={toggleNightMode}>
                    {nightMode ? <FiSun color="yellow" size={25} className="flex-none" /> : <FiMoon color="black" size={25} className="flex-none" />}
                </div>
            </div>
            <Outlet context={searchInput} />
        </>
    )
}

export default Datas;