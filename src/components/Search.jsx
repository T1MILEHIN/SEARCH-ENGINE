import { motion } from "framer-motion";
import Form from "./Form";

const Search = () => {
    return (
        <div className="z-10 w-[95%] md:w-[60%] bg-blur md:p-5 p-2">
            <motion.h1 initial={{scale: 0.6, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{type: "spring", stiffness: 250}} className="text-2xl md:text-4xl text-center font-mono">T SEARCH</motion.h1>
            <Form />
            <p className="text-center font-thin">Terms & Conditions Applied</p>
        </div>
    )
}

export default Search;