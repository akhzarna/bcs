
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';
import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import React, { Component, useEffect, useState } from 'react';

export default function Home({navigation}) {

  useEffect(()=>{
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }
  })
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      {console.log('Return')}

      <Button
          title="Go to Next Screen"
          onPress={() =>
          navigation.navigate('ProfileScreen',{id:'hef34231'})
        }
        />

      {/* <Button title='Minus' onPress={()=>setState({count:1})} /> */}
      
      <Button
          title="Go to Setting Screen"
          onPress={() =>
          navigation.navigate('Settings', { name: 'Akhzar' })
        }
        />

        <Button
          title="Go to Chatting Screen"
          onPress={() =>
          navigation.navigate('Chatting',{id:'bcs1920cs'})
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







// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// // import ProfileScreen from './ProfileScreen';
// import Top from './Top';
// import Center from './Center';
// import Bottom from './Bottom';
// import React, { Component, useEffect, useState } from 'react';

// var flag = 12;

// export default class Home extends Component {

//   constructor(props){
//     super(props)
//     this.state={
//       count: 0
//     }
//   }

//   static getDerivedStateFromProps(){
//     console.log('getDerivedStateFromProps')
//   }

//   componentDidMount(){
//     console.log('didMount')
//   }

//   getSnapshotBeforeUpdate(){
//     console.log('getSnapshotBeforeUpdate')
//     return null;
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate')
//   }

//   shouldComponentUpdate(){
//     return true
//   }

// //   static getDerivedStateFromProps()
// // shouldComponentUpdate()
// // render()
// // getSnapshotBeforeUpdate()
// // componentDidUpdate()

// // const [count, setCount] = useState(13);
// // const [number, setNumber] = useState(90);
// // const [state, setState] = useState(
// //   {
// //     name:'',
// //     class:'',
// //   }
// // )

// // useEffect(()=>{
// //     console.log('Home useEffect []')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// //     return()=>{
// //       console.log('Home useEffect return []');
// //     }
// // },[])

// // useEffect(()=>{
// //     console.log('useEffect [count]')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// // },[count])

// // useEffect(()=>{
// //     console.log('useEffect [number]')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// // },[number])


// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect []', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [count]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[count])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [number]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[number])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [props]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[props])

//   // useEffect(()=>{
//   //   flag = 190;
//   //   console.log('useEffect', flag);
//   //   setCount(count+1);
//   // },[props])
  
//   render(){
//   return (
//     <View style={{flex:1, backgroundColor:'black'}}>
//       {console.log('Return')}
      
//       {/* <Top name="Akhzar Nazir" /> */}
//       {/* <Center /> */}
//       {/* <Bottom /> */}

//       <Button
//           title="Go to Next Screen"
//           onPress={() =>
//           this.props.navigation.navigate('ProfileScreen',{id:'hef34231'})
//         }
//         />

//       <Button title='Minus' onPress={()=>this.setState({count:1})} />
      
//       <Button
//           title="Go to Setting Screen"
//           onPress={() =>
//           this.props.navigation.navigate('Settings', { name: 'Akhzar' })
//         }
//         />

//     {/* <Button title='PLUS' onPress={()=>setCount(count+1)} />
      
//     <Button title='Minus' onPress={()=>setCount(count-1)} />
    
//     <Button title='Number' onPress={()=>setNumber(number+1)} /> */}
     
//     </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
