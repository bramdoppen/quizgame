/**
 * Created by Ab on 08-06-17.
 */
import React, { Component } from 'react';
import './css/PopOver.css';
import SimplePopover from 'react-simple-popover';

class PopOver extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleClick() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {

        return (
            <div className="PopOver">
                <img
                    src="https://d30y9cdsu7xlg0.cloudfront.net/png/7455-200.png"
                    alt="Vraagteken"
                    ref="target"
                    onClick={this.handleClick.bind(this)}  />

                <SimplePopover
                    placement='left'
                    target={this.refs.target}
                    show={this.state.open}
                    onHide={this.handleClose.bind(this)} >
                    <p>{this.props.data.tip}</p>
                </SimplePopover>
            </div>
        );
    }
}

export default PopOver;
