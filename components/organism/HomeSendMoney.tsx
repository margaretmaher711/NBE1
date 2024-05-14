// import React from 'react';
// import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
// import HomeTitle from '../atoms/HomeTitle';

// const HomeSendMoney = () => {
//   const img1 = require('../../assets/halaImg.png');
//   const img2 = require('../../assets/aymanImg.png');

//   const sendMoneyCards = [
//     { name: 'Hala', id: '1', image: img1 },
//     { name: 'Ayman', id: '2', image: img2 },
//     { name: 'Alex', id: '3', image: img1 },
//     { name: 'Soha', id: '4', image: img2 },
//   ];

//   return (
//     <View style={styles.sendMonyContainer}>
//       <HomeTitle title={'Send money'} />
//       <FlatList
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         data={sendMoneyCards}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.sendMoneyCard}>
//             <Image source={item.image} style={styles.logoImage} />
//             <Text>{item.name}</Text>
//           </View>
//         )}
//         alwaysBounceVertical={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sendMoneyCard: {
//     height: 86,
//     width: 78,
//     backgroundColor: '#fff',
//     borderRadius: 18,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   sendMonyContainer: {
//     marginVertical: 30,
//   },
//   logoImage: {
//     width: 34,
//     height: 34,
//     resizeMode: 'contain',
//   },
// });

// export default HomeSendMoney;

import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import HomeTitle from '../atoms/HomeTitle';

const HomeSendMoney = () => {
  const img1 = require('../../assets/halaImg.png');
  const img2 = require('../../assets/aymanImg.png');

  const sendMoneyCards: ArrayLike<sendMoneyList> = [
    {name: 'Hala', id: '', image: img1},
    {name: 'Ayman', id: '', image: img2},
    {name: 'Alex', id: '', image: img1},
    {name: 'Soha', id: '', image: img2},
  ];
  interface sendMoneyList {
    name: string;
    image: string;
    id: string;
  }

  return (
   <View style={styles.sendMonyContainer}>
       <HomeTitle title={'Send money'} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}

        data={sendMoneyCards}
        keyExtractor={(item, index) => {
          item.id = index.toString();
          return item.id;
        }}
        renderItem={itemData => {
          const imgName = itemData.item.image;
          console.log('imgName', imgName);

          return (
            <>
              <View style={styles.sendMoneyCard}>
                <Image source={itemData.item.image} style={styles.logoImage}></Image>
                <Text>{itemData.item.name}</Text>
              </View>
              <View style={{width: 20}}></View>
            </>
          );
        }}
        alwaysBounceVertical={false}
      />
   </View>
  );
};
const styles = StyleSheet.create({
  sendMoneyCard: {
    height: 86,
    width: 78,
    backgroundColor: '#fff',
    borderRadius: 18,

    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  sendMonyContainer:{
    marginVertical:30,
  },
  logoImage: {
    // width: '100%',
    // height: '100%',
    // width:34,
    // height:34,
    resizeMode: 'contain',
  },
});
export default HomeSendMoney;
