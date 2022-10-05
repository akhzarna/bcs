import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-web';

const matchesarrayforsectionList = [
  {
  key:0,
  title:'Pak vs Eng',
  data:[{
    title:'Pak Win',
    key:0,
    result:'Pak Win',
    matchnumber:'4th T20',
    date:'25'
  },
  {
    title:'Pak Win',
    key:1,
    result:'Pak Win',
    matchnumber:'5th T20',
    date:'28'
  }]
  },
  {
    key:1,
    title:'Ind vs Aus',
    data:[{
      title:'Ind Win',
      key:0,
      result:'Ind Win',
      matchnumber:'5th T20',
      date:'28'
    }]
  },
  {
    key:2,
    title: 'Ind vs SA',
    data:[{
      title:'Ind Win',
      key:0,
      result:'Ind Win',
      matchnumber:'5th T20',
      date:'28'
    }]
  }
];

const matches = [
  {
    title:'Pak vs Eng',
    key:0,
    result:'Pak Win',
    matchnumber:'5th T20',
    date:'28'
  },
  {
    title:'Pak vs Eng',
    key:1,
    result:'Pak Win',
    matchnumber:'4th T20',
    date:'25'
  },
  {
    title:'Pak vs Eng',
    key:2,
    result:'Eng Win',
    matchnumber:'3rd T20',
    date:'23'
  },
  {
    title:'India vs Australia',
    key:3,
    result:'India Win',
    matchnumber:'3rd T20',
    date:'25'
  },
  {
    title:'India vs SA',
    key:4,
    result:'India Win',
    matchnumber:'1st T20',
    date:'28'
  },
]

const DATA = [
  {
    title: "Pakistan",
    data: ["Lahore", "Karachi", "ISB", "Rajanpur"]
  },
  {
    title: "INDIA",
    data: ["New Dehli"]
  },
  {
    title: "Afghanistan",
    data: ["Kabul", "Jalalabad",]
  },
  {
    title: "Bangladesh",
    data: ["Dhaka", "Mir Pur"]
  }
];

export default function LearnFlatList({navigation, route}) {  
  
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
  const [fonts, setFonts] = useState(24)
  
  // const [allSettings, setAllSettings] = useState(global.setting)

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
  console.log('simple useEffect is =')
  // getMovies();
  return()=>{
    console.log('useEffect Return')
  }
 });

 useEffect(() => {
  console.log('simple useEffect number is =')
  // getMovies();
 },[number]);

 useEffect(() => {
  console.log('simple useEffect [] =')
  // getMovies();
  
 },[]);

 useEffect(() => {
  console.log('navigation useEffect is =')
  const unsubscribe = navigation.addListener('focus', () => {
    // console.log('Called When you are back on LearnFlatList',route.params.ammar)
    // setFonts(route.params.ammar)
  });
  return unsubscribe;
}, [navigation]);

return (

      <View style={{flex:1,}}>
      
      {console.log('Return Learn Flat List')}
      
      <View style={{flex:0.70, backgroundColor:'green'}}>    
      
      <Text style={{
        fontSize:fonts,
        color:global.setting.fc,
        backgroundColor:global.setting.bc
      }}>        
        Section List 
        </Text>

      <SectionList
      sections={matchesarrayforsectionList}
      // keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => 
      <TouchableOpacity style={{backgroundColor:'black', marginBottom:10, height:120}}
        onPress={()=> setNumber(number+1)}
      >
      <Text style={{fontSize:24, color:'white'}}>Country:     {item.title}</Text>
      {/* <Text style={{fontSize:24, color:'white'}}>Fee:    {item.city}</Text> */}
    </TouchableOpacity>
  }
      renderSectionHeader={({ section: { title } }) => (
        <TouchableOpacity style={{backgroundColor:'green', height:30}}>
        <Text style={{color:'white', fontSize:20}}>{title}</Text>
        </TouchableOpacity>
      )}
    />
 

     </View>

     <View style={{flex:0.10, alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity style={{width:150, height:40, backgroundColor:'green', alignItems:'center',justifyContent:'center'}}
          onPress={()=>{
            setNumber(number+10)
            // navigation.navigate('SettingsScreen')
          }
        }
        >
          <Text style={{fontSize:20, color:'white'}}>Setting Button</Text>
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
