const API_KEY = "b5517d860837f27c0cbec4439926e44b";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const getMovieDetails = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
};
