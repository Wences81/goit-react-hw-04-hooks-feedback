import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export default function FeedbackOptions({ options, handleIncrement }) {
  return options.map(option => (
    <Button type="button" key={option} onClick={() => handleIncrement(option)}>
      {' '}
      {option.toUpperCase()}{' '}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  handleIncrement: PropTypes.func.isRequired,
};
