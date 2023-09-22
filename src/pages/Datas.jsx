import { Outlet, useParams } from "react-router-dom";
import { useRef } from "react"

const Datas = ()=> {
    const { searchInput } = useParams()
    const search = useRef()
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-4xl text-center font-mono">A SEARCH ENGINE</h1>
                <div className="my-5 flex gap-5">
                    <input type="text" ref={search} name="search" id="search" className="pl-2 font-bold border-black border-2 placeholder:text-black text-xl placeholder:font-bold placeholder:tracking-wider w-full h-10 md:h-12 rounded-md focus:ring duration-300" placeholder="Search Here" defaultValue={searchInput} />
                    <button type="submit" className="block bg-blue-500 hover:bg-blue-300 duration-300 px-3 py-1 rounded-md font-bold">SEARCH</button>
                </div>
            </div>
            <Outlet />
        </>

    )
}

export default Datas;