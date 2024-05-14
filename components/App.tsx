import 'react-native-gesture-handler';
import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Otp from './pages/Otp';
import SetPass from './pages/SetPass';
import FinishSignup from './pages/FinishSignup';
import Home from './pages/Home';
import BottomTapsScreen from './pages/BottomTaps';
import Cards from './pages/CardS';
import Transfer from './pages/Transfer';
import Beneficiaries from './pages/Beneficiaries';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="cards"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="otp" component={Otp} />
        <Stack.Screen name="setpass" component={SetPass} />
        <Stack.Screen name="finishsignup" component={FinishSignup} />
        <Stack.Screen name="bottomtaps" component={BottomTapsScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="cards" component={Cards} />
        <Stack.Screen name="transfer" component={Transfer} />
        <Stack.Screen name="beneficiaries" component={Beneficiaries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React, {useState} from 'react';
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   Pressable,
//   View,
//   Image,
// } from 'react-native';
// import CustomButton from './atoms/custombutton';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Image source={require('../assets/missioncomplete.png')}></Image>

//             <Text style={styles.modalTitleText}>Mission Complete</Text>
//             <Text style={styles.modalText}>
//               Transfer to Jsmine Robert was successful
//             </Text>
//             <View style={styles.buttonConainer}>
//               <CustomButton title={'Finish'} onPressButton={undefined} />
//             </View>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   buttonConainer: {
//     flex: 0.13,
//     flexDirection:'row',
//     // backgroundColor: 'red',

//   },
//   modalView: {
//     margin: 35,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 16,
//     textAlign: 'center',
//     fontWeight: '400',
//     color: '#B7B7B7',
//     lineHeight: 23.44,
//     // height:23.44
//   },
//   modalTitleText: {
//     marginBottom: 20,
//     textAlign: 'center',
//     fontWeight: '700',
//     lineHeight: 23.44,
//     color: '#1C2437',
//   },
// });

// export default App;

//******************// */
// import 'react-native-gesture-handler';

// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import SignUp from './pages/Signup';
// import FinishSignup from './pages/FinishSignup';
// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Drawer.Navigator initialRouteName="signup">
//         <Drawer.Screen name="signup" component={SignUp} />
//         <Drawer.Screen name="finshup" component={FinishSignup} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
