import PropTypes from 'prop-types';
import { Container } from './Statistics.styled';
import { Ul } from './Statistics.styled';
import { Li } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Container>
      {total > 0 && (
        <Ul>
          <Li>Good: {good} </Li>
          <Li>Neutral: {neutral} </Li>
          <Li>Bad: {bad} </Li>
          <Li>Total: {total} </Li>
          <Li>Positive Feedback: {positivePercentage}% </Li>
        </Ul>
      )}
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
