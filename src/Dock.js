import React, { Component } from 'react';
import DockItem from './DockItem';

class Dock extends Component {
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

        return (
            <div className="dock">
                <DockItem name="Patient Room 1"  status="Ok"         statusStyle="status_ok" />
                <DockItem name="Patient Room 2"  status="Empty"      statusStyle="status_empty" />
                <DockItem name="Patient Room 3"  status="Empty"      statusStyle="status_empty flatline" />
                <DockItem name="MRI Scanner"     status={this.state.currentMriStatus + " waiting"}  statusStyle={this.state.currentMriStatus < 5 ? "status_ok" : "status_warning"} />
                <DockItem name="CT Scanner"      status={this.state.currentCtStatus + " waiting"}  statusStyle={this.state.currentCtStatus < 5 ? "status_ok" : "status_warning"} />
                <DockItem name="Lab"             status={this.state.labWaitingTime + "min"}  statusStyle={this.state.labWaitingTime < 4 ? "status_ok" : "status_warning"} />
            </div>
        );
    }

}


export default Dock;
