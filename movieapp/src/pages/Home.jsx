import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../api";

function Home() {
    const [movies, setMovies] = useState([]);

    const handleSearch = async (query)=> {
        const results = await searchMovies(query);
        setMovies(results)
    };

    useEffect(() => {
        handleSearch("Pokemon");
    }, []);
    return (
        <div className="homeContainer">
            <SearchBar onSearch={handleSearch} />
            <div className="movieGrid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;