import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import {
  ListReviews,
  ItemReviews,
  Username,
  PostReviews, 
  NoReviews
} from './Reviews.styled';

const Reviews = ({ movieId }) => {
  const [reviews, SetReviews] = useState(null);

  useEffect(() => {
    getMovieCastReviews(movieId, 'reviews').then(data =>
      SetReviews(data.results)
    )
    .catch((error) => console.log(error.message));
  }, [movieId]);

  if (!reviews) return;

  return (
    <>
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

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
