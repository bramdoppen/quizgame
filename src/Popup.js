import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <h2>{this.props.PopupData}</h2>
        <p onClick={this.handleClick}>Close</p>
      </div>
    );
  }
}

export default Popup;
