import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Popup.css';

class Popup extends Component {

  static get propTypes() {
    return {
      answerClicked: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.answerClicked();
  }

  render() {
    return (
      <div className='Popup'>
        <h2>Hi goed gedaan</h2>
        <p onClick={this.handleClick}>Close</p>
      </div>
    );
  }
}

export default Popup;
