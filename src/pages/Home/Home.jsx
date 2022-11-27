import React from 'react';
import { movieAPI } from "services/api";
import { useState, useEffect } from "react";
import { MoviesList } from "components/GalleryMovies/GalleryMovies.styled";
import { Link } from 'react-router-dom';
import { BASE_POSTER_URL, DEFAULT_IMAGE } from "constans/constans";
import { 
  MovieItem, 
  CardWrapper, 
  MovieName, 
  PosterMovie, 
  MovieRaiting } from "components/GalleryMoviesItem/GalleryMoviesItem.styled";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const apiQuery = 'trending/movie/week';
      movieAPI(apiQuery).then(response => setMovies(response));
    }, []);

    return (
      <MoviesList>
        {movies.map(({ id, title, original_title, poster_path, vote_average }) => {
        return (
      <MovieItem key={id}>
        <Link to={`movies/${id}`}>
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
  })}
      </MoviesList>
    );
}