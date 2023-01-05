import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyState } from '../currencyContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

  const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: `Variation in the last 30 days in ${currency}`,
    },
  },
};

const labels = chartData.map((component) => component[0]);

const data = {
  labels,
  datasets: [
    {
      data: chartData.map((component) => component[1]),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

  return (
    <div>
      <span id="coin-page-title">
        <h1>{id.toUpperCase()}</h1>
      </span>
      <div className="chartWrapper" style={{width: "80%"}}>
      <Line options={options} data={data}/>
      </div>
    </div>
  )
}

export default CoinPage