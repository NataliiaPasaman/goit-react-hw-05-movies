import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  PosterMovie,
  ContainerDescription,
  MovieTitle,
  MovieInfo,
  Info, 
  ContainerDetail, 
  TitleDetail, 
  ListDetails,
  ItemDetails
} from 'pages/MovieDetails/MovieDetails.styled';

export const MovieDetails = ({ getId }) => {
  const [objectMovie, setObjectMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();


  console.log('location', location);

  useEffect(() => {
    setLoading(true);
    getMovieById(id).then(res => setObjectMovie(res))
    .catch(error => console.log(error.message))
    .finally(() => setLoading(false));
  }, [id]);

  const handleClickLink = () => {
    getId(id);
  }

  if (!objectMovie) return;

  const { title, release_date, runtime, overview, genres } = objectMovie;
  const genresMovie = genres.map(genre => genre.name).join(' , ');

  return (
    <>
    {loading && <Loader />}
    <Link to="/" state='/movies'>Back to Home</Link>
    <Container>
      <PosterMovie
        src={`${BASE_POSTER_URL}/${objectMovie.poster_path}`}
        alt={title}
      />
      <ContainerDescription>
        <MovieTitle>{title} ( {release_date} )</MovieTitle>
        <Info>
          <MovieInfo>Runtime:</MovieInfo> {runtime} min
        </Info>
        <Info>
          <MovieInfo>Overview</MovieInfo> {overview}
        </Info>
        <Info>
          <MovieInfo>Genres</MovieInfo> {genresMovie}
        </Info>
      </ContainerDescription>
      <ContainerDetail>
        <TitleDetail>Additional information</TitleDetail>
        <ListDetails>
          <ItemDetails>
            <Link to="cast" onClick={handleClickLink}>Cast</Link>
          </ItemDetails>
          <ItemDetails>
            <Link to="reviews" onClick={handleClickLink}>Reviews</Link>
          </ItemDetails>
        </ListDetails>
        <Outlet/>
      </ContainerDetail>
    </Container>
    </>
  );
};

MovieDetails.propTypes = {
  getId: PropTypes.func,
}