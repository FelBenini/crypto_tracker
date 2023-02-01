import React from 'react'
import { Link } from 'react-router-dom'
import {CurrencyState} from '../currencyContext'
import { formattedNumber } from '../pages/homepage'

function propsDiv(props) {
    const {currencyPrefix} = CurrencyState()
    if (props.price_change_percentage_24h > 0) {
        return (
            <Link to={`/coin/${props.id.toLowerCase()}`} className={props.className}>
                <span>
                    <img src={props.image} alt={props.name} className="coin-image" />
                    <h4>{props.name}</h4>
                </span>
                <span className="variation-24h">
                    <img src="/img/variation-positive.svg" alt="trending down" /><h5>{props.price_change_percentage_24h.toFixed(2) + "%"}</h5>
                </span>
                <span className="price-crypto">
                    <p>Price:</p>
                    <h5>{currencyPrefix}{formattedNumber(props.current_price)}</h5>
                </span>
            </Link>
        )
    } else if (props.price_change_percentage_24h < 0) {
        return (
            <Link to={`/coin/${props.id.toLowerCase()}`} className={props.className}>
                <span>
                    <img src={props.image} alt={props.name} className="coin-image" />
                    <h4>{props.name}</h4>
                </span>
                <span className="variation-24h">
                    <img src="/img/variation-negative.svg" alt="trending down" /><h5>{props.price_change_percentage_24h.toFixed(2) + "%"}</h5>
                </span>
                <span className="price-crypto">
                    <p>Price:</p>
                    <h5>{currencyPrefix}{formattedNumber(props.current_price)}</h5>
                </span>
            </Link>
        )
    }}

export default propsDiv