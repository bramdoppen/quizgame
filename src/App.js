import React, { Component } from 'react';
import './css/main.css';

import Navbar from "./Navbar";
import QuestionsWrapper from "./QuestionsWrapper.js";
import EndScreen from "./EndScreen";
import WelcomeComponent from "./WelcomeComponent";

//json
import questionsData from './quiz/quiz-data.json';

let einde = false;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          background: "hallo",
          einde: false
        }

      this.eindeTrigger = this.eindeTrigger.bind(this);
    }

    eindeTrigger(data){
      console.log("ik doe ook iets")
      this.setState({einde: true, eindData: data});
    }

    render() {


      return (
        <div className="App">
          <WelcomeComponent />
          <EndScreen trigger={this.state.einde} eindData={this.state.eindData} />
          <div className="container">
              <QuestionsWrapper data={questionsData} eindeTrigger={this.eindeTrigger} />
          </div>
        </div>
      );
    }
}

export default App;
