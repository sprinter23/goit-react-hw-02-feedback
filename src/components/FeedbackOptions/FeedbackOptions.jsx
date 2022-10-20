import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <>
      {options.map((option, i) => (
        <FeedbackButton
          type="button"
          key={i}
          onClick={() => addFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

//  {
//    Object.keys(options).map(key => (
//      <FeedbackButton
//        key={key}
//        type="button"
//        name={key}
//        onClick={e => addFeedback(e)}
//      >
//        {key}
//      </FeedbackButton>
//    ));
//  }
