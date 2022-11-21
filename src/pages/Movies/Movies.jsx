import React from 'react';
import { movieAPI } from 'services/api';
import { GoSearch } from 'react-icons/go';
import { useState, useEffect } from 'react';
import { GalleryMovies } from 'components/GalleryMovies/GalleryMovies';
import PropTypes from 'prop-types';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const onSearchChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const apiQuery = 'search/movie';
    const paramsQuery = `language=en-US&query=${query}&page=1&include_adult=false`;
    movieAPI(apiQuery, paramsQuery).then(response => setSearchMovies(response));
    setQuery('');
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
          name="query"
          value={query}
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
