
export default function Circle(){
    return (
        <div className="p-5 lg:10 grid grid-cols-4 gap-5 lg:gap-10 rounded-3xl shadow-xl w-fit mx-auto">
            <Blue />
            <Red />
            <Yellow />
            <Blue />
            <Red />
            <Yellow />
        </div>
    )
}

function Blue(){
    return (
        <div className="w-16 lg:w-20 aspect-square rounded-full bg-blue-700"></div>
    )
}
function Red(){
    return (
        <div className="w-16 lg:w-20 aspect-square rounded-full bg-red-500"></div>
    )
}
function Yellow(){
    return (
        <div className="w-16 lg:w-20 aspect-square rounded-full bg-yellow-500"></div>
    )
}