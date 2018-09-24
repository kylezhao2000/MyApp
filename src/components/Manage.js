
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TitleBar from '../gears/TitleBar';
import Color from '../gears/Color';


export default class Manage extends Component{

  render(){
    return(
      <View>
        <TitleBar title="Manage"></TitleBar>
        <View></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: Color.darkblue,
  },
  title: {
    color: Color.white,
  },
  button: {
    backgroundColor: Color.darkblue,
  },
  buttonText: {
    color: Color.white,
  },
});