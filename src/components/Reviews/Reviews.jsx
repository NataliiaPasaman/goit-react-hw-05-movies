import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  ListReviews,
  ItemReviews,
  Username,
  PostReviews, 
  NoReviews
} from './Reviews.styled';

export const Reviews = ({ movieId }) => {
  const [reviews, SetReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieCastReviews(movieId, 'reviews').then(data =>
      SetReviews(data.results)
    )
    .catch((error) => console.log(error.message))
    .finally(() => setLoading(false));
  }, [movieId]);

  if (!reviews) return;

  return (
    <>
      {loading && <Loader />}
      {reviews.length === 0 && (
      <NoReviews>Sorry, but there are no reviews for this movie yet</NoReviews>
      )}
      {reviews && (
        <ListReviews>
          {reviews.map(({ author_details, content }) => {
            return (
              <ItemReviews key={author_details.username}>
                <Username>User: {author_details.username}</Username>
                <PostReviews>{content}</PostReviews>
              </ItemReviews>
            );
          })}
        </ListReviews>
      )}
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
