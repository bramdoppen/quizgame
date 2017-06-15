import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

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
      <Sound
          url="/sound/screem.wav"
          playStatus={this.props.PlayDeadSound ? Sound.status.PLAYING : ''}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <h2>{this.props.PopupData}</h2>
        <p onClick={this.handleClick}>Next</p>
      </div>
    );
  }
}

export default Popup;
