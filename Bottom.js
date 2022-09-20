import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Bottom() {
  return(
    <View style={{flex:0.10, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={{width:100, height:40, backgroundColor:'green'}}>
            <Text> Press me</Text>
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
