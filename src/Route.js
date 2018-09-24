
import React, {Component} from 'react';
import {Image, StyleSheet, StatusBar} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Home from './components/home/Home';
import Member from './components/member/Member';
import Gift from './components/gift/Gift';
import Manage from './components/Manage';

import Color from './gears/Color';

const Nav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: (({focused, tintColor}) => {
          return (<Image source={require('./icon/home.png')} style={styles.icon}/>)}),
      }
    },
    Member: {
      screen: Member,
      navigationOptions: {
        tabBarIcon: (({focused, tintColor}) => {
          return (<Image source={require('./icon/member.png')} style={styles.icon}/>)}),
      }
    },
    Gift: {
      screen: Gift,
      navigationOptions: {
        tabBarIcon: (({focused, tintColor}) => {
          return (<Image source={require('./icon/gift.png')} style={styles.icon}/>)}),
      }
    },
    Manage: {
      screen: Manage,
      navigationOptions: {
        tabBarIcon: (({focused, tintColor}) => {
          return (<Image source={require('./icon/manage.png')} style={styles.icon}/>)}),
      }
    },
  },
  {
    initialRouteName:'Home',
    tabBarOptions:{
      style: {backgroundColor: Color.bottomTabBack},
    },
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export default class Route extends Component{
  render(){
    return(
      <Nav />
    );
  }
}