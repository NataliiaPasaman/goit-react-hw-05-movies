import React from "react";
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    const keysOptions = Object.keys(options);

  return keysOptions.map(option => {
    return (
    <button key={option}
    type="button"
    className={css.btn__feedback}
    name={option}
    onClick={onLeaveFeedback} >
      {option}
  </button>)
  })
};

FeedbackOptions.propypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
}