import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, StyleSheet, Alert} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Realm, * as schema from "../../db/realm";

import Color from '../../gears/Color';

const realm = new Realm({schema: [schema.StatusSchema,schema.RegionSchema,schema.CommunitySchema,schema.CitySchema,schema.ProvinceSchema,schema.MemberSchema]});

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      resp: {},
    };
  }


  _loginOnPress = ()=>{
    alert(realm.path);

    if(this.state.email == "" || this.state.password == ""){
      Alert.alert("Error", "Please input Email and Password");
    }else{
      fetch("http://10.0.2.2:8080/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.email,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(responseJson =>{
        this.setState({resp: responseJson});

        // this.props.navigation.dispatch(resetAction);
      })
      .catch(error => {
        Alert.alert("error login");
        console.error(error);
      });
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:1}}></View>
        <View style={{flex:1, padding:50}}>
          <View style={styles.emailBack}>
            <TextInput
              placeholder="Email"
              onChangeText={text => this.state.email = text}
            />
          </View>
          <View style={styles.passwordBack}>
            <TextInput
              placeholder="Password"
              onChangeText={text => this.state.password = text}
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