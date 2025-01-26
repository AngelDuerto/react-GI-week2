import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api";

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
        };

        fetchMovie()
    }, [id]);

if (!movie) return <p>Loading...</p>;
return (
    <div className="movieDetail">
        <img
            className="imgDetail"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title} 
        />
        <h1>{movie.title}</h1>
        <p className="txtDetail">{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}/10</p>
        <button onClick={() => navigate(-1)} className="backButton">
            Go Back
        </button>
    </div>
    );
};

export default MovieDetail;
