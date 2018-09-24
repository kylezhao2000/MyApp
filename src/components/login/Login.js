import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import Color from '../../gears/Color';


export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  _loginOnPress = ()=>{
    // this.props.navigation.navigate('Route');
    this.props.navigation.dispatch(resetAction);
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

//reset navigation stack
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Route' })],
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Color.loginBack,
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