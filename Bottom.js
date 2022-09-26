import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';

export default function Bottom({navigation}) {
  return(
    <View style={{flex:0.10, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={{width:100, height:40, marginBottom:10, backgroundColor:'green'}}>
            <Text> Login </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={{width:100, height:40, backgroundColor:'green'}}
          onPress={()=>navigation.navigate('ProfileScreen', {name:'Akhzar Nazir'})} >
            <Text> Sign Up </Text>
        </TouchableOpacity> */}

        <Button
          title="Go to Next Screen"
          onPress={() =>
          navigation.navigate('ProfileScreen', { name: 'Akhzar' })
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
