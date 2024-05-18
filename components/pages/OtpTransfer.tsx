import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignupAppBarOrganism from '../organism/signupappbar';
import CustomButton from '../atoms/custombutton';
import SignupTitles from '../molecules/SignupTitles';
import {useNavigation} from '@react-navigation/native';
import CustomOtpInput from '../atoms/CustomOtpInput';
function OtpTransfer(): React.JSX.Element {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.contant}>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />
        <SignupTitles
          title="Verification"
          subtitle="Enter 5 digit code we sent to +20 101 131 5412"
        />
        <CustomOtpInput />
        <Text style={styles.subTitle}>Didn’t receive the code?</Text>
        <Text style={styles.title}>Request new one in 00:12</Text>
      </View>
      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          <CustomButton
            title="Submit"
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
              <Image
                source={require('../../assets/missioncomplete.png')}></Image>

              <Text style={styles.modalTitleText}>Mission Complete</Text>
              <Text style={styles.modalText}>
                Transfer to Jsmine Robert was successful
              </Text>
              <View style={styles.buttonConainer}>
                <CustomButton
                  title={'Finish'}
                  onPressButton={() => setModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>
        <View />
      </View>
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
  title: {
    color: '#1C2437',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  subTitle: {
    color: '#B7B7B7',
    fontSize: 16,
    marginTop: 5,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  upperCont: {flex: 6},
  lowerCont: {
    flex: 0.5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerPad: {
    marginTop: 15,
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
    flexDirection: 'row',
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
export default OtpTransfer;
