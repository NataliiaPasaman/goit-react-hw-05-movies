import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import {
  Container,
  PosterMovie,
  ContainerDescription,
  MovieTitle,
  MovieDate,
  Info,
} from 'pages/MovieDetails/MovieDetails.styled';

export const MovieDetails = () => {
  const [objectMovie, setObjectMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then(res => setObjectMovie(res));
  }, [id]);

  if (!objectMovie.id) return;

  const { title, release_date, runtime, overview, genres } = objectMovie;
  const genresMovie = genres.map(genre => genre.name).join(' , ');

  return (
    <Container>
      <PosterMovie
        src={`${BASE_POSTER_URL}/${objectMovie.poster_path}`}
        alt={title}
      />
      <ContainerDescription>
        <MovieTitle>{title} ( {release_date} )</MovieTitle>
        <Info>
          <MovieDate>Runtime:</MovieDate> {runtime} min
        </Info>
        <Info>
          <MovieDate>Overview</MovieDate> {overview}
        </Info>
        <Info>
          <MovieDate>Genres</MovieDate> {genresMovie}
        </Info>
      </ContainerDescription>
    </Container>
  );
};
