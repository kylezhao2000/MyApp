
import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './components/Home';
import Member from './components/Member';
import Gift from './components/Gift';
import Manage from './components/Manage';

const Nav = createBottomTabNavigator(
  {
    Home: {screen: Home},
    Member: {screen: Member},
    Gift: {screen: Gift},
    Manage: {screen: Manage},
  },
  {
    initialRouteName:'Home',
    navigationOptions: {

    }
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