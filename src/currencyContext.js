import React, { createContext, useEffect, useState } from 'react'

const Currency = createContext();

const CurrencyContext = ({ children }) => {
    const [currency, setCurrency] = useState("USD")
    const [currencyPrefix, setCurrencyPrefix] = useState("$")
    useEffect(() => {
        if (currency === "USD") setCurrencyPrefix("$");
        else if (currency === "BRL") setCurrencyPrefix("R$");
        else if (currency === "EUR") setCurrencyPrefix("€");
    }, [currency])
  return (
    <Currency.Provider value={{ currency, setCurrency, currencyPrefix}}>
        {children}
    </Currency.Provider>
  )
}

export const CurrencyState = () => {
    return React.useContext(Currency)
}

export default CurrencyContext