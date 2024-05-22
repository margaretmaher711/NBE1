import React, {useState} from 'react';

import SignupAppBarOrganism from '../organism/signupappbar';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDown from '../molecules/CustomDropDown';
import CustomButton from '../atoms/custombutton';

function AddBeneficiariesTemplet({navigation}): React.JSX.Element {
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isAccNumFocused, setIsAccNumFocused] = useState(false);
  const [isPhoneNumFocused, setIsPhoneNumFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [itemsType, setItemsType] = useState([
    {label: '043 - Water Way Mall', value: 'bank_transfer'},
    {label: 'Mobile Wallet', value: 'mobile_wallet'},
    {label: 'Between your accounts', value: 'your_accounts'},
  ]);
  const renderForm = () => (
    <>
      <View style={styles.content}>
        <View style={styles.camiraContainer}>
          <Icon name={'camera-outline'} size={50} color={'#007236'} />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View
          style={[
            styles.inputContainer,
            isFirstNameFocused && styles.focusedContainer,
            {width: '47%'},
          ]}>
          <Text
            style={[styles.label, isFirstNameFocused && {color: '#007236'}]}>
            First Name
          </Text>
          <TextInput
            style={styles.textInput}
            //   placeholder="First Name"
            placeholderTextColor="#007236"
            onFocus={() => setIsFirstNameFocused(true)}
            onBlur={() => setIsFirstNameFocused(false)}
          />
        </View>
        <View
          style={[
            styles.inputContainer,
            isLastNameFocused && styles.focusedContainer,
            {width: '47%'},
          ]}>
          <Text style={[styles.label, isLastNameFocused && {color: '#007236'}]}>
            Last Name
          </Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#007236"
            onFocus={() => setIsLastNameFocused(true)}
            onBlur={() => setIsLastNameFocused(false)}
          />
        </View>
      </View>

      <DropDown
        setValueType={setValueType}
        setItemsType={setItemsType}
        openType={openType}
        valueType={valueType}
        itemsType={itemsType}
        setOpenType={setOpenType}
        title="Bank branch"
        zIndex={3000}
      />
      <View
        style={[
          styles.inputContainer,
          isAccNumFocused && styles.focusedContainer,
        ]}>
        <Text style={[styles.label, isAccNumFocused && {color: '#007236'}]}>
          Account number
        </Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#007236"
          onFocus={() => setIsAccNumFocused(true)}
          onBlur={() => setIsAccNumFocused(false)}
        />
      </View>
      <View
        style={[
          styles.inputContainer,
          isPhoneNumFocused && styles.focusedContainer,
        ]}>
        <Text style={[styles.label, isPhoneNumFocused && {color: '#007236'}]}>
          Phone number
        </Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#007236"
          onFocus={() => setIsPhoneNumFocused(true)}
          onBlur={() => setIsPhoneNumFocused(false)}
        />
      </View>
      <View
        style={[
          styles.inputContainer,
          isEmailFocused && styles.focusedContainer,
        ]}>
        <Text style={[styles.label, isEmailFocused && {color: '#007236'}]}>
          Email
        </Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#007236"
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
      </View>
    </>
  );
  return (
    <>
      <SignupAppBarOrganism />
      <FlatList
        data={[{key: 'form'}]}
        renderItem={renderForm}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        ListFooterComponent={
          <>
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Add Beneficiar"
                // onPressButton={() => navigation.navigate('otpTransfer')}
              />
            </View>
            <View style={{height: 120}}></View>
          </>
        }
      />
    </>
  );
}
const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    color: '#000',
    paddingVertical: 5,
  },
  label: {
    position: 'absolute',
    top: 4,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 14,
    fontWeight: '700',
    color: '#1C2437',
  },
  inputContainer: {
    marginVertical: 15,
    elevation: 4,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#007236',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    color: '#000',
    paddingHorizontal: 10,
  },
  focusedContainer: {
    borderWidth: 1.5,
    color: '#007236',
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputPassContainer: {
    marginVertical: 15,
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#007236',
    backgroundColor: '#ffff',
    borderRadius: 10,
    color: '#000',
  },
  camiraContainer: {
    // flex:0.5,
    height: 138,
    width: 138,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderRadius: 30,
    // textAlign: 'center',
  },
});

export default AddBeneficiariesTemplet;
