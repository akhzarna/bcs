import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Dashboard({route, navigation}) {
  
  return (
    <View style={{flex:1,}}>
      {  console.log('We are testing props', route.params.id) }
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        
        <Text>This is Sign Up Screen</Text>
        
        <Image style={{width:90, height:90}}
        
        source={require('./assets/icon.png')}/>
      </View>

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

     <View style={{flex:0.10, alignItems:'center',justifyContent:'center'}}>



        <TouchableOpacity style={{width:100, height:40, backgroundColor:'green', alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:20, color:'white'}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:100, height:40, backgroundColor:'green', alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:20, color:'white'}}>Firebase</Text>
        </TouchableOpacity>

     </View>

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
