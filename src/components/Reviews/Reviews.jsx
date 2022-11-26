import React from 'react';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import { ListReviews, ItemReviews, Username, PostReviews } from './Reviews.styled';

export const Reviews = ({ movieId }) => {
    const [reviews, SetReviews] = useState(null);

    useEffect(() => {
      getMovieCastReviews(movieId, 'reviews').then(data => SetReviews(data.results));
    }, [movieId])

    if (!reviews) return;
    if (reviews === []) {
        console.log(reviews === []);
        return <p>'Sorry, but there are no reviews for this movie yet'</p>;
    };

    return (
        <ListReviews>
            {reviews.map(review => {
                const { author_details, content } = review;
                return (
                    <ItemReviews key={author_details.username}>
                        <Username>{author_details.username}</Username>
                        <PostReviews>{content}</PostReviews>
                    </ItemReviews>
                )
            })}
        </ListReviews>
    );
}

Reviews.propTypes = {
    movieId: PropTypes.string,
  }