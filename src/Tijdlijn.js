import React, { Component } from 'react';
let alleAntwoorden = [];

class Tijdlijn extends Component {

    checkNewInformation(){
        let arrayLength = alleAntwoorden.length;
        if(alleAntwoorden[arrayLength-1] !== this.props.PopupData
            && this.props.PopupData !== ""){
            alleAntwoorden.push(this.props.PopupData);
        }
    }

    render() {
        this.checkNewInformation();

        return (
            <div className="Tijdlijn">
                <h2>History</h2>
                {alleAntwoorden.map((answer, i) =>
                    <li key={i} className="gegevenAntwoord">
                        {answer}
                    </li>
                )}
            </div>
        );
    }
}

export default Tijdlijn;
