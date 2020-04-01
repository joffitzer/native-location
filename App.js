// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import FetchLocation from './components/FetchLocation'

// export default class App extends React.Component {

//   getUserLocationHandler = () => {
//     navigator.geolocation.getCurrentPosition(position => {
//       console.log(position)
//     }, err => {
//       console.log(err)
//     });
//   }
  
//   render(){
//     return (
//       <View style={styles.container}>
//         <Text>Getting Location...</Text>
//         <FetchLocation onGetLocation={this.getUserLocationHandler} />
//       </View>
//     );
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 18}}> 
        To share a photo from your phone with a friend, just press the button below!
      </Text>
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
