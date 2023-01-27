import React, { useState, useEffect } from 'react'
import { CurrencyState } from '../currencyContext';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import CoinDiv from '../components/coinDiv';
import { CircularProgress } from '@mui/material';
import { OrderState } from '../orderContext';

function SearchPage() {
    const { query } = useParams()
    const { currency } = CurrencyState()
    const [loading, setLoading] = useState(true)
    const { order } = OrderState();
    const [cryptoCoins, setCryptoCoins] = useState([])
    const fetchCoins = async (bid, order, filter) => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${bid}&order=${order}&per_page=1250&page=1&sparkline=false`)

        setCryptoCoins(data.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) === 0))
        setLoading(false)
    }
    const mappedObjects = cryptoCoins.map(coin => {
        return <CoinDiv id={coin.id} key={coin.id} name={coin.name} className="coin-listed" image={coin.image} current_price={coin.current_price} price_change_percentage_24h={coin.price_change_percentage_24h}/>
    });
    useEffect(() => {
        fetchCoins(currency, order, query)
    }, [currency, order, query])
    const headerStyle = {
        marginTop: '12px',
        textAlign: 'center'
    }
    if (!loading) {
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
    } else if(loading) {
        return (
                    <div className='coin-page-loading'>
            <CircularProgress />
        </div>
        )
    }

}

export default SearchPage