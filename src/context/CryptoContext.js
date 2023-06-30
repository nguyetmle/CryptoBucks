import { createContext, useLayoutEffect, useState } from "react";

//create context object
export const CryptoContext = createContext({});

//create the provider component
export const CryptoProvider = ({children}) => {
    const [ cryptoData, setCryptoData ] = useState();
    const [ searchData, setSearchData ] = useState();
    const [ coinSearch, setCoinSearch ] = useState(""); 


    // const getCoinData = async () => {
    //     try {
    //         const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&id=${coinSearch}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`)
    //         .then(res => res.json()).then(json => json);
            
    //         console.log(data);
    //         setCryptoData(data);
    //     } catch(err) {
    //         console.log(err);
    //     }

    // };

    //get crypto market data to display on table component
    const getCryptoData = async () => {
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`)
            .then(res => res.json()).then(json => json);
            
            console.log(data);
            setCryptoData(data);
        } catch(err) {
            console.log(err);
        }

    };

    //display related coin names after making search query
    const getSearchResult = async (query) => {
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
            .then(res => res.json()).then(json => json);
            
            console.log(data);
            setSearchData(data.coins);
        } catch(err) {
            console.log(err);
        }

    };

    useLayoutEffect(() => {
        getCryptoData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coinSearch]) //whenever coinSearch changes state (setCoinSearch), call getCryptoData again

    return(
        <CryptoContext.Provider value={{ cryptoData, searchData, getSearchResult, setCoinSearch, setSearchData }}>
            {children}
        </CryptoContext.Provider>
    )
}