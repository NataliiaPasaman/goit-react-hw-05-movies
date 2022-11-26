import React from 'react';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import { BASE_POSTER_URL } from 'constans/constans';
import { PosterCast, TitleCast, CastList, CastItem, ImageWrapper } from './Cast.styled';
import { DEFAULT_IMAGE } from 'constans/constans';

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
              <ImageWrapper>
              <PosterCast 
              src={profile_path ? `${BASE_POSTER_URL}/${profile_path}` : DEFAULT_IMAGE} 
              alt={name} />
              </ImageWrapper>
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