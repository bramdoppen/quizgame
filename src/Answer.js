import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Answer.css';

class Answer extends Component {

  static get propTypes() {
    return {
      number: PropTypes.number.isRequired,
      answerClicked: PropTypes.func,
    };
  }

  handleClick(event) {
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
