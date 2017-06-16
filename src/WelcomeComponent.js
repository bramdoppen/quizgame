import React, { Component } from 'react';
import googlelogo from './img/logogoogle.png';
//import nurseimg from './img/icons/nurse.svg';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    waitForFirebaseAuth() {

    }
    render() {
        return (
            <div className="WelcomeComponent">
                <div className="WelcomeComponent__inner">
                    <h1>Welkom op je eerste dag</h1>
                    <h3>Houd het hoofd koel en zorg dat je patienten blijven leven!</h3>
                    {/*{this.props.name}*/}
                    <div className="googleSigninButton"><img className="logo" src={googlelogo} /><span>Login with Google</span></div>
                    {/*<div className="nurse-image"><img src={nurseimg}/></div>*/}
                </div>

            </div>
        )
    }
}
export default Welcome;
