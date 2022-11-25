import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import { PosterCast, TitleCast } from './Cast.styled';

export const Cast = () => {
    const [casts, setCast] = useState(null);
    // console.log('movieId', movieId);

    useEffect(() => {
        getMovieCast().then( res => setCast(res.cast));
    }, [])

    if (!casts) return;
    return (
      <ul>
        {casts.map(cast => {
          const { name, original_name, profile_path } = cast;
          return (
            <li key={name}>
              <PosterCast src={`${BASE_POSTER_URL}/${profile_path}`} alt={name} />
              <TitleCast>{name || original_name}</TitleCast>
            </li>
          );
        })}
      </ul>
    );
}

// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.