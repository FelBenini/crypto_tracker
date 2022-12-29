import React from "react";
import IconButton from '@mui/material/IconButton';

class Header extends React.Component {
    handleSubmission(e) {
        e.preventDefault();
    }

    render() {
        return (
            <header>
                <span class="sided">
                    <img src="img/logo-header.svg" alt="Logo header svg" />
                    <h1>cryptoTracker</h1>
                </span>

                <form id="searchbar" onSubmit={this.handleSubmission}>
                    <input type="search" placeholder="Search for crypto here..." />
                    <img src="img/magnifier-icon.svg" alt="magnifier search" />
                </form>

                    <IconButton color="primary" disableFocusRipple="true" size="medium">
                        <input hidden accept="image/*" />
                        <img src="img/theme-mode-dark.svg" alt="dark theme switcher" />
                    </IconButton>

                    <a href="./otherpage">
                        <IconButton color="primary" disableFocusRipple="true" size="medium">
                            <input hidden accept="image/*" />
                            <img src="img/github-icon.svg" alt="github code button link" />
                        </IconButton>
                    </a>
            </header>
        );
    }
}

export default Header;
