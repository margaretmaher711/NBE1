import React, { useState } from 'react';
import {Alert, Image, Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignupAppBarOrganism from '../organism/signupappbar';
import CustomButton from '../atoms/custombutton';
import CardTitle from '../atoms/CardsTitles';
import {useNavigation} from '@react-navigation/native';
function Transfer(): React.JSX.Element {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.contant}>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />

        <CardTitle title={'Transfer'} />
      </View>
      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          <CustomButton
            title="Transfer"
            // onPressButton={() => navigation.navigate('otp')}
            onPressButton={() => setModalVisible(true)}
          />
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('../../assets/missioncomplete.png')}></Image>

            <Text style={styles.modalTitleText}>Mission Complete</Text>
            <Text style={styles.modalText}>
              Transfer to Jsmine Robert was successful
            </Text>
            <View style={styles.buttonConainer}>
              <CustomButton title={'Finish'} onPressButton={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
        <View style={styles.container}>
          <Text>
            By signing up, you agree to our{' '}
            <Text style={styles.highlight}>Terms of Service</Text> and
            acknowledge that you have read our{' '}
            <Text style={styles.highlight}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
      <View style={{height: 20}}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contant: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#F1F3FB',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  upperCont: {flex: 6},
  lowerCont: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: '#B7B7B7',
    lineHeight: 23.44,
    // height:23.44
  },
  modalTitleText: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 23.44,
    color: '#1C2437',
  },
  containerPad: {
    marginTop: 15,
    // marginHorizontal: 20,
  },

  container: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  highlight: {
    color: '#1C2437',
    fontWeight: 'bold',
  },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonConainer: {
    flex: 0.13,
    flexDirection:'row',
    // backgroundColor: 'red',

  },
  modalView: {
    margin: 35,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default Transfer;
