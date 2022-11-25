import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieCastReviews } from 'services/api';
import { ListReviews, ItemReviews, Username, PostReviews } from './Reviews.styled';

export const Reviews = () => {
    const [reviews, SetReviews] = useState(null);

    useEffect(() => {
      getMovieCastReviews('reviews').then(data => SetReviews(data.results));
    }, [])

    if (!reviews) return;
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
    )
}

// movies/:movieId/reviews – компонент Reviews, інформація про огляди.
//  Рендериться на сторінці MovieDetails.


// https://api.themoviedb.org/3/ - BASE
// movie/{movie_id}/reviews
// ?api_key=7aad03acd041c1a176849aa04c88bca4&language=en-US&page=1