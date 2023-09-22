import { useParams } from "react-router-dom";
const Datas = ()=> {
    const { searchInput } = useParams()
    return (
        <div>
            <p>{searchInput}</p>
        </div>
    )
}

export default Datas;