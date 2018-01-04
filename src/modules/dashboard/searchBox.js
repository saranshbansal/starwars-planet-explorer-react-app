import React from 'react';

const Search = (props) => (
    <div>
        <h2>Explore Planets</h2>
        <input type="text" placeholder="Search" value={props.searchTxt} onChange={e => props.handleSearch(e)} />
    </div>
);

export default Search;