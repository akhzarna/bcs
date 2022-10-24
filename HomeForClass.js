import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';
import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import React, { Component, useEffect, useState } from 'react';

var flag = 12;

export default class HomeForClass extends Component {
  // state={
  //   count: 0,
  //   number: 0
  // }
  constructor(props){
    super(props)
    
    console.log('Constructor')
    this.state={
      count: 0,
      number: 0
    }
  }

  static getDerivedStateFromProps(props,state){
      console.log('getDerivedStateFromProps')
    // console.log('getDerivedStateFromProps Props',props)
    // console.log('getDerivedStateFromProps State',state)
  }
  
  render(){
    console.log('Home for Class Render')

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      
    {console.log('Home for Class Return')}

      <Button
          title="Go to Setting Class"
          onPress={() =>
          this.props.navigation.navigate('SettingForClass')
        }
        />

        <Button
          title="Update State to Count 12"
          onPress={() =>
          this.setState({count:15})
        }
        />

        <Button
          title="Update State"
          onPress={() =>
          this.setState({count:10})
        }
        />
     
    </View>
  );
  }

  componentDidMount(){
    console.log('didMount')
  }


  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return null;
  }

  shouldComponentUpdate(){
    return false
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
   }

  componentWillUnmount(){
    console.log('componentWillUnmount')
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
