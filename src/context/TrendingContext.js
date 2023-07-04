import { createContext, useLayoutEffect, useState } from "react";

//create context object
export const TrendingContext = createContext({});

//create the provider component
export const TrendingProvider = ({ children }) => {
    const [trendData, setTrendData] = useState();

    //get crypto market data to display on table component
    const getTrendData = async () => {
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
                .then(res => res.json()).then(json => json);

            console.log(data);
            setTrendData(data.coins);
        } catch (err) {
            console.log(err);
        }

    };

    const resetTrendingResult = () => {
        getTrendData();
    }

    useLayoutEffect(() => {
        getTrendData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <TrendingContext.Provider value={{ trendData, resetTrendingResult }}>
            {children}
        </TrendingContext.Provider>
    )
}