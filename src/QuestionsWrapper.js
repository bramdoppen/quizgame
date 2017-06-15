import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';
import Dock from "./Dock.js";
import Sound from 'react-sound';

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
      nextQuestion: 0,
      PopupData:"",
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  handleUserAnswer(answerNumber) {

    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];
    const givenAnswers = currentQuestion.answers[answerNumber];

    if(currentQuestion.questionType !== "REORDER" ) {
      this.setState({
        nextQuestion: this.props.data[this.state.currentQuestion].answers[answerNumber].nextQuestion,
        PopupData: this.props.data[this.state.currentQuestion].answers[answerNumber].message,
        answerGiven: true,
        answer: givenAnswers
      })
    } else {
      console.log("question type is reorder")
    }
  }

  closePopup() {
    const nextQuestionType = this.props.data[this.state.nextQuestion].questionType;
    this.setState({answerGiven: false, currentQuestion: this.state.nextQuestion, questionType: nextQuestionType});
  }

  handleClick(event) {
    this.props.answerClicked(this.props.number , this.props.currentQuestion)
  }

  render() {
    return (
      <div className="QuestionsWrapper">
          <Sound
              url="/sound/background.mp3"
              playStatus={Sound.status.PLAYING}
              playFromPosition={300 /* in milliseconds */}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        <Questions
          data={this.props.data[this.state.currentQuestion]}
          stateSwitch={this.state.answerGiven}
          handleUserAnswer={this.handleUserAnswer}
          closePopup={this.closePopup}
          PopupData={this.state.PopupData}
        />
        <Dock />
      </div>
    );
  }
}

export default QuestionsWrapper;
