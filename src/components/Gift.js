
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TitleBar from '../gears/TitleBar';
import Colors from '../gears/Colors';


export default class Gift extends Component{

  render(){
    return(
      <View>
        <TitleBar title="Gift"></TitleBar>
        <View></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: Colors.darkblue,
  },
  title: {
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.darkblue,
  },
  buttonText: {
    color: Colors.white,
  },
});