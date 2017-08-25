import React from 'react';

const SearchInput = (props) => {
    return (
        <form onSubmit={props.searchFunc}>
            <input className={props.style} placeholder="Search" type="text" name="searchInput"></input>
        </form>
    )
}

export default SearchInput;