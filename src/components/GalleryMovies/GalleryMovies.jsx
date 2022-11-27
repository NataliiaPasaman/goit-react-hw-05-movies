import PropTypes from "prop-types";
import { MoviesList } from "./GalleryMovies.styled";
import { GalleryMoviesItem } from "components/GalleryMoviesItem/GalleryMoviesItem";

export const GalleryMovies = ({ movies }) => {
  return (
    <MoviesList>
      <GalleryMoviesItem movies={movies} />
    </MoviesList>
  );
};

GalleryMovies.propTypes = {
    movies: PropTypes.array.isRequired,
}