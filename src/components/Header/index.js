import React, { Component } from 'react';
import SearchInput from '../SearchInput';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="banner row">
                    <h1 className="brand-title large-10">The Times</h1>
                    <div className="search-container large-2">
                        <SearchInput searchFunc={this.props.searchFunc} style="header-search" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;