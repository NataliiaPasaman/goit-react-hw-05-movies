import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { BASE_POSTER_URL, DEFAULT_IMAGE } from "constans/constans";
import { MovieItem, CardWrapper, MovieName, PosterMovie, MovieRaiting } from "./GalleryMoviesItem.styled";

export const GalleryMoviesItem = ({ movies }) => {
  return movies.map(movie => {
    const { id, title, original_title, poster_path, vote_average } = movie;

    return (
      <MovieItem key={id}>
        <Link to={`${id}`}>
          <CardWrapper>
            <PosterMovie
              src={poster_path ? `${BASE_POSTER_URL}/${poster_path}` : DEFAULT_IMAGE}
              width="450"
              alt={title}
            />
            <div>
              <MovieName>{title || original_title}</MovieName>
              <MovieRaiting>Raiting: {vote_average}</MovieRaiting>
            </div>
          </CardWrapper>
        </Link>
      </MovieItem>
    );
  });
};

GalleryMoviesItem.propTypes = {
    movies: PropTypes.array,
}
