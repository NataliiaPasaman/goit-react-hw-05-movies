import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';


export const Statistics = ({
  options,
  totalFeedback,
  positivePercentage,
}) => {
  const valuesOptions = Object.values(options);

  return (
    <ul>
      <li className={css.statistics__item}>Good: {valuesOptions[0]}</li>
      <li className={css.statistics__item}>Neutral: {valuesOptions[1]}</li>
      <li className={css.statistics__item}>Bad: {valuesOptions[2]}</li>
      <li className={css.statistics__item}>Total: {totalFeedback()}</li>
      <li className={css.statistics__item}>
        Positive feedback: {positivePercentage() || 0}%
      </li>
    </ul>
    );
};

Statistics.propypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
}),
  totalFeedback: PropTypes.func.isRequired,
  goodPercentage: PropTypes.func.isRequired,
};
