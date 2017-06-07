import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Questions.css';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

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
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
  }

  handleUserAnswer(answerNumber, questionNumber) {

    const currentQuestion = this.props.data[this.state.currentQuestion];
    const nextQuestionType = this.props.data[this.state.currentQuestion + 1].questionType

    if (answerNumber === currentQuestion.correct) {
      console.log('🎆 Correct! 🎆');
      var nummer = questionNumber + 1;

      this.setState({currentQuestion: nummer});
      this.setState({questionType: nextQuestionType})
    } else {
      console.log('🚫 Incorrect... 🚫');
    }
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

    return (

      <div className='Questions'>
          {renderQuestionType}
      </div>

    );
  }
}

export default Questions;
