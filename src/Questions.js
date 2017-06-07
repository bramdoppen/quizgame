import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Questions.css';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Popup from './Popup.js';

class Questions extends Component {
  static get propTypes() {
    return {
      data: PropTypes.array.isRequired,
    };
  }

  constructor(props) {
    super(props);

    const currentQuestion = this.props.data[0];
    const questionType = currentQuestion.questionType

    this.state = {
      currentQuestion: 0,
      questionType: questionType,
      answerGiven: false,
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  handleUserAnswer(answerNumber, questionNumber) {

    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];
    const nextQuestionType = this.props.data[this.state.currentQuestion + 1].questionType

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
    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];
    const nextQuestionType = this.props.data[this.state.currentQuestion + 1].questionType

    const number = this.state.currentQuestion + 1;
    this.setState({answerGiven: false, currentQuestion: number, questionType: nextQuestionType});
  }

  render() {

    let renderQuestionType;

    switch(this.state.questionType) {
        case "MC":
            renderQuestionType = <MultipleChoiceQuestion
                                    data={this.props.data}
                                    handleUserAnswer={this.handleUserAnswer}
                                    questionNumber={this.state.currentQuestion} />
            break;
        case "IMG":
            renderQuestionType = console.log("image vraag")
            break;
    }

      if (!this.state.answerGiven) {
          return (
              <div className='Questions'>
                  {renderQuestionType}
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
