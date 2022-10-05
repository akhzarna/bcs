import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';
import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import React, { Component, useEffect, useState } from 'react';

var flag = 12;

export default class SettingForClass extends Component {

  constructor(props){
    super(props)
    this.state={
      count: 0
    }
  }

  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps')
  }

  componentDidMount(){
    console.log('didMount')
  }

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return null;
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(){
    return true
  }
  
  render(){
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      {console.log('Setting for Class Return Return')}
      
           
      <Button
          title="Going Back"
          onPress={() =>
          this.props.navigation.navigate('HomeForClass')
        }
        />
     
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
