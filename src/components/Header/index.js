import React, { Component } from 'react';
import SearchInput from '../SearchInput';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="banner row">
                    <h1 className="brand-title large-10">The Times</h1>
                    <SearchInput style="header-search" />
                </div>
            </header>
        )
    }
}

export default Header;