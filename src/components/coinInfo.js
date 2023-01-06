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

function CoinChart() {
  const { currency } = CurrencyState()
  const { id } = useParams()
  const [chartData, setChartData] = useState([])

  const getData = async (coin_id, currency_) => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=${currency_}&days=30`);

    setChartData(data.prices)
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
      text: `Price variation in the last 30 days in ${currency.toUpperCase()}`,
    },
  },
  elements: {
    point: {
      radius: 0,
    }
  },
};

const labels = chartData.map((component) => { let date = new Date(component[0])
return (`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
});

const data = {
  labels,
  datasets: [
    {
      data: chartData.map((component) => component[1]),
      borderColor: '#560bad',
      borderWidth: 1,
      backgroundColor: '#560bad',
    }
  ],
};

  return (
      <div className="chartWrapper">
      <Line options={options} data={data}/>
      </div>
  )
}

export default CoinChart