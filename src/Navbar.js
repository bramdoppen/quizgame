import React, { Component } from 'react';
import menuPlaatje from './img/menu-options.png';
import soundOn from './img/icons/sound-on.svg';
import soundOff from './img/icons/sound-off.svg';
import PropTypes from 'prop-types';
// https://facebook.github.io/react/docs/handling-events.html
// https://codepen.io/danbuda/post/a-react-navbar-component

class Navbar extends Component {
    static get propTypes() {
        return {
            answerClicked: PropTypes.func,
        };
    }

    handleClick(event) {
        this.props.answerClicked();
    }

    // menuutje(){
    //     let menu = document.querySelector('.menu-open');
    //     if (menu.style.display === 'block') {
    //         menu.style.display = 'none';
    //     } else {
    //         menu.style.display = 'block';
    //     }
    // }

    render() {
        const handleClick = this.handleClick.bind(this);

        return (
            <nav className="Navbar">
                <button onClick={handleClick}>
                    <img className="sound" src={this.props.playIcon === "On" ? soundOff : soundOn} />
                </button>
            </nav>
        );
    }

} // einde component

export default Navbar;
