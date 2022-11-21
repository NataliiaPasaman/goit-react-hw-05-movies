import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { BASE_POSTER_URL } from "constans/constans";

export const GalleryMoviesItem = ({ movies }) => {

  return movies.map(movie => {
    const { id, title, poster_path, vote_average } = movie;

    return (
      <li key={id}>
        {/* <Link to=""></Link> */}
        <div>
        <img
          src={`${BASE_POSTER_URL}/${poster_path}`}
          alt={title}
        />
        </div>
        <div>
            <h2>{title}</h2>
            <p>Raiting: {vote_average}</p>
        </div>
      </li>
    );
  });
};

GalleryMoviesItem.propTypes = {
    movies: PropTypes.array,
}