import { useCallback, useEffect, useRef, useState } from "react"

function Passwordgenrater() {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)
    const passwordref = useRef(null)

    const passwordgenrater = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numbers) {
            str += "0123456789";
        }
        if (symbols) {
            str += "!@#$%^&*()_+";
        }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numbers, symbols, setPassword])

    useEffect(() => {
        passwordgenrater()
    }, [length, numbers, symbols, setPassword])

    const copyclipbord = () => {
        passwordref.current?.select()
        window.navigator.clipboard.writeText(password)
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold" style={{marginTop: "15%" }}>Password Generator</h1>
            <div className="flex w-full items-center space-x-2 md:w-1/3" style={{ marginLeft: "35%",marginTop: "2%"}}>
                <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    readOnly
                    placeholder="Password"
                    ref={passwordref}
                    value={password}
                ></input>
                <button
                    type="button"
                    onClick={copyclipbord}
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Copy
                </button>

            </div>
            <div>
                <div className="mt-6 flex items-center" style={{ marginLeft: "36%"}}>
                    <input
                        type="range"
                        min={6}
                        max={30}
                        className="cursor-pointer"
                        value={length}
                        onChange={(e) => {
                            setLength(e.target.value)
                        }}
                    />
                    <label>length:{length}</label>
                    <input
                        type="checkbox"
                        defaultChecked={numbers}
                        onClick={()=>{setNumbers((prev)=>!prev)}}
                        className="h-4 ml-5 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <div className="ml-2">
                        <label
                            className="text-sm font-medium text-gray-900"
                        >
                            Number
                        </label>
                    </div>
                    <input
                        type="checkbox"
                        defaultChecked={symbols}
                        onClick={()=>{setSymbols((prev)=>!prev)}}
                        className="h-4 ml-5 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <div className="ml-2">
                        <label
                            className="text-sm font-medium text-gray-900"
                        >
                            symbols
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Passwordgenrater
