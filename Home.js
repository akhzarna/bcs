
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';
import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import React, { Component, useEffect, useState } from 'react';


//   // Import the functions you need from the SDKs you need
//   import firebase, { initializeApp } from "firebase/app";
//   // import * as firebase from "firebase";

//   // import firebase from 'firebase/app';
//   import 'firebase/auth';
//   import 'firebase/firestore';

//   // import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3__9va2vzu-4x_9qWHDn4ntnXGoTkn50",
//   authDomain: "fir-expo-fa5da.firebaseapp.com",
//   projectId: "fir-expo-fa5da",
//   storageBucket: "fir-expo-fa5da.appspot.com",
//   messagingSenderId: "687421685940",
//   appId: "1:687421685940:web:e3679f8a95c51c78f857e1"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCK2gse2S4gzT4tqStLYR-ub81aLiV07Ig",
  authDomain: "bcs20-ce9d9.firebaseapp.com",
  projectId: "bcs20-ce9d9",
  storageBucket: "bcs20-ce9d9.appspot.com",
  messagingSenderId: "700617627214",
  appId: "1:700617627214:web:a9c1fc4aeacbd5d178151f"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export default function Home({navigation}) {

  const createUser = () => {
    auth.createUserWithEmailAndPassword('akhzarn@yahoo.com','123456')
    .then( data =>{
      // QUERY Firestore Ko Data Send Kar dain gai
      console.log('firebase return is = ',data)
    }).catch(error=>{
      console.log('Catch Error',error)
    })
  }
  
  const loginUser = () => {
    auth.signInWithEmailAndPassword('akhzarn@yahoo.com','123456')
    .then( data =>{
      // QUERY Firestore Ko Data Send Kar dain gai
      console.log('firebase return is = ',data)
    }).catch(error=>{
      console.log('Catch Error',error)
    })
  }
  
  const guestUser = () => {
    auth.signInAnonymously()
    .then( data =>{
      // QUERY Firestore Ko Data Send Kar dain gai
      console.log('firebase return is = ',data)
    }).catch(error=>{
      console.log('Catch Error',error)
    })
  }
  
  const logoutUser = () => {
    auth.onAuthStateChanged(user=>{
      if(user){
        console.log('Logged in user is =', user)
        auth.signOut()
      }else{
        console.log('No One is =', user)
      }
    })
  }

  useEffect(()=>{
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }


      // const subscriber = db
      //   .collection('student')
      //   .doc('mRlPpQtQzjEYB7jCulei')
      //   .onSnapshot(documentSnapshot => {
      //     console.log('User data: ', documentSnapshot.data());
      //   });
      // // Stop listening for updates when no longer required
      // return () => subscriber();
        
  const subscriber = db
  .collection('student')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });
  return () => subscriber();

  }, [])

  const [fonts, setFonts] = useState(16)

  useEffect(() => {
    // console.log('navigation useEffect is =')
    const unsubscribe = navigation.addListener('focus', () => {
      setFonts(global.setting.fs)
      
      console.log('navigation useEffect is Called=', global.setting)

    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      
      {console.log('Return')}

      <Text style={{fontSize:fonts}}> We are testing </Text>

      {/* <Button
          title="Go to Next Screen"
          onPress={() =>
          navigation.navigate('ProfileScreen',{id:'hef34231'})
        }
        /> */}
      
      {/* <Button
          title="Go to Setting Screen"
          onPress={() =>
          navigation.navigate('Settings', { name: 'Akhzar' })
        }
        /> */}

        {/* <Button
          title="Go to Chatting Screen"
          onPress={() =>
          navigation.navigate('Chatting',{id:'bcs1920cs'})
        }
        /> */}

      <Button
          title="Go to Next Functional Component"
          onPress={() =>
            navigation.navigate('HomeForFunctional')
          }
        />

      <Button
          title="Go to Next Class Component"
          onPress={() =>
            navigation.navigate('HomeForClass')
          }
        />

      <Button
          title="Create USer"
          onPress={createUser}
        />
     
     <Button
          title="Firebase Sign In"
          onPress={loginUser}
        />
     
     <Button
          title="Guest User"
          onPress={guestUser}
        />

    <Button
          title="Log Out User"
          onPress={logoutUser}
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
