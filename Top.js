import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Top() {
  return (
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        
        <Text style={{color:'white', fontSize:30}}>This is Sign in Screen</Text>
        
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
