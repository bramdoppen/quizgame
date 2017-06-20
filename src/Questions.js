import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup.js';

import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Afbeeldingen from "./Afbeeldingen.js";
import DragDrop from "./DragDrop.js";
import PopOver from "./PopOver";
import Reorder from "./Reorder";

class Questions extends Component {

  static get propTypes() {
    return {
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

      case "REORDER":
        renderQuestionType = (
            <Reorder
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
          <PopOver data={this.props.data} />
        </div>
      );
    } else {
      return (
        <div className='Questions'>
          <Popup
            answerClicked={this.props.closePopup}
            data={this.props.data}
            PopupData={this.props.PopupData}
            PlayDeadSound={this.props.PlayDeadSound}/>
        </div>
      );
    }
  }

}

export default Questions;
