/**
 * Created by Charly on 2-6-2017.
 */
import React, { Component } from 'react';
import menuPlaatje from './img/menu-options.png';

class Navigatiebar extends Component {
    render(){
        return(
            <nav>
                <h3>Exploding Kittens</h3>
                <img src={menuPlaatje} alt="menu" onClick={klapMenuUit} />
            </nav>
        );
    }
}

function klapMenuUit() {
    console.log("Clicked");
    //return <Menu/>;
}

class Menu extends Component {
    render(){
        return(
            <div className="menu-open">
            <h1>Menu Uitklap</h1>
            </div>
        );
    }
}

export default Navigatiebar;
