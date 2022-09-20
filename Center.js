import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Center() {
  return(
    <View style={{flex:0.70, alignItems:'center', justifyContent:'center'}}>

    <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:30}}
    placeholder='First Name'
    />
    
    <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:30}}
    placeholder='Last Name'

    />


<TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:30}}
    placeholder='username'
    />

<TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:30}}
    placeholder='password'
    />

    <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:30}}
    placeholder='Email'

    />
    <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:30}}
            placeholder='Address'
    />
    <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:30}}
            placeholder='Phone'

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
