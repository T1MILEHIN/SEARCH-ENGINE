import { Outlet, useParams } from "react-router-dom";
import { useRef } from "react"
import { FiMoon, FiSun } from "react-icons/fi";

const Datas = ()=> {
    const { searchInput } = useParams()
    const search = useRef()
    return (
        <>
            <div className="flex items-center justify-between px-10">
                <h1 className="w-fit text-2xl md:text-4xl text-center font-mono">A SEARCH ENGINE</h1>
                <form action="">
                    <div className="flex gap-5">
                        <input type="text" ref={search} name="search" id="search" className="pl-2 font-bold border-black border-2 placeholder:text-black text-xl placeholder:font-bold placeholder:tracking-wider w-full h-8 md:h-10 rounded-md focus:ring duration-300" placeholder="Search Here" defaultValue={searchInput} />
                        <button type="submit" className="block bg-blue-500 hover:bg-blue-300 duration-300 px-3 py-1 rounded-md font-bold">SEARCH</button>
                    </div>
                </form>
                <FiMoon size={40} />
            </div>
            <Outlet />
        </>

    )
}

export default Datas;