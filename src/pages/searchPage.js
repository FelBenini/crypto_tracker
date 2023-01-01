import React, { useState, useEffect } from 'react'
import { CurrencyState } from '../currencyContext';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { formattedNumber } from './homepage';

function SearchPage() {
    const { query } = useParams()
    const { currency, currencyPrefix} = CurrencyState()
    const [cryptoCoins, setCryptoCoins] = useState([])
    const filteredObjects = cryptoCoins.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) === 0);
    const fetchCoins = async (bid) => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${bid}&order=market_cap_desc&per_page=1250&page=1&sparkline=false`)

        setCryptoCoins(data)
    }
    const mappedObjects = filteredObjects.map(coin => {
    if(coin.price_change_percentage_24h > 0) {
        return (
            <div className="coin-listed">
                <span>
                <img src={coin?.image} alt={coin} className="coin-image"/>
                <h4>{coin.name}</h4>
                </span>
                <span className="variation-24h">
                    <img src="/img/variation-positive.svg" alt="trending down"/><h5>{coin.price_change_percentage_24h.toFixed(2) + "%"}</h5>
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
                    <img src="/img/variation-negative.svg" alt="trending down"/><h5>{coin.price_change_percentage_24h.toFixed(2) + "%"}</h5>
                </span>
                <span className="price-crypto">
                <p>Price:</p>
                <h5>{currencyPrefix}{formattedNumber(coin.current_price.toFixed(2))}</h5>
                </span>
            </div>
            )
        }
      ;
  });
      useEffect(() => {
        fetchCoins(currency)
    }, [currency])
    const headerStyle = {
        marginTop: '12px',
        textAlign: 'center'
    }
    return (
        <section>
            <h2 style={headerStyle}>Showing results for {query}</h2>
        <div id="search-section">
            <div className="coin-label">
                <span>Name</span>
                <span className="variation-24h">Variation 24h</span>
                <span className='price-crypto'>Price</span>
            </div>
            {mappedObjects}
        </div>
        </section>

    )
}

export default SearchPage