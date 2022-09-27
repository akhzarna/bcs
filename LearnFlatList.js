import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-web';
export default function LearnFlatList() {
  const [filters, setFilters] = useState([
    {key:0, title:'Fee'},
    {key:1, title:'Ranking'},
    {key:2, title:'City'},
    {key:3, title:'Country'},
    {key:4, title:'Admissions'},
    {key:5, title:'Status'},
  ])

  const [appliedfilters, setAppliedFilters] = useState([
    {key:0, title:'Fee'},
    {key:1, title:'Ranking'},
    {key:2, title:'City'},
  ])
  const [data, setData] = useState([
    {key:0, name:'Comsats', city:'Lahore', ranking:'Top 10',fee:100000, rank:8, country:'Pakistan'},
    {key:1, name:'PUCIT', city:'Lahore', ranking:'Top 50',fee:60000, rank:18, country:'Pakistan'},
    {key:2, name:'UET', city:'Lahore', ranking:'Top 100',fee:45000, rank:88, country:'Pakistan'},
    {key:3, name:'Kabul University', city:'Kabul', ranking:'Top 100',fee:45000, rank:88, country:'Afghanistan'},
  ])

  const [movies, setMovies] = useState([])
  const [number, setNumber] = useState(0)

  const getMovies = async () => {
    try {
     const response = await fetch('https://reactnative.dev/movies.json');
     const json = await response.json();
    //  console.log('Movies Data is =',json.movies)
     setMovies(json.movies);
     console.log('movies',movies)
   } catch (error) {
     console.error(error);
   } finally {
    //  setLoading(false);
   }
 }

 useEffect(() => {
  getMovies();

  // console.log('useEffect')
  // const interval = setInterval(() => {
  //   setNumber(prev=>prev+1)
  // }, 1000);
  // return()=>{
  //   console.log('useEffect Return')
  //   clearInterval(interval)
  // }
 },[]);

return (

      <View style={{flex:1,}}>
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        <Text style={{fontSize:24, fontWeight:'bold'}}>We are Learning API's and FlatList </Text>
        <Image style={{width:90, height:90}}
        source={require('./assets/icon.png')}/>
      </View>

      <View style={{flex:0.70, backgroundColor:'lightgrey'}}>
        
      <FlatList
            data={filters}
            horizontal={true}
            renderItem={
                ({item}) => (
                <TouchableOpacity style={{backgroundColor:'black', marginRight:10, marginTop:10, marginBottom:20, height:40}}>
                    <Text style={{fontSize:24, color:'white'}}>{item.title}</Text>     
                </TouchableOpacity>
                )
                }
            // keyExtractor={item=>item.key}
        />
        
        <FlatList
            data={appliedfilters}
            horizontal={true}
            renderItem={
                ({item}) => (
                <TouchableOpacity style={{backgroundColor:'black', marginRight:10, marginTop:10, marginBottom:20, height:40}}>
                    <Text style={{fontSize:24, color:'white'}}>{item.title}</Text>     
                </TouchableOpacity>
                )
                }
            // keyExtractor={item=>item.key}
        />

        <FlatList
            data={movies}
            renderItem={
                ({item}) =>     
              // (item.id=="1")?
              <TouchableOpacity style={{backgroundColor:'black', marginBottom:10, height:120}}>
                  <Text style={{fontSize:24, color:'white'}}>Id:     {item.id}</Text>
                  <Text style={{fontSize:24, color:'white'}}>Movie Name:     {item.title}</Text>
                  <Text style={{fontSize:24, color:'white'}}>Release Year:     {item.releaseYear}</Text>
                  {/* <Text style={{fontSize:24, color:'white'}}>Fee:    {item.city}</Text> */}
              </TouchableOpacity>

              // :

              // <TouchableOpacity style={{backgroundColor:'red', marginBottom:10, height:120}}>
              // <Text style={{fontSize:24, color:'white'}}>Name:     {item.name}</Text>
              // <Text style={{fontSize:24, color:'white'}}>Ranking:     {item.ranking}</Text>
              // <Text style={{fontSize:24, color:'white'}}>Fee:     {item.fee}</Text>
              // <Text style={{fontSize:24, color:'white'}}>City:    {item.city}</Text>
              // </TouchableOpacity>
              
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
