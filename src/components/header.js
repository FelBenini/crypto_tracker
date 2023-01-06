import React from "react";
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
    function handleMobileMenu() {
        document.getElementById('mobile-menu').style.display = "flex"
        setTimeout(function () {
            document.getElementById('mobile-menu').style.transform = "translateX(0%)";
        }, 25);
    }
    return (
        <header>
            <Link to="./">
                <span class="sided">
                    <img src="/img/logo-header.svg" alt="Logo header svg" />
                    <h1>cryptoTracker</h1>
                </span>
            </Link>

            <SearchBar />

            <a href="https://github.com/FelBenini/crypto_tracker" target="blank">
                <IconButton color="primary" size="medium" id="github-link">
                    <input hidden accept="image/*" />
                    <img src="/img/github-icon.svg" alt="github code button link" />
                </IconButton>
            </a>
            <IconButton onClick={handleMobileMenu} color="primary" id="menu-button" size="medium">
                <input hidden accept="image/*" />
                <img src="/img/menu-mobile.svg" alt="Menu button" />
            </IconButton>
        </header>
    );
}

export function SearchBar() {
    let navigate = useNavigate()
    function handleSubmission(e) {
        e.preventDefault();
        navigate(`./search/${e.target[0].value}`)
    }
    return (
        <form id="searchbar" onSubmit={handleSubmission}>
            <input type="search" id="searchQuery" placeholder="Search for crypto here..." />
            <IconButton type="submit" color="primary" size="small">
                <img src="/img/magnifier-icon.svg" alt="magnifier search" />
            </IconButton>
        </form>
    )
}

export default Header;
