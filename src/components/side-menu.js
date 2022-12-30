import React from 'react'
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CurrencyState } from '../currencyContext.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"BRL"}>BRL</MenuItem>
                    <MenuItem value={"EUR"}>EUR</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

function RadioMenu() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                defaultValue={"trending"}
            >
                <FormControlLabel value="trending" control={<Radio />} label="Trending coins" />
                <FormControlLabel value="price" control={<Radio />} label="Highest price" />
                <FormControlLabel value="name" control={<Radio />} label="Name (A-Z)" />
            </RadioGroup>
        </FormControl>
    )
}



export default SideMenu