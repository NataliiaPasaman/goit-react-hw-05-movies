import axios from 'axios';
import { BASE_URL, KEY } from 'constans/constans';

export const movieAPI = async (apiQuery, paramsQuery) => {
    const response = await axios.get(`${BASE_URL}${apiQuery}?api_key=${KEY}&${paramsQuery || ''}`);
    const data = await response.data;
    const results = await data.results;

    return results;
}

export const getMovieById = async (movieId) => {
    const MovieResponse = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
    return MovieResponse.data;
}