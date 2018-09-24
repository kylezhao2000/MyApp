
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Color from './Color';

export default class TitleBar extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>☰</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Color.titleBarBack,
  },
  title: {
    color: Color.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Color.darkblue,
  },
  buttonText: {
    color: Color.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
});