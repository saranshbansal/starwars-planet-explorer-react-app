import React from 'react';

const Search = (props) => (
    <div>
        <span className="quote">“I’m just a simple man trying to make my way in the universe.” — Jango Fett</span>
        <input type="text" placeholder="Search" value={props.searchTxt} onChange={e => props.handleSearch(e)} />
    </div>
);

export default Search;