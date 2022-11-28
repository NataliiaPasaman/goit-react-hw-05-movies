import axios from 'axios';
import { BASE_URL, KEY } from 'constans/constans';

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