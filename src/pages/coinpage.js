import React from 'react'
import CoinChart from '../components/coinInfo'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import { CurrencyState } from '../currencyContext'
import { formattedNumber } from './homepage'

const Coinpage = () => {
  const { currency, currencyPrefix } = CurrencyState()
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
  const [coinInfo, setCoinInfo] = useState([]);

  const fetchInfo = async (coin_id) => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin_id}?localization=false`)

    setCoinInfo(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchInfo(id)
  }, [id])

  if (!loading) {
    return (
      <div className='coin-page-info'>
        <span id="coin-page-title">
            <img src={coinInfo.image?.small} alt="coin logo" />
            <h1>{coinInfo.name}</h1>
          <span id="coin-price">
            <h3>Current price: </h3><h5>{currencyPrefix + formattedNumber(coinInfo.market_data.current_price[currency])}</h5></span>
        </span>
        <CoinChart />
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

export default Coinpage