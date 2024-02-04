import {useEffect,useState} from "react";

function usecurrencyinfo(currency){
    const [data, setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res=>res.json())
        .then(data=>setdata(data[currency]))
    },[currency])
    return data
}

export default usecurrencyinfo;