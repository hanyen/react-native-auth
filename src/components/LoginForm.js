import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

  state = { email: '',
            password: '',
            error: ''
  }

  //function invoked when button is pressed
  onButtonPress() {
    const { email, password } = this.state;
    //authenticate user
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      //login successful

    })
    .catch(() => {
      //if user not found, create an account
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        //show error, need to rerender with error message
        this.setState({ error: 'Authentication Failed' });
      });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder={'user@gmail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={{ height: 20, width: 100 }} 
          />
        </CardSection>
        
        <CardSection>
          <Input 
            secureTextEntry
            placeholder={'Enter password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={{ height: 20, width: 100 }} 
          />
        </CardSection>

        <Text
          style={styles.errorTextStyle}
        >
          {this.state.error}
        </Text>
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
