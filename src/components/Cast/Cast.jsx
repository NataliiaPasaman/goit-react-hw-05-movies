import React from 'react';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { BASE_POSTER_URL } from 'constans/constans';
import { 
  PosterCast, 
  TitleCast, 
  CastList, 
  CastItem, 
  ImageWrapper, 
  NoCasts } from './Cast.styled';
import { DEFAULT_IMAGE } from 'constans/constans';

const Cast = ({ movieId }) => {
    const [casts, setCast] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      getMovieCastReviews(movieId, 'credits').then(data => setCast(data.cast))
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
    }, [movieId])

    if (!casts) return;
    return (
      <>
      {loading && <Loader />}
      {casts.length === 0 && (
      <NoCasts>Sorry, we don't find casts for this movie</NoCasts>
      )}
      <CastList>
        {casts.map(({ name, original_name, profile_path }) => {
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
      </>
    );
}

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
}