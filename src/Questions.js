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
      currentQuestion: 0,
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
  }

  handleUserAnswer(answerNumber, questionNumber) {

    const currentQuestion = this.props.data[this.state.currentQuestion];

    if (answerNumber === currentQuestion.correct) {
      console.log('🎆 Correct! 🎆');
      var nummer = questionNumber + 1;
      this.setState({currentQuestion: nummer});
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
          data-question-number={this.state.currentQuestion}>
            {currentQuestion.answers.map((answer, i) =>
              <Answer
                key={i}
                number={i}
                answer={answer}
                answerClicked={this.handleUserAnswer}
                currentQuestion= {this.state.currentQuestion}
              />
            )}
        </ul>
      </div>
    );
  }
}

export default Questions;
