import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import { useEffect, useState } from 'react';

export default function Settings({props,navigation}) {
  const [text, setText] = useState('')
  const [flag, setFlag] = useState(0)
  const [count, setCount] = useState(10)
  const [state, setState] = useState({
    myArray:[],
    flag:0,
    Obj:{}
  })

  for(var i=0; i<=9; i++){
    console.log('i = ',i)
  }

  console.log('is This GetDerivedStatefromProps')

//   const [number, setNumber] = useState('Akhzar Nazir');

// useEffect(()=>{
//   console.log('Profile Screen useEffect []')
//   return()=>{
//     console.log('Profile useEffect return');
//   }
// }, [])

  // useEffect(()=>{
  //   console.log('Profile Screen useEffect flag', flag)
  //   // return()=>{
  //   //   // console.log('after useEffect');
  //   // }
  // },[flag])

  // useEffect(()=>{
  //   console.log('Profile Screen useEffect count', count)
  //   // return()=>{
  //   //   // console.log('after useEffect');
  //   // }
  // },[count])

  // useEffect(()=>{
  //   console.log('Profile Screen useEffect flag and count', flag,count)
  //   // return()=>{
  //   //   // console.log('after useEffect');
  //   // }
  // },[flag, count])

  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      {console.log('Return')}
      <Text style={{color:'white', fontSize:30, marginTop:30}}> Setting Screen </Text>
      <TextInput 
        style={{backgroundColor:'lightgrey', width:120, height:40, alignSelf:'center', marginBottom:10}}
        onChangeText={setText}
        value={text}
        placeholder="First Name"
      />

      <TextInput 
        style={{backgroundColor:'lightgrey', width:120, height:40, alignSelf:'center', marginBottom:10}}

      />

      <TextInput 
        style={{backgroundColor:'lightgrey', width:120, height:40, alignSelf:'center', marginBottom:10}}

      />

      <TextInput 
        style={{backgroundColor:'lightgrey', width:120, height:40, alignSelf:'center', marginBottom:10}}

      />    
      <Button title='Sign In' onPress={()=>navigation.navigate('Dashboard')} /> 
      <Button title='Sign Up' onPress={()=>navigation.navigate('LearnFlatList')} /> 

      {/* <Top name="Akhzar Nazir" /> */}
      {/* <Center /> */}
      {/* <Bottom /> */}
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
