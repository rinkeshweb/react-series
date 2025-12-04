import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const key = `key`
    const [data, setData] = useState({});

    useEffect(() => {
        const currency_api = `https://v6.exchangerate-api.com/v6/${key}/latest/${currency}`
        fetch(currency_api)
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates);
            })
            .catch((err) => console.error(err));
    }, [currency]);

    return data
}

export default useCurrencyInfo;