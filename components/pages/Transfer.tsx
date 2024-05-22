import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import SignupAppBarOrganism from '../organism/signupappbar';
import CustomButton from '../atoms/custombutton';
import CardTitle from '../atoms/CardsTitles';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import WhiteFillFeild from '../atoms/whitefillfield';
import DropDown from '../molecules/CustomDropDown';
import {useTheme} from '../theme/ThemeContext';
import CustomTextInput from '../atoms/CustomTextInput';

function Transfer() {
  const navigation = useNavigation();
  function amountValidation(amount) {
    settextInputAmount(amount);
    const amountPattern = /^\d+(\.\d{1,2})?$/;
    if (!amountPattern.test(amount)) {
      setIsAmountInvalid(true);
    } else {
      setIsAmountInvalid(false);
    }
  }
  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [itemsType, setItemsType] = useState([
    {label: 'Bank Transfer', value: 'bank_transfer'},
    {label: 'Mobile Wallet', value: 'mobile_wallet'},
    {label: 'Between your accounts', value: 'your_accounts'},
  ]);

  const [openTransferTo1, setOpenTransferTo1] = useState(false);
  const [valueTransferTo1, setValueTransferTo1] = useState(null);
  const [itemsTransferTo1, setItemsTransferTo1] = useState([
    {label: 'John Doe', value: 'john_doe'},
    {label: 'Jane Smith', value: 'jane_smith'},
    {label: '042-653214521245   -   $2,145,5874.25', value: '653214521245'},
  ]);
  const [textInputAmount, settextInputAmount] = useState('');
  const [textInputReason, settextInputReason] = useState('');
  const [isAmountInvalid, setIsAmountInvalid] = useState(false);
  const [openTransferTo2, setOpenTransferTo2] = useState(false);
  const [valueTransferTo2, setValueTransferTo2] = useState(null);
  const [itemsTransferTo2, setItemsTransferTo2] = useState([
    {label: 'Account 1', value: 'account_1'},
    {label: 'Account 2', value: 'account_2'},
    {label: '056-32154875423   -   $1,523.48', value: '32154875423'},
  ]);
  const {themeColors} = useTheme();
  const styles = StyleSheet.create({
    flatListContent: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    container: {
      flex: 1,
      backgroundColor: themeColors.themeColor,
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    upperContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    lowerContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });

  const renderForm = () => (
    <>
      <DropDown
        openType={openType}
        valueType={valueType}
        itemsType={itemsType}
        setOpenType={setOpenType}
        setValueType={setValueType}
        setItemsType={setItemsType}
        title={'Type of transfer'}
        zIndex={3000}
      />
      <DropDown
        openType={openTransferTo1}
        valueType={valueTransferTo1}
        itemsType={itemsTransferTo1}
        setOpenType={setOpenTransferTo1}
        setValueType={setValueTransferTo1}
        setItemsType={setItemsTransferTo1}
        title={'Type from'}
        zIndex={2000}
      />
      <DropDown
        title={'Transfer to'}
        openType={openTransferTo2}
        valueType={valueTransferTo2}
        itemsType={itemsTransferTo2}
        setOpenType={setOpenTransferTo2}
        setValueType={setValueTransferTo2}
        setItemsType={setItemsTransferTo2}
        zIndex={1000}
      />

      <CustomTextInput
        lable={'Amount to transfer'}
        keyboardType="numeric"
        validateInput={amountValidation}
        text={textInputAmount}
      />

      {isAmountInvalid && (
        <Text style={{color: themeColors.redColor}}>Sorry! Invalid Amount</Text>
      )}
      <CustomTextInput
        lable={'Reason of transfer'}
        validateInput={amountValidation}
        text={textInputReason}
      />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.upperContainer}>
          <SignupAppBarOrganism />
          <CardTitle title="Transfer" />
          <FlatList
            data={[{key: 'form'}]}
            renderItem={renderForm}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            ListFooterComponent={
              !isAmountInvalid &&
              textInputAmount.trim() && (
                <View style={styles.lowerContainer}>
                  <View style={styles.buttonContainer}>
                    <CustomButton
                      title="Transfer"
                      onPressButton={() => navigation.navigate('otpTransfer')}
                    />
                    <View style={{height: 200}}></View>
                  </View>
                </View>
              )
            }
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Transfer;
