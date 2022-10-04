import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-web';

export default function SettingsScreen({navigation}) {

 useEffect(() => {

  console.log("Hamza Qayyum is working on this project")

  // return(()=>{
  //   console.log('is this calling');
  // })

  return()=>{
    console.log('I am going Back from Setting Screen');
  }
 
},[]);

 const saveSettings=()=>{
    
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }
    // console.log('pressed')
    navigation.navigate('LearnFlatList')
 }

return (

      <View style={{flex:1, backgroundColor:'green'}}>
        <TouchableOpacity style={{width:100, height:60, backgroundColor:'grey'}}
        onPress={saveSettings}
        >
            <Text> I am testing </Text>
        </TouchableOpacity>
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
