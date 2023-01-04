import React from 'react'
import { useParams } from 'react-router'
import { Line } from "react-chartjs-2";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyState } from '../currencyContext';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

function CoinPage() {
  const { currency } = CurrencyState()
  const { id } = useParams()
  const [chartData, setChartData] = useState([])

  const getData = async (coin_id, currency_) => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=${currency_}&days=30`);

    setChartData(data.prices)
    console.log(data.prices)
  }

  useEffect(() => {
    getData(id, currency)
  }, [id, currency])

  const Chart = () => {
    ChartJS.register(LineElement, PointElement, LinearScale, Title);
    return(
      <Line data={chartData}/>
    )
  }
  return (
    <div>
      <span id="coin-page-title">
        <h1>{id.toUpperCase()}</h1>
      </span>
      <Chart/>
    </div>
  )
}

export default CoinPage