import React, { createContext, useEffect, useState } from 'react'

const CurrencyInitial = createContext();

const CurrencyContext = ({ children }) => {
    const [currency, setCurrency] = useState("USD")
    const [currencyPrefix, setCurrencyPrefix] = useState("$")
    useEffect(() => {
        if (currency === "USD") setCurrencyPrefix("$");
        else if (currency === "BRL") setCurrencyPrefix("R$");
        else if (currency === "EUR") setCurrencyPrefix("€");
    }, [currency])
  return (
    <CurrencyInitial.Provider value={{ currency, setCurrency, currencyPrefix}}>
        {children}
    </CurrencyInitial.Provider>
  )
}

export const CurrencyState = () => {
    return React.useContext(CurrencyInitial)
}

export default CurrencyContext