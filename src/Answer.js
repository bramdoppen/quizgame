import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Answer.css';

class Answer extends Component {

  static get propTypes() {
    return {
      number: PropTypes.number.isRequired,
      answer: PropTypes.string.isRequired,
      answerClicked: PropTypes.func,
      currentQuestion: PropTypes.currentQuestion,
    };
  }

  handleClick(event) {
    console.log(this.props.currentQuestion);
    this.props.answerClicked(this.props.number , this.props.currentQuestion)
  }

  render() {

    const handleClick = this.handleClick.bind(this);

    return (
      <li
        className="Answer"
        onClick={handleClick}>
          {this.props.answer}
      </li>
    );
  }
}

export default Answer;
