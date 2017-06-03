import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Questions.css';
import Answer from './Answer';

class Questions extends Component {
  static get propTypes() {
    return {
      data: PropTypes.array.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 2,
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
  }

  handleUserAnswer(event) {
    if (event.currentTarget === event.target) {
      return;
    }

    const currentQuestion = this.props.data[this.state.currentQuestion];

    if (+event.target.dataset.answerNumber === currentQuestion.correct) {
      console.log('🎆 Correct! 🎆');
    } else {
      console.log('🚫 Incorrect... 🚫');
    }
  }

  render() {
    const currentQuestion = this.props.data[this.state.currentQuestion];

    return (
      <div className='Questions'>
        <h1>{currentQuestion.question}</h1>
        <ul
          data-question-number={this.state.currentQuestion}
          onClick={this.handleUserAnswer}>
            {currentQuestion.answers.map((answer, i) =>
              <Answer
                key={i} number={i}
                answer={answer}
              />
            )}
        </ul>
      </div>
    );
  }
}

export default Questions;
