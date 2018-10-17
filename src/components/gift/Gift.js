
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import TitleBar from '../../gears/TitleBar';
import Color from '../../gears/Color';


export default class Gift extends Component{

  render(){
    return(
      <View style={styles.container}>

        <MapView
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        {/* <TitleBar title="Gift"></TitleBar> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  map: {
    paddingTop: 50,
    ...StyleSheet.absoluteFillObject,
  },
});