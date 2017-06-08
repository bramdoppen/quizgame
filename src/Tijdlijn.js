import React, { Component } from 'react';

class Tijdlijn extends Component {

    render() {
        return (
            <div className="tijdlijnBalk">
                <h3>{this.props.answer}</h3>
            </div>
        );
    }

}

export default Tijdlijn;
