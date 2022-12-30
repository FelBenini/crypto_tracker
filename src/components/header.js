import React from "react";
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

class Header extends React.Component {
    handleSubmission(e) {
        e.preventDefault();
        alert("FORM SUBMITTED")
    }

    render() {
        return (
            <header>
                <Link to="./">
                    <span class="sided">
                        <img src="img/logo-header.svg" alt="Logo header svg" />
                        <h1>cryptoTracker</h1>
                    </span>
                </Link>

                <form id="searchbar" onSubmit={this.handleSubmission}>
                    <input type="search" placeholder="Search for crypto here..." />
                    <IconButton color="primary" size="small" onClick={this.handleSubmission}>
                        <img src="img/magnifier-icon.svg" alt="magnifier search" />
                    </IconButton>
                </form>

                <IconButton color="primary" size="medium" id="dark-switcher">
                    <input hidden accept="image/*" />
                    <img src="img/theme-mode-dark.svg" alt="dark theme switcher" />
                </IconButton>

                <Link to="./otherpage">
                    <IconButton color="primary" size="medium" id="github-link">
                        <input hidden accept="image/*" />
                        <img src="img/github-icon.svg" alt="github code button link" />
                    </IconButton>
                </Link>
                <IconButton color="primary" id="menu-button" size="medium">
                    <input hidden accept="image/*" />
                    <img src="img/menu-mobile.svg" alt="Menu button" />
                </IconButton>
            </header>
        );
    }
}

export default Header;
