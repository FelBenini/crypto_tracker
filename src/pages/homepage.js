import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyState } from '../currencyContext.js'
import Pagination from '@mui/material/Pagination';

export function formattedNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Homepage() {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
    const { currency, currencyPrefix} = CurrencyState()
    const [cryptoCoins, setCryptoCoins] = useState([])
    const fetchCoins = async (bid, currentpage) => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${bid}&order=market_cap_desc&per_page=25&page=${currentpage}&sparkline=false`)

        setCryptoCoins(data)
    }
    useEffect(() => {
        fetchCoins(currency, page)
    }, [currency, page])
    
    const cryptoMap = cryptoCoins.map((coin) => {
        if(coin.price_change_percentage_24h > 0) {
        return (
            <div className="coin-listed">
                <span>
                <img src={coin?.image} alt={coin} className="coin-image"/>
                <h4>{coin.name}</h4>
                </span>
                <span className="variation-24h">
                    <img src="img/variation-positive.svg" alt="trending down"/><h5>{coin.price_change_percentage_24h.toFixed(2) + "%"}</h5>
                </span>
                <span className="price-crypto">
                <p>Price:</p>
                <h5>{currencyPrefix}{formattedNumber(coin.current_price.toFixed(2))}</h5>
                </span>
            </div>
        )} else if(coin.price_change_percentage_24h < 0) {
            return (
                <div className="coin-listed">
                <span>
                <img src={coin.image} alt={coin} className="coin-image"/>
                <h4>{coin.name}</h4>
                </span>
                <span className="variation-24h">
                    <img src="img/variation-negative.svg" alt="trending down"/><h5>{coin.price_change_percentage_24h.toFixed(2) + "%"}</h5>
                </span>
                <span className="price-crypto">
                <p>Price:</p>
                <h5>{currencyPrefix}{formattedNumber(coin.current_price.toFixed(2))}</h5>
                </span>
            </div>
            )
        }
    })
  return (
    <div id="coins-display">
        {cryptoMap}
        <div id="pagination">
        <Pagination count={50} page={page} onChange={handlePageChange} shape="rounded"/>
        </div>
    </div>
  )
}

export default Homepage