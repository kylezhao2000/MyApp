import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet} from 'react-native';


export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  _loginOnPress(){

  }

  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:1}}></View>
        <View style={{flex:1, padding:50}}>
          <View style={styles.emailBack}>
            <TextInput
              placeholder="Email"
            />
          </View>
          <View style={styles.passwordBack}>
            <TextInput
              placeholder="Password"
            />
          </View>
          <TouchableHighlight onPress={this._loginOnPress} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F0F0F0'
  },
  button: {
    borderRadius:10,
    backgroundColor: '#2196F3',
    alignItems: 'center'
  },
  buttonText: {
    padding: 10,
    color: 'white'
  },
  emailBack: {
    padding:5,
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  passwordBack: {
    padding:5,
    backgroundColor:'white',
    marginBottom:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  }
});