import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';
import Dock from "./Dock";
import Navbar from './Navbar';
import NoteHistorySwitcher from './NoteHistorySwitcher';
import Sound from 'react-sound';
import DataVerwerker from './DataVerwerker';

let interactieveData = {
  omaCurrentQuestion: 1,
  omaUrgentie: 0,
  omaAfgerond: false,
  omaOverleden: false,

  babyCurrentQuestion: 11,
  babyUrgentie: 0,
  babyAfgerond: false,
  babyOverleden: false,

  kameleonCurrentQuestion: 18,
  kameleonUrgentie: 0,
  kameleonAfgerond: false,
  kameleonOverleden: false
};

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
      answer: "",
      nextQuestion: 0,
      popupData: "",
      dead: false,
      playStatus: Sound.status.PLAYING,
      backgroundClass: 'lobby',
    };

    this.musicPause = this.musicPause.bind(this);
    this.handleUserAnswer = this.handleUserAnswer.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.receiveDataVerwerking = this.receiveDataVerwerking.bind(this);
    this.veranderCurrentQuestion = this.veranderCurrentQuestion.bind(this);
  }

  handleUserAnswer(answerNumber) {

    const currentNumberQuestion = this.state.currentQuestion;
    const currentQuestion = this.props.data[currentNumberQuestion];
    const givenAnswers = currentQuestion.answers[answerNumber];

    this.setState({
      answerGiven: true,
      answer: givenAnswers,
      dead: (currentQuestion.questionType !== "REORDER" ? this.props.data[this.state.currentQuestion].answers[answerNumber].dead : false),
      nextQuestion: (currentQuestion.questionType !== "REORDER" ? this.props.data[this.state.currentQuestion].answers[answerNumber].nextQuestion : 14),
      popupData: (currentQuestion.questionType !== "REORDER" ? this.props.data[this.state.currentQuestion].answers[answerNumber].message : "Well, this was predictable. Cutie pie has a brain tumor."),
    });

  }

  receiveDataVerwerking(data){
    interactieveData = data;
  }

  veranderCurrentQuestion(question){
    this.setState({currentQuestion: question});
  }

  closePopup() {
    const nextQuestionType = this.props.data[this.state.nextQuestion].questionType;
    console.log(this.props.data[this.state.nextQuestion].background);
    this.setState({
      dead: false,
      answerGiven: false,
      currentQuestion: this.state.nextQuestion,
      questionType: nextQuestionType,
      backgroundClass: this.props.data[this.state.nextQuestion].background,
    });
  }

  musicPause() {
    this.setState({
      playStatus: (this.state.playStatus === Sound.status.PLAYING ? Sound.status.PAUSE : Sound.status.PLAYING )
    });
  }

  render() {
    return (
      <div className={'QuestionsWrapper ' + (this.state.backgroundClass)  }>
        <DataVerwerker currentQuestion={this.state.currentQuestion} receiveDataVerwerking={this.receiveDataVerwerking} />
          <NoteHistorySwitcher PopupData={this.state.popupData} />
        <Sound
            url="/sound/backgroundd.mp3"
            playStatus={this.state.playStatus}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <Navbar
          answerClicked={this.musicPause}
          playIcon={this.state.playStatus === Sound.status.PLAYING ? "Off" : "On"}
        />
        <Questions
          data={this.props.data[this.state.currentQuestion]}
          stateSwitch={this.state.answerGiven}
          handleUserAnswer={this.handleUserAnswer}
          closePopup={this.closePopup}
          PlayDeadSound={this.state.dead}
          PopupData={this.state.popupData}
        />
        <Dock
          veranderCurrentQuestion={this.veranderCurrentQuestion}
          interactieveData={interactieveData}
        />
      </div>
    );
  }
}

export default QuestionsWrapper;
