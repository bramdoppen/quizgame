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
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);

        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
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
                <div className="WelcomeComponent__inner"><h1>Welkom op je eerste dag</h1><h3>Houd het hoofd koel en zorg dat
                    je patienten blijven leven!</h3>
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