/**
 * Created by Ab on 06-06-17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AfbeeldingenRenderen from './AfbeeldingenRenderen.js'
import './css/Afbeeldingen.css';

class Afbeeldingen extends Component {
    static get propTypes() {
        return {
            data: PropTypes.array.isRequired,
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 27,
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
          <div className= 'Afbeeldingen'>
            <h1>{currentQuestion.question}</h1>
              {currentQuestion.answers.map((answer, i) =>
              <AfbeeldingenRenderen
                key={i}
                number={i}
                plaatje={answer}
                answerClicked={this.handleUserAnswer}
                currentQuestion= {this.state.currentQuestion}
                />
              )}
          </div>
      );
  }
}

export default Afbeeldingen;
