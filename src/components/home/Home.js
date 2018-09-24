
import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet, StatusBar} from 'react-native';

import Color from '../../gears/Color';
import Route from './route';


export default class Home extends Component{

  render(){
    return(
      <View style={styles.container}>
        {/* change StatusBar style */}
        <StatusBar
          backgroundColor={Color.titleBarBack}
          barStyle="dark-content"
        />

        {/* TitleBar */}
        <TitleBar />

        {/* content */}
        <Route />

      </View>
    );
  }
}

class TitleBar extends Component{
  render(){
    return(
      <View style={styles.titleBarContainer}>
        {/* profile photo */}
        <TouchableHighlight>
          <Image
            source={require('../../icon/user.jpg')}
            resizeMode="contain"
            style={styles.photo}
          />
        </TouchableHighlight>

        {/* search box */}
        <TextInput
          placeholder="Search"
          style={styles.searchBox}
        />

        {/* compose new message/board news */}
        <TouchableHighlight>
          <Image
            source={require('../../icon/edit.png')}
            style={styles.compose}
          />
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBarContainer: {
    paddingLeft:10,
    paddingTop: 10,
    paddingRight:10,
    paddingBottom:3,
    backgroundColor: Color.bottomTabBack,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  photo: {
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  searchBox: {
    flex: 1,
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 15,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  compose: {
    margin: 5,
    width: 20,
    height: 20,
  },
});