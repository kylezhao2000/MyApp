
import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Home from './components/Home';
import Member from './components/Member';
import Gift from './components/Gift';
import Manage from './components/Manage';

import Colors from './gears/Colors';

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
      style: {backgroundColor: Colors.lightGray},
    },
  }
);

export default class Route extends Component{

  static navigationOptions = {
    backRouteIndex: 0,
  }

  render(){
    return(
      <Nav />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});