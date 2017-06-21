import React, { Component } from 'react';

let oldCurrentQuestion = 0;

let interactieveData = {
    omaCurrentQuestion: 1,
    omaUrgentie: 0,
    omaAfgerond: false,
    omaOverleden: false,

    babyCurrentQuestion: 11,
    babyUrgentie: 0,
    babyAfgerond: false,
    babyOverleden: false,

    kameleonCurrentQuestion: 18,
    kameleonUrgentie: 0,
    kameleonAfgerond: false,
    kameleonOverleden: false
};

class DataVerwerker extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   omaCurrentQuestion: 0,
    //   omaUrgentie: 0,
    //   omaAfgerond: false,
    //   omaOverleden: false,
    //
    //   babyCurrentQuestion: 0,
    //   babyUrgentie: 0,
    //   babyAfgerond: false,
    //   babyOverleden: false,
    //
    //   kameleonCurrentQuestion: 0,
    //   kameleonUrgentie: 0,
    //   kameleonAfgerond: false,
    //   kameleonOverleden: false,
    // };

    this.handleDataVerwerking = this.handleDataVerwerking.bind(this);
  }

  handleDataVerwerking(a) {
    const currentQuestion = this.props.currentQuestion

    console.log(currentQuestion)
    if( currentQuestion < 11
        && currentQuestion >= 1
        && currentQuestion !== oldCurrentQuestion
        && currentQuestion !== interactieveData.omaCurrentQuestion) {
      interactieveData.babyUrgentie++;
      interactieveData.kameleonUrgentie++;
      if(interactieveData.omaUrgentie > 0) {
        interactieveData.omaUrgentie--;
        interactieveData.omaUrgentie--;
      }
      interactieveData.omaCurrentQuestion = currentQuestion
      oldCurrentQuestion = currentQuestion
    } else if (
        currentQuestion >= 11
        && currentQuestion <= 17
        && currentQuestion !== oldCurrentQuestion
        && currentQuestion !== interactieveData.babyCurrentQuestion) {
      interactieveData.omaUrgentie++;
      interactieveData.kameleonUrgentie++;
      if(interactieveData.babyUrgentie > 0) {
        interactieveData.babyUrgentie--;
        interactieveData.babyUrgentie--;
      }
      interactieveData.babyCurrentQuestion = currentQuestion
      oldCurrentQuestion = currentQuestion
    } else if (
        currentQuestion > 17
        && currentQuestion !== oldCurrentQuestion
        && currentQuestion !== interactieveData.kameleonCurrentQuestion) {
      interactieveData.omaUrgentie++;
      interactieveData.babyUrgentie++;
      if(interactieveData.kameleonUrgentie > 0) {
        interactieveData.kameleonUrgentie--;
        interactieveData.kameleonUrgentie--;
      }
      interactieveData.kameleonCurrentQuestion = currentQuestion
      oldCurrentQuestion = currentQuestion
    }

    if(interactieveData.omaUrgentie >= 5){
      interactieveData.omaOverleden = true;
      interactieveData.omaAfgerond = true;
    } else if(interactieveData.babyUrgentie >= 5){
      interactieveData.babyOverleden = true;
      interactieveData.babyAfgerond = true;
    } else if(interactieveData.kameleonUrgentie >= 5){
      interactieveData.kameleonOverleden = true;
      interactieveData.kameleonAfgerond = true;
    }


    if(this.props.currentQuestion === 25){
      interactieveData.kameleonAfgerond = true;
    } else if(this.props.currentQuestion === 9 || this.props.currentQuestion === 10) {
      interactieveData.omaAfgerond = true;
    } else if(this.props.currentQuestion === 17) {
      interactieveData.babyAfgerond = true;
    }

    this.props.receiveDataVerwerking(interactieveData);

  }

  render() {
    this.handleDataVerwerking()
    return(
        <span></span>
    )
  }
}

export default DataVerwerker;