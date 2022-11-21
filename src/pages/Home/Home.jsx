import { movieAPI } from "services/api";
import { GalleryMovies } from "components/GalleryMovies/GalleryMovies";
import { useState, useEffect } from "react";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const apiQuery = 'trending/movie/week';
      movieAPI(apiQuery).then(response => setMovies(response));
    }, []);

    console.log('movies', movies);
    return (
        <GalleryMovies movies={movies} />
    );
}