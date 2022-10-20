import PropTypes from 'prop-types';
import { Text } from './Statistics.styled';

export const Statistics = ({ positivePercentage, ...props }) => {
  return (
    <>
      {Object.keys(props).map(option => (
        <Text key={option}>
          {option}: {props[option]}
        </Text>
      ))}
      <Text>Positive feedback: {positivePercentage}%</Text>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
