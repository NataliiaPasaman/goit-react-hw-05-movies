import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import {
  Container,
  Button,
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

export const MovieDetails = () => {
  const [objectMovie, setObjectMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then(res => setObjectMovie(res));
  }, [id]);

  if (!objectMovie) return;

  const { title, release_date, runtime, overview, genres } = objectMovie;
  const genresMovie = genres.map(genre => genre.name).join(' , ');

  return (
    <>
    <Button>Back</Button>
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
        <Outlet />
      </ContainerDetail>
    </Container>
    </>
  );
};
