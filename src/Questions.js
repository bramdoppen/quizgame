import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Questions.css';

import Popup from './Popup.js';

import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Afbeeldingen from "./Afbeeldingen.js";
import DragDrop from "./DragDrop.js";

class Questions extends Component {
  static get propTypes() {
    return {
      //data: PropTypes.array.isRequired,
      stateSwitch: PropTypes.bool
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      stateSwitchSwap: this.props.stateSwitch,
    };
  }

  render() {
    let renderQuestionType;

    switch(this.props.data.questionType) {
      case "MC":
        renderQuestionType = (
          <MultipleChoiceQuestion
            data={this.props.data}
            handleUserAnswer={this.props.handleUserAnswer} />
        );
        break;
      case "IMG":
        renderQuestionType = (
          <Afbeeldingen
            data={this.props.data}
            handleUserAnswer={this.props.handleUserAnswer} />
        );
        break;
      case "DD":
        renderQuestionType = (
            <DragDrop
              data={this.props.data}
              handleUserAnswer={this.props.handleUserAnswer} />
        );
        break;
      default:
        console.error(`Invalid questionType: ${this.props.data.questionType}`);
        break;
    }

    if (!this.props.stateSwitch) {

      return (
        <div className='Questions'>
          {renderQuestionType}
        </div>
      );
    } else {

      return (
        <div className='Questions'>
          <Popup answerClicked={this.props.closePopup} />
        </div>
      );
    }
  }
}

export default Questions;
