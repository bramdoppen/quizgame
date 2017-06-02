import React, { Component } from 'react';
import './css/Questions.css';

class Questions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.text);
    console.log(this.props.text.answers[0]);
    console.log(this.props.questions);
    return (
      <div className= 'Questions'>
        <h1>{this.props.text.question}</h1>
        <p>{this.props.text.answers[0]}</p>
        <p>{this.props.text.answers[1]}</p>
        <p>{this.props.text.answers[2]}</p>
        <p>{this.props.text.answers[3]}</p>
      </div>
    );
  }
}

export default Questions;
