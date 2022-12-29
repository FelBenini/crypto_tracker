import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import { CurrencyState } from '../currencyContext.js'

function SideMenu() {
    const { currency, setCurrency } = CurrencyState();

    return (
        <div id="side-menu">
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
            <Divider/>
        </div>
    )
}


export default SideMenu