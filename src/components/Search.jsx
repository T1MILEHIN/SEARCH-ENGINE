import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const Search = () => {
    const search = useRef()
    const navigate = useNavigate()
    const onSubmit = (e)=> {
        e.preventDefault()
        const searchValue = search.current.value
        navigate(`/${searchValue}`)
    }
    return (
        <div className="z-10 w-[95%] md:w-[60%] bg-blur md:p-5 p-2">
            <h1 className="text-2xl md:text-4xl text-center font-mono">A SEARCH ENGINE</h1>
            <form onSubmit={onSubmit} action="">
                <div className="my-5 flex gap-5">
                    <input type="text" ref={search} name="" id="" className="pl-2 font-bold border-black border-2 placeholder:text-black text-xl placeholder:font-bold placeholder:tracking-wider w-full h-10 md:h-12 rounded-md focus:ring duration-300" placeholder="Search Here" />
                    <button type="submit" className="block bg-blue-500 hover:bg-blue-300 duration-300 px-3 py-1 rounded-md font-bold">SEARCH</button>
                </div>
            </form>
            <p className="text-center font-thin">Terms & Conditions Applied</p>
        </div>
    )
}

export default Search;