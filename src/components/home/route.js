
import React, {Component} from 'react';
import {createTabNavigator} from 'react-navigation';

import Color from '../../gears/Color';

import Message from './sub/Message';
import Board from './sub/Board';
import News from './sub/News'

const Nav = createTabNavigator(
  {
    Message: {screen: Message},
    Board: {screen: Board},
    News: {screen: News},
  },
  {
    initialRouteName:'Message',
    tabBarPosition: 'top',
    tabBarOptions: {
      labelStyle: {
        color: Color.titleFore,
        fontSize: 8,
      },
      tabStyle: {
        padding: 10,
        height: 15,
      },
      indicatorStyle: {
        backgroundColor: 'blue',
        height: 1,
      },
      style: {
        backgroundColor: Color.titleBarBack,
      },
    },
    navigationOptions: {

    }
  }
);

export default class Route extends Component{
  render(){
    return(
      <Nav />
    );
  }
}
