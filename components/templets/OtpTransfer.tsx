import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  View,
} from 'react-native';

import CustomButton from '../atoms/custombutton';
import CustomOtpInput from '../atoms/CustomOtpInput';
import SignupAppBarOrganism from '../organism/signupappbar';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/OtpTransferTempletStyles';
import MissionComplete from '../organism/MissionComplete';
import TitleSubTitle from '../molecules/TitleSubTitle/TitleSubTitle';

function OTPTransfer(): React.JSX.Element {
  const styles = useThemeStyles(getStyles);
  const [otp, setOtp] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />
        <TitleSubTitle
          title="Verification"
          subtitle="Enter 5 digit code we sent to +20 101 131 5412"
        />
        <CustomOtpInput setOtp={setOtp} />
        <Text style={styles.subTitle}>Didn’t receive the code?</Text>
        <Text style={styles.title}>Request new one in 00:12</Text>
      </View>
      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          {otp.length == 6 ? (
            <CustomButton
              title="Submit"
              onPressButton={() => setModalVisible(true)}
            />
          ) : (
            <CustomButton
              title="Submit"
              onPressButton={() => null}
              opacity={0.7}
            />
          )}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <MissionComplete setModalVisible={setModalVisible} />
          </View>
        </Modal>
        <View />
      </View>
    </KeyboardAvoidingView>
  );
}

export default OTPTransfer;
