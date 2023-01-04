import React from 'react'
import { useParams } from 'react-router'
import { Line } from "react-chartjs-2";

function CoinPage() {
    const {id} = useParams()
  return (
    <div>This is a page for: {id}</div>
  )
}

export default CoinPage