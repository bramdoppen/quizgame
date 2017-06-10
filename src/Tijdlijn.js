import React, { Component } from 'react';
import './css/Tijdlijn.css';

class Tijdlijn extends Component {

  render() {
    return (
      <div className="Tijdlijn">
        <h3>{this.props.answer}</h3>
      </div>
    );
  }

}

export default Tijdlijn;
