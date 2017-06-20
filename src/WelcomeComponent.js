import React, { Component } from 'react';
import nurseimg from './img/icons/nurse.svg';
import googlelogo from './img/logogoogle.png';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCoK-sL-0bYkC0Pzm7ph3gb6do0bqrhW18",
    authDomain: "quizgame-ee661.firebaseapp.com",
    databaseURL: "https://quizgame-ee661.firebaseio.com",
    storageBucket: "quizgame-ee661.appspot.com",
};

const database = firebase
    .initializeApp(config)
    .database()
    .ref();

let provider = new firebase.auth.GoogleAuthProvider();

let fbusername = "";


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin : false
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin()  {

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const token = result.credential.accessToken;
            // The signed-in user info.
            fbusername = result.user.displayName;
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
        });
        this.setState({loggedin: true});
    }
    render() {
        const loggedin = this.state.loggedin;
        let welcomecomp = "";

        if(loggedin === true) {
            welcomecomp = "";
        }
        else {
            welcomecomp = <div id="WelcomeComponent" className="WelcomeComponent">
                <div className="WelcomeComponent__inner"><h1>Welcome on your first day</h1><h3>Keep your head cool and your patients alive!</h3>
                    <div className="googleSigninButton" onClick={this.handleLogin}><img className="logo"
                                                                                        src={googlelogo}/><span>Login with Google</span>
                    </div>
                    <div className="nurse-image"><img src={nurseimg}/></div>
                </div>
            </div>;
        }
        return (
            <div>
                {welcomecomp}
            </div>
        )
    }
}
export default Welcome;