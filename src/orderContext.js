import React, { createContext, useState } from 'react'

const Order = createContext();

const OrderContext = ({ children }) => {
    const [order, setOrder] = useState("market_cap_desc")
  return (
    <Order.Provider value={{ order, setOrder }}>
        {children}
    </Order.Provider>
  )
}

export const OrderState = () => {
    return React.useContext(Order)
}

export default OrderContext