import React, { createContext, useEffect, useState } from 'react'

const Currency = createContext();

const CurrencyContext = ({ children }) => {
    const [currency, setCurrency] = useState("usd")
    const [currencyPrefix, setCurrencyPrefix] = useState("$")
    useEffect(() => {
        if (currency === "usd") {
          setCurrencyPrefix("$");}
        else if (currency === "brl") {
          setCurrencyPrefix("R$");}
        else if (currency === "eur") {
          setCurrencyPrefix("€");}
        else if (currency === "gbp") {
          setCurrencyPrefix("£");}
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