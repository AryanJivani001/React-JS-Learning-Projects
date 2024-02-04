import { useState } from "react"

function Colorchanger() {
    const [color, setColor] = useState("olive")
    return (
        <div className="w-screen h-screen " style={{backgroundColor:color}}>
        <div className=" bg-white p-3 gap-10 rounded-3xl w-full flex flex-wrap justify-center items-center fixed bottom-10 ">
            <div className="bg-red-500 text-white text-xl  p-2 rounded cursor-pointer" onClick={() => setColor("red")}>
                Red
            </div>
            <div className="bg-green-500 text-white text-xl ml-2 p-2 rounded cursor-pointer" onClick={() => setColor("green")}>
                green
            </div>
            <div className="bg-yellow-500 text-white text-xl ml-2 p-2 rounded cursor-pointer" onClick={() => setColor("yellow")}>
                yellow
            </div>
            <div className="bg-blue-500 text-white text-xl ml-2 p-2 rounded cursor-pointer" onClick={() => setColor("blue")}>
                Blue
            </div>
            <div className="bg-lime-500 text-white text-xl ml-2 p-2 rounded cursor-pointer" onClick={() => setColor("lime")}>
                Lime
            </div>
            <div className="bg-pink-500 text-white text-xl ml-2 p-2 rounded cursor-pointer" onClick={() => setColor("pink")}>
                Pink
            </div>
            <div className="bg-gray-500 text-white text-xl ml-2 p-2 rounded cursor-pointer" onClick={() => setColor("gray")}>
                gray
            </div>
            <div className="bg-black text-white text-xl ml-2 p-2 rounded cursor-pointer" onClick={() => setColor("black")}>
                Black
            </div>
        </div>
        </div>
    )
}

export default Colorchanger
