import React, { Component } from 'react';
import './css/main.css';

import Navbar from "./Navbar";
import QuestionsWrapper from "./QuestionsWrapper.js";
import FirebaseGoogleAuth from "./FirebaseAuth";
import Welcome from "./WelcomeComponent";
// import SortableComponent from './Reorder';

//json
import questionsData from './quiz/quiz-data.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {bram: "Bram"};
        this.Checker = this.Checker.bind(this);
    }
    Checker() {
        console.log("hi");
        console.log(this);
        if("hello" === "hello") {
            this.setState({bram: "Hans"});
        }
    }

  render() {
    return (

      <div className="App" onClick={this.Checker}>
          <Welcome name={this.state.bram}/>

        <Navbar />
        <FirebaseGoogleAuth />
        <div className="container">
          <QuestionsWrapper data={questionsData} />
        </div>
      </div>
    );
  }
}

export default App;
