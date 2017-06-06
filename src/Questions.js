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

    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];

    if (answerNumber === currentQuestion.correct) {
      console.log('🎆 Correct! 🎆');
      const number = questionNumber + 1;
      this.setState({currentQuestion: number});
    } else {
      console.log('🚫 Incorrect... 🚫');
    }
  }

  render() {
    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];
    return (
      <div className='Questions'>
        <h1>{currentQuestion.question}</h1>
        <ul>
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
