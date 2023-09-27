import { Outlet, useParams, Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import DataForm from "../components/DatasForm";

const Datas = ({nightMode, toggleNightMode})=> {
    const { searchInput } = useParams();
    return (
        <>
            <div className={`px-2 flex gap-3 md:gap-10 items-center ${nightMode && "bg-slate-800"} duration-300`}>
                <Link to={"/"} className="w-fit flex-none text-xs md:text-xl text-center font-mono">T SEARCH</Link>
                <div className="flex-1">
                    <DataForm />
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