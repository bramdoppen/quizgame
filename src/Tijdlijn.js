import React, { Component } from 'react';
let alleAntwoorden = [];

class Tijdlijn extends Component {

    render() {
        alleAntwoorden.push(this.props.answer);

        return (
            <div className="Tijdlijn">
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
