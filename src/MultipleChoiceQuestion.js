import React, { Component } from 'react';
import './css/Answer.css';
import Answer from './Answer';

class MultipleChoiceQuestion extends Component {
  constructor(props) {
  super(props);

  this.handleUserAnswerToQuestion = this.handleUserAnswerToQuestion.bind(this);
}

handleUserAnswerToQuestion(answerNumber) {
  this.props.handleUserAnswer(answerNumber);
}

render() {
  const currentQuestion = this.props.data;

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <ul >
        {currentQuestion.answers.map((answer, i) =>
          <Answer
            key={i}
            number={i}
            answer={answer}
            answerClicked={this.handleUserAnswerToQuestion}
            currentQuestion={this.props.questionNumber}
          />
        )}
      </ul>
    </div>
    );
  }
}

export default MultipleChoiceQuestion;
