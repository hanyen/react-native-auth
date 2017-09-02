import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
        apiKey: 'AIzaSyBSUa7erjf3OW9J-SkJ7iBSytNMkBr5TYM',
        authDomain: 'authentication-69314.firebaseapp.com',
        databaseURL: 'https://authentication-69314.firebaseio.com',
        projectId: 'authentication-69314',
        storageBucket: 'authentication-69314.appspot.com',
        messagingSenderId: '465131003483'
      });
  }

  render() {
    return (
      <View>
      <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;


//Authentication with Firebase

// Loggin a user // LoginForm.js 
  //add callback to button
  //authenticate using firebase
  //https://firebase.google.com/docs/auth/web/password-auth


//Error handling (failed authentication)
  //* use .catch
  //* if email not found, create an account
  //validate email format
  //replace button with spinner while authenticating user
    *//create spinner component
  //make email's first letter lowercase
  //* clear out error message if user try again

//Successful Authentication flow
  //use .then
