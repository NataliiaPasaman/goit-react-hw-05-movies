import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const KEY = '7aad03acd041c1a176849aa04c88bca4';

export const movieAPI = async () => {
    const response = await axios.get(`${BASE_URL}?api_key=${KEY}`);
    const data = await response.data;
    const results = await data.results;

    console.log('results', results);
}
