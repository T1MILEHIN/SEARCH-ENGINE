const BgAnimation = ()=> {
    return (
        <>
            <div className="sec1 hidden md:block animate-bounce md:w-56 aspect-square rounded-full absolute right-10 top-20 bg-gradient-to-b from-blue-400 to-purple-300 -z-10"></div>
            <div className="sec2 hidden md:block md:w-56 aspect-square absolute left-0 top-0 bg-gradient-to-r from-indigo-300 to-blue-400"></div>
            <div className="sec3 hidden md:block md:w-56 aspect-square absolute right-[300px] bottom-16 bg-gradient-to-r from-indigo-300 to-blue-400"></div>
        </>
    )
}

export default BgAnimation;