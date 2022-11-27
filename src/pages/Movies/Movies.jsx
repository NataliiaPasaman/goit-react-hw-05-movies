import React from 'react';
import { movieAPI } from 'services/api';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { SearchForm, Input, Button } from './Movies.styled';
import { GalleryMovies } from 'components/GalleryMovies/GalleryMovies';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get("query") ?? "";

  const onSearchChange = evt => {
    setSearchParams({ query: evt.target.value });
  };

  const onSubmit = evt => {
    evt.preventDefault();
    if(!query) return;
    if(!searchParams) return;

    setLoading(true);
    const apiQuery = 'search/movie';
    const paramsQuery = `language=en-US&query=${query}&page=1&include_adult=false`;
    movieAPI(apiQuery, paramsQuery).then(response => {
      setSearchMovies(response); 
      if(searchMovies.length <= 0) {
        return alert('No movies for your request');
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => setLoading(false));
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        
        <Input
          onChange={onSearchChange}
          type="text"
          name={query}
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <Button type="submit">
          <GoSearch size={20} />
        </Button>

      </SearchForm>
      {loading && <Loader />}
      {searchMovies.length > 0 && !loading && <GalleryMovies movies={searchMovies} />}
    </>
  );
};

export default Movies;
