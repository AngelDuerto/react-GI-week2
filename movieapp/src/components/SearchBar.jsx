import React, { useState } from "react";
import SearchButton from "./SearchButton"

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="searchBar">
            <input 
                className="searchInput"
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie!"
            />
            <SearchButton onClick={handleSearch} />
        </form>
    );
};

export default SearchBar;