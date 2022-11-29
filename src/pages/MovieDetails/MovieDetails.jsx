import React from 'react';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';
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

const MovieDetails = () => {
  const [objectMovie, setObjectMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    setLoading(true);
    getMovieById(id).then(res => setObjectMovie(res))
    .catch(error => console.log(error.message))
    .finally(() => setLoading(false));
  }, [id]);

  if (!objectMovie) return;

  const { title, release_date, runtime, overview, genres } = objectMovie;
  const genresMovie = genres.map(genre => genre.name).join(' , ');

  return (
    <>
    {loading && <Loader />}
    <BackLink to={backLinkHref}>Back</BackLink>
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
            <Link to="cast">Cast</Link>
          </ItemDetails>
          <ItemDetails>
            <Link to="reviews">Reviews</Link>
          </ItemDetails>
        </ListDetails>
        <Suspense fallback={<Loader />}>
          <Outlet/>
        </Suspense>
      </ContainerDetail>
    </Container>
    </>
  );
};

export default MovieDetails;
