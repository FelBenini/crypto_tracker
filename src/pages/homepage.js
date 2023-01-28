import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyState } from '../currencyContext.js'
import Pagination from '@mui/material/Pagination';
import { OrderState } from '../orderContext.js';
import { CircularProgress } from '@mui/material';
import CoinDiv from '../components/coinDiv.js';

export function formattedNumber(num) {
    if(num < 0.01) {
        return num.toString()
    } else {
        return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function Homepage() {
    const { order, loading, setLoading } = OrderState();
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { currency } = CurrencyState()
    const [cryptoCoins, setCryptoCoins] = useState([])
    const fetchCoins = async (bid, order, currentpage) => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${bid}&order=${order}&per_page=25&page=${currentpage}&sparkline=false`)

        setCryptoCoins(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchCoins(currency, order, page) // eslint-disable-next-line
    }, [currency, order, page])

    const cryptoMap = cryptoCoins.map((coin) => {
        return <CoinDiv id={coin.id} key={coin.id} name={coin.name} className="coin-listed" image={coin.image} current_price={coin.current_price} price_change_percentage_24h={coin.price_change_percentage_24h}/>
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