import React, { PropTypes } from 'react';

const Answer = ({ answer, handleAnswerClick }) => {
  return (
    <li
      className="question-answer"
      onClick={ function() { console.log(answer) } }>
        {answer}
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Answer;
