import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeAppBar from '../organism/HomeAppBar';
import Icon from 'react-native-vector-icons/Ionicons';

function BeneficiariesTemplet(): React.JSX.Element {
  const [isGrid, setGrid] = useState(false);
  const img1 = require('../../assets/halaImg.png');
  const img2 = require('../../assets/aymanImg.png');
  const phoneIcon = require('../../assets/callicon.png');
  const dollarIcon = require('../../assets/dolarsign.png');

  const sendMoneyCards: ArrayLike<sendMoneyList> = [
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img2,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
  ];
  interface sendMoneyList {
    name: string;
    phoneNum: string;
    amount: string;
    image: string;
    id: string;
  }
  return (
    <>
      <HomeAppBar />
      <View style={styles.homeTitles}>
        <Text style={styles.title}>Beneficiaries</Text>
        <View style={styles.content}>
          <View style={styles.viewContainer}>
            <View style={isGrid && styles.greenContainer}>
              <TouchableOpacity onPress={() => setGrid(true)}>
                <Icon
                  name={'grid'}
                  size={18}
                  color={isGrid ? '#fff' : '#B7B7B7'}
                />
              </TouchableOpacity>
            </View>
            <View style={!isGrid && styles.greenContainer}>
              <TouchableOpacity onPress={() => setGrid(false)}>
                <Icon
                  name={'list'}
                  size={18}
                  color={!isGrid ? '#fff' : '#B7B7B7'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.addContiner}>
            <Icon name={'add-circle-outline'} size={20} color={'#007236'} />
            <Text>Add</Text>
          </View>
        </View>
      </View>
      {isGrid ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sendMoneyCards}
          renderItem={itemData => {
            const imgName = itemData.item.image;
            console.log('imgName', imgName);

            return (
              <>
                <View style={styles.sendMoneyCard}>
                  <Image
                    source={itemData.item.image}
                    style={styles.logoImage}></Image>
                  <Text>{itemData.item.name}</Text>
                </View>
                <View style={{width: 20}}></View>
              </>
            );
          }}
          numColumns={4}
          keyExtractor={(item, index) => {
            item.id = index.toString();
            return item.id;
          }}
          alwaysBounceVertical={false}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sendMoneyCards}
          renderItem={itemData => {
            const imgName = itemData.item.image;
            console.log('imgName', imgName);

            return (
              <>
                <View style={styles.sendMoneyCardList}>
                  <Image
                    source={itemData.item.image}
                    style={styles.logoListImage}></Image>
                  <View>
                    <Text style={styles.nameText}>{itemData.item.name}</Text>

                    <View style={styles.rowContainerData}>
                      <Image source={phoneIcon}></Image>
                      <Text style={styles.greyText}>
                        {itemData.item.phoneNum}
                      </Text>
                    </View>
                    <View style={styles.rowContainerData}>
                      <Image source={dollarIcon}></Image>

                      <Text style={styles.greyText}>
                        {itemData.item.amount}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{height: 20}}></View>
              </>
            );
          }}
          keyExtractor={(item, index) => {
            item.id = index.toString();
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  viewContainer: {
    elevation: 15,
    paddingHorizontal: 10,

    paddingVertical: 2,
    flex: 0.29,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 15,
  },
  content: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addContiner: {
    elevation: 15,
    height: 30,
    flex: 0.27,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 15,
  },
  greenContainer: {
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007236',
  },
  sendMoneyCard: {
    height: 86,
    width: 78,
    backgroundColor: '#fff',
    borderRadius: 18,

    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  sendMoneyCardList: {
    elevation: 5,
    shadowRadius: 18,
    flexDirection: 'row',
    height: 86,
    // width: 78,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 15,
    // justifyContent:'center',
    alignItems: 'center',
  },
  sendMonyContainer: {
    marginVertical: 30,
  },
  logoImage: {
    resizeMode: 'contain',
  },
  logoListImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.41,
    color: '#1C2437',
  },
  rowContainerData: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  greyText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B7B7B7',
    lineHeight: 16.41,
  },
  homeTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {
    color: '#1C2437',
    fontWeight: '700',
    fontSize: 20,
  },
});
export default BeneficiariesTemplet;
