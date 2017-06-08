/**
 * Created by Charly on 2-6-2017.
 */
import React, { Component } from 'react';
import './css/Navbar.css';
import menuPlaatje from './img/menu-options.png';

// https://facebook.github.io/react/docs/handling-events.html
// https://codepen.io/danbuda/post/a-react-navbar-component

class Navbar extends Component {

    menuutje(){
        let menu = document.querySelector('.menu-open');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }

    render() {
        return (
            <nav className="Navbar">
                <h2>Don't let him die!</h2>
                <img src={menuPlaatje}
                     alt="menu button"
                     onClick={this.menuutje}
                     className="hamburger-btn"
                />
                <div className="menu-open">
                    <h1>It's all on you, o yes</h1>
                </div>
            </nav>
        );
    }

} // einde component

export default Navbar;
