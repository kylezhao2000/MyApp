
import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
// library.add(faStroopwafel)

import Login from './src/components/login/Login';
import Route from './src/Route';


const Nav = createStackNavigator(
  {
    Login: {screen: Login},
    Route: {screen: Route},
  },
  {
    initialRouteName:'Login',
    navigationOptions: {
      header: null,
    }
  }
);

export default class App extends Component{
  render(){
    return(
      <Nav />
    );
  }
}