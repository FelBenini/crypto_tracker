import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyState } from '../currencyContext.js'
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';

function Homepage() {
    const { currency, currencyPrefix} = CurrencyState()
    const [cryptoCoins, setCryptoCoins] = useState([])
    const fetchCoins = async (bid) => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${bid}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

        setCryptoCoins(data)
    }
    useEffect(() => {
        fetchCoins(currency)
    }, [currency])
    
    const cryptoMap = cryptoCoins.map((coin) => {
        return (
            <div className="coin-listed">
                <span>
                <img src={coin?.image} alt={coin}/>
                <h4>{coin.name}</h4>
                </span>
                <span>
                    <h5>{coin.price_change_percentage_24h + "%"}</h5>
                </span>
                <span id="price-crypto">
                <p>Price:</p>
                <h5>{currencyPrefix}{coin.current_price.toFixed(2)}</h5>
                </span>
            </div>
        )
    })
  return (
    <div id="coins-display">
        {cryptoMap}
    </div>
  )
}

export default Homepage