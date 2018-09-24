
import React, {Component} from 'react';
import {View, Text, Image, SectionList, StyleSheet} from 'react-native';

import TitleBar from '../../gears/TitleBar';
import Color from '../../gears/Color';


export default class Member extends Component{

  render(){
    return(
      <View style={styles.container}>
        <TitleBar title="Member"></TitleBar>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item})=><MemberItem name={item}/>}
          renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}


class MemberItem extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <View style={styles.itemContainer}>

        {/* profile photo */}
        <Image
          source={require('../../icon/user.jpg')}
          style={styles.photo}
        />

        {/* name */}
        <Text
          numberOfLines={1}
          style={styles.name}
        >{this.props.name}</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
  sectionHeader: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: Color.grayText,
    backgroundColor: Color.sectionHeader,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Color.splitLine,
    alignItems: 'center',
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  name: {
    flex: 1,
    fontSize: 19,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 20,
  },
});