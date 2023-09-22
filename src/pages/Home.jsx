import Search from "../components/Search"
import BgAnimation from "../components/BgAnimation"

const Home = ()=> {
    return (
        <div className="min-h-screen flex justify-center items-center z-10 relative">
            <Search />
            <BgAnimation />
        </div>
    )
}

export default Home;