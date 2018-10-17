
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

import Color from '../../../gears/Color';

export default class Message extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>{realm.objects('Message').length}</Text>
        <FlatList
          style={styles.list}
          data={[
            {name: 'Jack'},
            {name: 'Rose'},
            {name: 'Lee'},
            {name: 'Fay'},
            {name: 'Kyle'},
            {name: 'Wanger'},
            {name: 'Jack'},
            {name: 'Jack'},
            {name: 'Rose'},
            {name: 'Lee'},
            {name: 'Fay'},
            {name: 'Kyle'},
            {name: 'Wanger'},
            {name: 'Jack'},
          ]}
          renderItem={({item})=><MessageItem name={item.name}/>}
        />
      </View>
    );
  }
}


class MessageItem extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <View style={styles.itemContainer}>

        {/* profile photo */}
        <Image
          source={require('../../../icon/user.jpg')}
          style={styles.photo}
        />

        <View style={styles.itemTextArea}>
          <View style={styles.itemTextAreaLine1}>
            {/* name */}
            <Text
              numberOfLines={1}
              style={styles.name}
            >{this.props.name}</Text>

            {/* date/time of last message */}
            <Text
              numberOfLines={1}
              style={styles.date}
            >23/09/2018</Text>
          </View>

          {/* last message */}
          <Text
            numberOfLines={1}
            style={styles.message}
          >last message last message last message last message last message last message last message</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Color.splitLine,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  itemTextArea: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  itemTextAreaLine1: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    fontSize: 20,
    color: 'black',
  },
  date: {
    width: 70,
    fontSize: 12,
    color: Color.grayText,
    textAlign: 'right',
  },
  message: {
    paddingRight: 30,
    fontSize: 15,
  },
});