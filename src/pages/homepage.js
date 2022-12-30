import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyState } from '../currencyContext.js'

function Homepage() {
    const { currency, currencyPrefix} = CurrencyState()
    const [cryptoCoins, setCryptoCoins] = useState([])
    const fetchCoins = async () => {
        const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

        setCryptoCoins(data)
    }
    useEffect(() => {
        fetchCoins()
    }, [currency])
    
    const cryptoMap = cryptoCoins.map((coin) => {
        return (
            <div className="coin-listed">
                <img src={coin?.image} alt={coin}/>
                <h4>{coin.name}</h4>
                <p>{currencyPrefix}{coin.current_price}</p>
            </div>
        )
    })
  return (
    <div>
        {cryptoMap}
    </div>
  )
}

export default Homepage