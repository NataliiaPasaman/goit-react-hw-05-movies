import React from 'react';
import { movieAPI } from 'services/api';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GalleryMovies } from 'components/GalleryMovies/GalleryMovies';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const onSearchChange = evt => {
    setSearchQuery(evt.currentTarget.value);
    setSearchParams({ query: evt.target.value });
  };

  const onSubmit = evt => {
    evt.preventDefault();
    if(!searchQuery) return;

    const apiQuery = 'search/movie';
    const paramsQuery = `language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    movieAPI(apiQuery, paramsQuery).then(response => setSearchMovies(response));
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <GoSearch size={20} />
        </button>

        <input
          onChange={onSearchChange}
          type="text"
          name={query}
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      <div>
        {searchMovies.length > 0 && <GalleryMovies movies={searchMovies} />}
      </div>
    </>
  );
};
