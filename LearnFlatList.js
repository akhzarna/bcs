import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function LearnFlatList() {

    
  const [data, setData] = useState([
    {name:'Furqan',
    message:'Hello How are you',
    time:'10:59 AM'
    }, 
    {name:'Umer',
    message:'Hello How are you',
    time:'11:02 AM'
    }])
  
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
  
return (
    <View style={{flex:1,}}>
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        
        <Text> We are Learning Flat List </Text>
        
        <Image style={{width:90, height:90}}
        source={require('./assets/icon.png')}/>

      </View>

      <View style={{flex:0.70, backgroundColor:'grey'}}>

        {console.log(data)}
        
        <FlatList
            data={data}
            renderItem={
                ({item}) => (
                <View style={{backgroundColor:'green', marginBottom:10, height:80}}>
                    <Text style={{fontSize:20, color:'white'}}>From:     {item.name}</Text>
                    <Text style={{fontSize:20, color:'white'}}>Message:      {item.message}</Text>
                    <Text style={{fontSize:20, color:'white'}}> Time:                                  {item.time}</Text>
                </View>
                )
                }
            // keyExtractor={item=>item.key}
        />

     </View>

     <View style={{flex:0.10, alignItems:'center',justifyContent:'center'}}>

        <TouchableOpacity style={{width:150, height:40, backgroundColor:'green', alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:20, color:'white'}}>Testing Button</Text>
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
