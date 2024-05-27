import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useTheme} from '../shared/theme/ThemeContext';
import CustomButton from '../atoms/custombutton';
import CustomOtpInput from '../atoms/CustomOtpInput';
import SignupTitles from '../molecules/SignupTitles';
import SignupAppBarOrganism from '../organism/signupappbar';

function OTPTransfer(): React.JSX.Element {
  const {themeColors} = useTheme(); // Access the theme colors
  const [modalVisible, setModalVisible] = useState(false);
  const styles = StyleSheet.create({
    keyboardAvoidingView: {
      flex: 1,
    },
    title: {
      color: themeColors.darkBlue,
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
    upperCont: {flex: 2},
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
      color: themeColors.darkBlue,
    },

    container: {
      // marginHorizontal: 20,
      marginTop: 20,
    },
    highlight: {
      color: themeColors.darkBlue,
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
      backgroundColor: themeColors.nativThemeContainerBG,
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
      elevation: 4,
    },
  });
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
    </KeyboardAvoidingView>
  );
}

export default OTPTransfer;
