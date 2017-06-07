import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Popup.css';

class Popup extends Component {

  static get propTypes() {
    return {
      answerClicked: PropTypes.func,
    };
  }

  handleClick(event) {
    this.props.answerClicked();
  }

  render() {

    const handleClick = this.handleClick.bind(this);

    return (
      <div className='Popup'>
      <h2>Hi goed gedaan</h2>
      <p
      onClick={handleClick}>
        close
      </p>
      </div>
    );
  }
}

export default Popup;
