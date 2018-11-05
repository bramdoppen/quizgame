import React, { Component } from 'react';
import nurseimg from './img/icons/nurse.svg';
import googlelogo from './img/logogoogle.png';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1e7xGq9OLai-fsgGmD03V3e0mT0gl6SY",
    authDomain: "quizgame-63308.firebaseapp.com",
    databaseURL: "https://quizgame-63308.firebaseio.com",
    projectId: "quizgame-63308",
    storageBucket: "quizgame-63308.appspot.com",
    messagingSenderId: "740045311857"
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
                    <div className="googleSigninButton" onClick={this.handleLogin}><img className="logo" alt="Google Logo"
                                                                                        src={googlelogo}/><span>Login with Google</span>
                    </div>
                    <div className="nurse-image"><img src={nurseimg} alt="Nurse" /></div>
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
