import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./Navbar";
import Questions from './Questions';

//json
import questionsData from './quiz/quiz-data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-container">
          <h1>Welcome to Quiz Game!</h1>
          <Questions data={questionsData} />
        </div>
      </div>
    );
  }
}

export default App;
