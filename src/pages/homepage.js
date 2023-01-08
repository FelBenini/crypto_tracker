import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyState } from '../currencyContext.js'
import Pagination from '@mui/material/Pagination';
import { OrderState } from '../orderContext.js';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export function formattedNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Homepage() {
    const [loading, setLoading] = useState(true)
    const { order } = OrderState();
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { currency, currencyPrefix } = CurrencyState()
    const [cryptoCoins, setCryptoCoins] = useState([])
    const fetchCoins = async (bid, order, currentpage) => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${bid}&order=${order}&per_page=25&page=${currentpage}&sparkline=false`)

        setCryptoCoins(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchCoins(currency, order, page)
    }, [currency, order, page])

    const cryptoMap = cryptoCoins.map((coin) => {
        if (coin.price_change_percentage_24h > 0) {
            return (
                <Link to={`coin/${coin.id.toLowerCase()}`} className="coin-listed">
                    <span>
                        <img src={coin.image} alt={coin} className="coin-image" />
                        <h4>{coin.name}</h4>
                    </span>
                    <span className="variation-24h">
                        <img src="img/variation-positive.svg" alt="trending down" /><h5>{coin.price_change_percentage_24h.toFixed(2) + "%"}</h5>
                    </span>
                    <span className="price-crypto">
                        <p>Price:</p>
                        <h5>{currencyPrefix}{formattedNumber(coin.current_price.toFixed(2))}</h5>
                    </span>
                </Link>
            )
        } else if (coin.price_change_percentage_24h < 0) {
            return (
                <Link to={`coin/${coin.id.toLowerCase()}`} className="coin-listed">
                    <span>
                        <img src={coin.image} alt={coin} className="coin-image" />
                        <h4>{coin.name}</h4>
                    </span>
                    <span className="variation-24h">
                        <img src="img/variation-negative.svg" alt="trending down" /><h5>{coin.price_change_percentage_24h.toFixed(2) + "%"}</h5>
                    </span>
                    <span className="price-crypto">
                        <p>Price:</p>
                        <h5>{currencyPrefix}{formattedNumber(coin.current_price.toFixed(2))}</h5>
                    </span>
                </Link>
            )
        }
    })
    if (!loading) {
        return (
            <div>
                <div className="coin-label">
                    <span>Name</span>
                    <span className="variation-24h">Variation 24h</span>
                    <span className='price-crypto'>Price</span>
                </div>
                <div id="coins-display">
                    {cryptoMap}
                    <div id="pagination">
                        <Pagination count={50} page={page} onChange={handlePageChange} shape="rounded" />
                    </div>
                </div>
            </div>
        )
    } else if (loading) {
        return (
        <div className='coin-page-loading'>
            <CircularProgress />
        </div>
        )
    }

}

export default Homepage