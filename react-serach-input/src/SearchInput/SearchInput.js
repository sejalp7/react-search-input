import React, { useState } from 'react';
import './SearchInput.scss';

function SearchInput(props) {
    const [searchInput, setSearchInput] = useState('');

    const onSearch = (searchText) => {
        console.log('Button Search', searchText);
        setSearchInput(searchText);
    }


    return (
        <div class="searchContainer">
            <input type="text" placeholder='Search' onKeyUp={(e) => onSearch(e.target.value)}/>
            <button onClick={(e) => onSearch(e.target.value)}>Search</button>
            <p>{ searchInput }</p>
        </div>
    );
}

export default SearchInput;