import React from 'react';

const SearchButton = ({ onClick }) => {
    return (
        <button className='searchButton' onClick={onClick}>
            Search
        </button>
    );
};

export default SearchButton;
