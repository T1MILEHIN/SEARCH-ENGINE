import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import SearchApiHook from "../hooks/SearchApiHook";

const dropUl = {
    initial: {
        opacity: 0,
        y: '-40px',
    },
    final: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", stiffness: 250, duration: 0.2, staggerChildren: 0.2, delayChildren:0.3
        }
    }
}

const li = {
    initial: {
        opacity: 0,
        x: '-40px',
    },
    final: {
        opacity: 1,
        x: 0,
    }
}

const Form = ()=> {
    const [search, setSearch] = useState("")
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
        if (search.includes("img") || search.includes("image") || search.includes("images")) navigate(`/${search}/img`)
        else if (search.includes("/")) navigate(`/${search.replaceAll("/", "%")}/web`)
        else navigate(`/${search}/web`)
        setShowDropDown(false)
    }
    const {data} = SearchApiHook(search)
    const examples = data?.data?.items.map((search, index)=> index < 3 && <Link to={`/${search.title}/web`} key={index}><motion.p variants={li} onClick={()=> removeDropDown()} className="font-bold hover:text-blue-400 duration-300">{search.title}</motion.p></Link> )
    return (
        <form onSubmit={onSubmit} action="">
            <div className="my-2 md:my-5 flex md:gap-5 gap-1">
                <div className={`relative flex-1`}>
                    <input type="text" onBlur={removeDropDown} onChange={inputSearch} value={search} name="search" id="search" className={`pl-1 md:pl-2 font-bold border-black border-2 placeholder:text-black text-sm md:text-xl placeholder:font-bold placeholder:tracking-wider w-full h-8 md:h-10 rounded md:rounded-md focus:ring duration-300`} placeholder="Search Anything" />
                    <AnimatePresence>
                        {data?.data?.items && showDropDown && 
                        <motion.ul variants={dropUl} initial="initial" animate="final" className={`shadow-lg absolute text-xs md:text-lg top-10 bg-white p-2 rounded-md leading-7 divide-y-2`}>
                            {examples}
                        </motion.ul>}
                    </AnimatePresence>
                </div>
                <button type="submit" className="block bg-blue-500 hover:bg-blue-300 duration-300 px-1 md:px-3 md:py-1 rounded-md font-bold text-xs md:text-lg">SEARCH</button>
            </div>
        </form>
    )
}

export default Form;