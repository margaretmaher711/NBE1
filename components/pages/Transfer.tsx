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

function Transfer() {
  const navigation = useNavigation();

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
  const [isAmountInvalid, setIsAmountInvalid] = useState(false);
  const [openTransferTo2, setOpenTransferTo2] = useState(false);
  const [valueTransferTo2, setValueTransferTo2] = useState(null);
  const [itemsTransferTo2, setItemsTransferTo2] = useState([
    {label: 'Account 1', value: 'account_1'},
    {label: 'Account 2', value: 'account_2'},
    {label: '056-32154875423   -   $1,523.48', value: '32154875423'},
  ]);

  function amountValidation(amount) {
    settextInputAmount(amount);
    const amountPattern = /^\d+(\.\d{1,2})?$/;
    if (!amountPattern.test(amount)) {
      setIsAmountInvalid(true);
    } else {
      setIsAmountInvalid(false);
    }
  }

  const renderForm = () => (
    <>
      <View style={[styles.dropdownContainer, {zIndex: 3000}]}>
        <Text style={styles.dropdownLabel}>Type of transfer</Text>
        <DropDownPicker
          open={openType}
          value={valueType}
          items={itemsType}
          setOpen={setOpenType}
          setValue={setValueType}
          setItems={setItemsType}
          style={styles.dropdown}
          dropDownStyle={styles.dropdown}
        />
      </View>

      <View style={[styles.dropdownContainer, {zIndex: 2000}]}>
        <Text style={styles.dropdownLabel}>Transfer from</Text>
        <DropDownPicker
          open={openTransferTo1}
          value={valueTransferTo1}
          items={itemsTransferTo1}
          setOpen={setOpenTransferTo1}
          setValue={setValueTransferTo1}
          setItems={setItemsTransferTo1}
          style={styles.dropdown}
          dropDownStyle={styles.dropdown}
          labelStyle={styles.dropdownLabel}
        />
      </View>

      <View style={[styles.dropdownContainer, {zIndex: 1000}]}>
        <Text style={styles.dropdownLabel}>Transfer to</Text>
        <DropDownPicker
          open={openTransferTo2}
          value={valueTransferTo2}
          items={itemsTransferTo2}
          setOpen={setOpenTransferTo2}
          setValue={setValueTransferTo2}
          setItems={setItemsTransferTo2}
          style={styles.dropdown}
          dropDownStyle={styles.dropdown}
        />
      </View>
      <WhiteFillFeild
        placeholder={'Amount to transfer'}
        validateInput={amountValidation}
        text={textInputAmount}
        keyboardType="numeric"
      />
      {isAmountInvalid && <Text>Sorry! Invalid Amount</Text>}
      <WhiteFillFeild placeholder={'Reason of transfer'} />
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
            data={[{key: 'form'}]} // FlatList requires a data prop, even for a single item
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

const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F3FB',
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
  dropdownContainer: {
    height: 40,
    marginBottom: 70,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  dropdownLabel: {
    paddingHorizontal: 13,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 14,
    color: '#1C2437',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Transfer;
