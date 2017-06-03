import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Answer.css';

class Answer extends Component {
  static get propTypes() {
    return {
      number: PropTypes.number.isRequired,
      answer: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <li
        className="Answer"
        data-answer-number={this.props.number}>
          {this.props.answer}
      </li>
    );
  }
}

export default Answer;
