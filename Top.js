import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function Top(props) {

  useEffect(()=>{
    console.log('Top Use Effect is =', props)
  })

  useEffect(()=>{
    console.log('Top Use Effect i[props.name] is =', props)
  },[props.name])

  useEffect(()=>{
    console.log('Top Use Effect [props.name, props.class] is =', props)
  },[props.name, props.class])

  return (
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        
        <Text style={{color:'white', fontSize:30}}>This is Sign in Screen and Props is = {props.name}</Text>
        
        <Image style={{width:90, height:90}}
        
        source={require('./assets/icon.png')}/>
      </View>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
