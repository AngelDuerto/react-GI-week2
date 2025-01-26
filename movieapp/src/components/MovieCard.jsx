import React from "react";
import {Link} from "react-router-dom"

const MovieCard = ({ movie }) => {
    return (

        <div className="movieContainer">
            <Link to={`/movie/${movie.id}`} className="linkContainer">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} 
            />
            <h3>{movie.title}</h3>
            <p className="releaseDate">Release Date: {movie.release_date}</p>
            </Link>
        </div>
    );
};

export default MovieCard;