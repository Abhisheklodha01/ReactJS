import {useEffect, useState} from 'react'

// custom hook

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(()=> {
        //api 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.table(data);
    }, [currency])
    return data
}

export default useCurrencyInfo