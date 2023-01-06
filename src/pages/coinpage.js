import React from 'react'
import CoinChart from '../components/coinInfo'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Coinpage = () => {
    const { id } = useParams()
    const [coinInfo, setCoinInfo] = useState([]);

    const fetchInfo = async(coin_id) => {
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin_id}?localization=false`)

        setCoinInfo(data)
    }

    useEffect(() => {
    fetchInfo(id)
    }, [id])
    
  return (
    <div className='coin-page-info'>
        <span id="coin-page-title">
            <img src={coinInfo.image?.small} alt="coin logo"/>
        <h1>{coinInfo.name}</h1>
        </span>
        <CoinChart/>
    </div>
  )
}

export default Coinpage