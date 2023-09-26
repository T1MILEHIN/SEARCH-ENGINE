import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SearchApiHook = (searchValue)=> {
    const APIkey = "AIzaSyB2pqTADxjHb5quJPCxOxMjOA0oOlXDqjM";
    const engineID = "c7d1f89829903401e"
    const url = `https://www.googleapis.com/customsearch/v1?key=${APIkey}&cx=${engineID}&q=`;
    return useQuery({
        queryKey: ["search", searchValue],
        queryFn: ({queryKey})=> {
            if (!queryKey[1]) return null
            return axios.get(`${url}${queryKey[1]}`)
        },
        retry: false,
    })
}

export default SearchApiHook;