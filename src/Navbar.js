import React, { Component } from 'react';
// import menuPlaatje from './img/menu-options.png';
import soundOn from './img/icons/sound-on.svg';
import soundOff from './img/icons/sound-off.svg';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static get propTypes() {
        return {
            answerClicked: PropTypes.func,
        };
    }

    handleClick(event) {
        this.props.answerClicked();
    }

    render() {
        const handleClick = this.handleClick.bind(this);

        return (
            <nav className="Navbar">
                <button onClick={handleClick}>
                    <img className="sound" alt="Sound" src={this.props.playIcon === "On" ? soundOff : soundOn} />
                </button>
            </nav>
        );
    }
}

export default Navbar;
