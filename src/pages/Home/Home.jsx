import React from 'react';
import { moviesTrendingAPI } from "services/api";
import { useState, useEffect } from "react";
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { BASE_POSTER_URL, DEFAULT_IMAGE } from "constans/constans";
import { MoviesList } from "components/GalleryMovies/GalleryMovies.styled";
import { 
  MovieItem, 
  CardWrapper, 
  MovieName, 
  PosterMovie, 
  MovieRaiting } from "components/GalleryMoviesItem/GalleryMoviesItem.styled";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      moviesTrendingAPI().then(response => setMovies(response))
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
    }, []);

    return (
      <>
        {loading && <Loader />}
        <MoviesList>
          {movies.map(
            ({ id, title, original_title, poster_path, vote_average }) => {
              return (
                <MovieItem key={id}>
                  <Link to={`movies/${id}`}>
                    <CardWrapper>
                      <PosterMovie
                        src={poster_path
                            ? `${BASE_POSTER_URL}/${poster_path}`
                            : DEFAULT_IMAGE}
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
            }
          )}
        </MoviesList>
      </>
    );
}