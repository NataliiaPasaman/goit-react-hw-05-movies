import React from 'react';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import { PosterCast, TitleCast, CastList, CastItem } from './Cast.styled';

export const Cast = ({ movieId }) => {
    const [casts, setCast] = useState(null);

    useEffect(() => {
      getMovieCastReviews(movieId, 'credits').then(data => setCast(data.cast));
    }, [movieId])

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

Cast.propTypes = {
  movieId: PropTypes.string,
}