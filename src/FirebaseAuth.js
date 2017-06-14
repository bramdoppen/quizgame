import React, { Component } from 'react';
import * as firebase from 'firebase';
import "./css/components/Login.css";


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


class FirebaseGoogleAuth extends Component {
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
    }
    render() {
        return (
            <div className="loginButton">
                <span className="loginButton__inner" onClick={this.handleLogin}>Login</span>
            </div>
        )
    }
}

export default FirebaseGoogleAuth;