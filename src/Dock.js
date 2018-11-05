import React, { Component } from 'react';
import DockItem from './DockItem';

class Dock extends Component {

    handleClick(persoon) {
      this.props.veranderCurrentQuestion(persoon);
    }

    constructor(props) {
        super(props);

        this.state = {
            currentMriStatus: 0,
            currentCtStatus: 2,
            labWaitingTime: 5
        };

        this.mriStatus = this.mriStatus.bind(this);
        this.ctStatus = this.ctStatus.bind(this);
        this.labWaitingTimes = this.labWaitingTimes.bind(this);
    }
    componentDidMount() {
        // when the component mounts (renders to the page), set the interval for each function.
        this.mriStatus = setInterval(this.mriStatus, 15000);
        this.ctStatus = setInterval(this.ctStatus, 13000);
        this.labWaitingTimes = setInterval(this.labWaitingTimes, 14000);
    }
    mriStatus() {
        // this function will set the state with a random number, every time it renders (interval)
        this.setState({
            currentMriStatus: Math.floor((Math.random() * 8))
        });
    }
    ctStatus() {
        // this function will set the state with a random number, every time it renders (interval)
        this.setState({
            currentCtStatus: Math.floor((Math.random() * 8))
        });
    }
    labWaitingTimes() {
        // this function will set the state with a random number, every time it renders (interval)
        this.setState({
            labWaitingTime: Math.floor((Math.random() * 4))
        });
    }
    render() {
        let babywarning;

        if(this.props.interactieveData.babyOverleden){
          babywarning = "status_ok dead"
        } else if(this.props.interactieveData.babyUrgentie >= 2){
          babywarning = "status_warning flatline"
        } else{
          babywarning = "status_ok"
        }

        let omawarning;

        if(this.props.interactieveData.omaOverleden){
          omawarning = "status_ok dead"
        } else if(this.props.interactieveData.omaUrgentie >= 3){
          omawarning = "status_warning flatline"
        }  else{
          omawarning = "status_ok"
        }

        let kameleonwarning;

        if(this.props.interactieveData.kameleonOverleden){
          kameleonwarning = "status_ok dead"
        } else if(this.props.interactieveData.kameleonUrgentie >= 2){
          kameleonwarning = "status_warning flatline"
        }  else{
          kameleonwarning = "status_ok"
        }


        return (
            <div className="dock" >
                <div className="dock__item"
                    onClick={() => this.handleClick(this.props.interactieveData.babyCurrentQuestion)}>
                  <DockItem name="Patient Room 1"  status="Baby"         statusStyle={babywarning}  />
                </div>
                <div className="dock__item"
                    onClick={() => this.handleClick(this.props.interactieveData.omaCurrentQuestion)}>
                  <DockItem name="Patient Room 2"  status="Grandma"      statusStyle={omawarning} />
                </div>
                <div className="dock__item"
                    onClick={() => this.handleClick(this.props.interactieveData.kameleonCurrentQuestion)}>
                  <DockItem name="Patient Room 3"  status="Chameleon"      statusStyle={kameleonwarning} />
                </div>
                <div className="dock__item">
                    <DockItem name="MRI Scanner"     status={this.state.currentMriStatus + " waiting"}  statusStyle={this.state.currentMriStatus < 5 ? "status_ok" : "status_warning"} />
                </div>
                <div className="dock__item">
                    <DockItem name="CT Scanner"      status={this.state.currentCtStatus + " waiting"}  statusStyle={this.state.currentCtStatus < 5 ? "status_ok" : "status_warning"} />
                </div>
                <div className="dock__item">
                    <DockItem name="Lab"             status={this.state.labWaitingTime + "min"}  statusStyle={this.state.labWaitingTime < 4 ? "status_ok" : "status_warning"} />
                </div>
            </div>
        );
    }

}


export default Dock;
