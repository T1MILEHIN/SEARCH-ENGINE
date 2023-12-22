import { motion } from "framer-motion";
import { useParams, useOutletContext } from "react-router-dom";
import SearchApiHook from "../hooks/SearchApiHook";
import Loader from "../components/Loader";
import SearchDisplay from "../components/SearchDisplay";
import ImageDisplay from "./ImageDisplay";

const WebOrImg = ({nightMode})=> {
    const searchValue = useOutletContext()
    const { type } = useParams()
    const {data, isLoading, error } = SearchApiHook(searchValue)    

    if (isLoading) return <Loader />
    if (error?.response?.status === 404) error.message = `${searchValue} does not Exist`;
    if (error?.response?.status === 429) error.message = `Search limit Exceeded😥 \n Google Permits only 100 queries per Day`
    if (error) return <motion.p initial={{y:'-30px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen grid place-items-center font-extrabold text-center text-sm lg:text-4xl text-red-600">{error.message}</motion.p>
    
    const WEB = data?.data?.items.map((search, index)=> <SearchDisplay key={index} {...search} searchValue={searchValue}  />)
    const IMG = data?.data?.items.map((img, index)=> <ImageDisplay key={index} {...img} />)
    const searches = type === "web" && WEB
    const images = type === "img" && <motion.p initial={{y:'-30px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen grid place-items-center font-extrabold text-center text-sm lg:text-4xl text-black">NO IMAGE</motion.p>
    return (
        <div className={`${nightMode && "bg-slate-800"} duration-300`}>
            {type === "web" && <p className="pl-2">About {data?.data?.items.length} results ({data?.data?.searchInformation.formattedSearchTime} seconds)</p>}
            <hr />
            <div className="px-2 py-4 flex flex-col gap-4">
                {searches}
            </div>
            <div className="">
                {images}
            </div>
        </div>
    )
}

export default WebOrImg