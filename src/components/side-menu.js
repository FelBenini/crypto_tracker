import React from 'react'
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CurrencyState } from '../currencyContext.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { OrderState } from '../orderContext.js';

function SideMenu() {
    return (
        <div id="side-menu">
            <Divider/>
            <h3>Currency</h3>
            <FormSelect />
            <Divider/>
            <h3>Order by</h3>
            <RadioMenu/>
            <Divider/>
            <p>Made by<br/>Felipe Benini</p>
        </div>
    )
}

function FormSelect() {
    const { currency, setCurrency } = CurrencyState();
    return (
        <div>
            <FormControl color="secondary" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={currency}
                    id="demo-simple-select"
                    labelId="demo-simple-select-label"
                    onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value={"usd"}>USD</MenuItem>
                    <MenuItem value={"brl"}>BRL</MenuItem>
                    <MenuItem value={"eur"}>EUR</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

function RadioMenu() {
    const { order, setOrder } = OrderState();
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                defaultValue={order}
                onChange={(e) => setOrder(e.target.value)}
            >
                <FormControlLabel value="market_cap_desc" control={<Radio />} label="Trending coins" />
                <FormControlLabel value="price_desc" control={<Radio />} label="Highest price" />
                <FormControlLabel value="id_asc" control={<Radio />} label="Name (A-Z)" />
            </RadioGroup>
        </FormControl>
    )
}



export default SideMenu