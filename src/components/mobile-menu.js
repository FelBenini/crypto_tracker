import React from 'react'
import { SearchBar } from './header';
import { FormSelect } from './side-menu';
import { RadioMenu } from './side-menu';
import { IconButton } from '@mui/material';

function MobileMenu() {
  function handleMobileMenu() {
    document.getElementById('mobile-menu').style.transform = "translateX(100%)"
    setTimeout(function () {
      document.getElementById('mobile-menu').style.display = "none";
    }, 300);
  }
  return (
    <div id="mobile-menu">
      <IconButton sx={{ marginRight: "72%" }} color="primary" size="medium" onClick={handleMobileMenu}>
        <img src="/img/mobile-menu-exit.svg" alt="close mobile menu" />
      </IconButton>
      <SearchBar />
      <h3>Currency</h3>
      <FormSelect />
      <h3>Order by</h3>
      <RadioMenu />
        <a href="https://github.com/FelBenini/crypto_tracker" target="blank">
          <IconButton color="primary" size="medium" id="github-link">
            <input hidden accept="image/*" />
            <img src="/img/github-icon.svg" alt="github code button link" />
          </IconButton>
        </a>
    </div>
  )
}

export default MobileMenu