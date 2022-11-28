import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '7aad03acd041c1a176849aa04c88bca4';

export const moviesTrendingAPI = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/week?api_key=${KEY}`);
    const results = await response.data.results;
    return results;
}

export const moviesSearchAPI = async (query) => {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    const results = await response.data.results;
    return results;
}

export const getMovieById = async (movieId) => {
    const MovieResponse = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
    return MovieResponse.data;
}

export const getMovieCastReviews = async (movieId, type) => {
    const MovieCastResponse = await axios.get(`${BASE_URL}movie/${movieId}/${type}?api_key=${KEY}&language=en-US`);
    return MovieCastResponse.data;
}