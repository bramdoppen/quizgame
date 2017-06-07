import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Questions.css';
import Answer from './Answer.js';
import Popup from './Popup.js';

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
      answerGiven: false,
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }


  handleUserAnswer(answerNumber, questionNumber) {

    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];

    if (answerNumber === currentQuestion.correct) {
      console.log('🎆 Correct! 🎆');
      // const number = questionNumber + 1;
      // this.setState({currentQuestion: number});
      this.setState({answerGiven: true});
    } else {
      console.log('🚫 Incorrect... 🚫');
    }
  }

  closePopup() {
    const number = this.state.currentQuestion + 1;
    this.setState({answerGiven: false, currentQuestion: number});
  }

  render() {
    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];

    if (!this.state.answerGiven) {
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

    }else{
      return (
        <div className='Questions'>
          <Popup
            answerClicked={this.closePopup}
          />
        </div>
      );
    }
  }
}

export default Questions;
