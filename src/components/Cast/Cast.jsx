import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import { PosterCast, TitleCast, CastList, CastItem } from './Cast.styled';

export const Cast = () => {
    const [casts, setCast] = useState(null);
    // console.log('movieId', movieId);

    useEffect(() => {
      getMovieCastReviews('credits').then(data => setCast(data.cast));
    }, [])

    if (!casts) return;
    return (
      <CastList>
        {casts.map(cast => {
          const { name, original_name, profile_path } = cast;
          return (
            <CastItem key={name}>
              <PosterCast src={`${BASE_POSTER_URL}/${profile_path}`} alt={name} />
              <TitleCast>{name || original_name}</TitleCast>
            </CastItem>
          );
        })}
      </CastList>
    );
}

// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.