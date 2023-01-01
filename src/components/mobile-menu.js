import React from 'react'
import { SearchBar } from './header';
import { FormSelect } from './side-menu';
import { RadioMenu } from './side-menu';
import { IconButton } from '@mui/material';

function MobileMenu() {
    function handleMobileMenu() {
        document.getElementById('mobile-menu').style.transform = "translateX(100%)"
        setTimeout(function() {
            document.getElementById('mobile-menu').style.display = "none";
        }, 300);
    }
  return (
    <div id="mobile-menu">
        <IconButton sx={{marginRight: "72%"}} color="primary" size="medium" onClick={handleMobileMenu}>
        <img src="/img/mobile-menu-exit.svg" alt="close mobile menu"/>
        </IconButton>
        <SearchBar/>
        <FormSelect/>
        <RadioMenu/>
    </div>
  )
}

export default MobileMenu