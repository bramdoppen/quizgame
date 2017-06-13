import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/QuestionsWrapper.css';
import Questions from './Questions';
import Tijdlijn from "./Tijdlijn";
import Dock from "./Dock";
// import './css/BodyWrapper.css';

class QuestionsWrapper extends Component {
  static get propTypes() {
    return {
      data: PropTypes.array.isRequired,
    };
  }

 constructor(props) {
    super(props);

    const questionType = this.props.data[0].questionType;

    this.state = {
      currentQuestion: 0,
      questionType: questionType,
      answerGiven: false,
      answerNummer: 0,
      answer: "meep",
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  handleUserAnswer(answerNumber) {

    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];
    const givenAnswers = currentQuestion.answers[answerNumber];

    console.log(answerNumber, currentQuestion.correct)
    if (answerNumber === currentQuestion.correct) {
      console.log('🎆 Correct! 🎆');
      this.setState({answerGiven: true, answer: givenAnswers});
    } else {
      console.log('🚫 Incorrect... 🚫');
    }
  }

  closePopup() {
    const nextQuestionType = this.props.data[this.state.currentQuestion + 1].questionType;
    const number = this.state.currentQuestion + 1;
    this.setState({answerGiven: false, currentQuestion: number, questionType: nextQuestionType});
  }

  handleClick(event) {
    this.props.answerClicked(this.props.number , this.props.currentQuestion)
  }

  render() {
    return (
      <div className="QuestionsWrapper">
          {/*<Tijdlijn*/}
            {/*answer={this.state.answer}*/}
          {/*/>*/}
          <Questions
            data={this.props.data[this.state.currentQuestion]}
            stateSwitch={this.state.answerGiven}
            handleUserAnswer={this.handleUserAnswer}
            closePopup={this.closePopup}
          />
          <Dock />
      </div>
    );
  }
}

export default QuestionsWrapper;
