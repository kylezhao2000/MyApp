
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Colors from './Colors';

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
    backgroundColor: Colors.darkblue,
  },
  title: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.darkblue,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
});