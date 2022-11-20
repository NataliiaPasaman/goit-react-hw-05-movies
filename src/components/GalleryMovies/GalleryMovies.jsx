import PropTypes from "prop-types";
import { GalleryMoviesItem } from "components/GalleryMoviesItem/GalleryMoviesItem";

export const GalleryMovies = ({ movies }) => {
  return (
    <ul>
      <GalleryMoviesItem movies={movies} />
    </ul>
  );
};

GalleryMovies.propTypes = {
    movies: PropTypes.array,
}