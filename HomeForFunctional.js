import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

export default function HomeForFunctional() {
  
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const [flag, setFlag] = useState(0)

  // Akaila Use Effect karay ga
  // componentDidMount
  // componentDidUpdate
  // ComponentWillUnMount

  useEffect(()=>{
    console.log('simple useEffect')
  })

  useEffect(()=>{
    console.log('simple useEffect []')
    setFlag(flag+1)
    return()=>{
      console.log('Un Mounted')
    }
  },[])

  useEffect(()=>{
    console.log('simple useEffect count')
  },[count])

  useEffect(()=>{
    console.log('simple useEffect flag')
  },[flag])

  useEffect(()=>{
    console.log('simple useEffect number')
  },[number])

  useEffect(()=>{
    console.log('simple useEffect All')
  },[count,flag, number])

  return (
    <View style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
        <Text style={{fontSize:30, marginBottom:20, marginTop:20}}>
          
          Count is = {count}  and Number is {number} Flag {flag}
          
          </Text>
        
        {console.log('Return is called or not')}
        
        <Button
          title="Update State for Count"
          onPress={
            ()=> setCount(count+1)
          }
        />

        <Button
          title="Update State for Number"
          onPress={
            ()=> setNumber(number+1)
          }
        />

      <Button
          title="Update State for Flag"
          onPress={
            ()=> setFlag(flag+1)
          }
        />

        <Button
          title="Update State for All"
          onPress={
            ()=> 
            {
              global.setting={
                fs:150,
                fc:'white',
                bc:'green'
              }
            }
          }
        />
     
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
