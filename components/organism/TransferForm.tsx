import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import CustomTextInput from '../atoms/CustomTextInput';
import DropDown from '../molecules/CustomDropDown';
import {useThemeCustome} from '../shared/theme/ThemeContext';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/TransferStyles';
import CustomButton from '../atoms/custombutton';

const TransferForm = ({navigation}) => {
  const styles = useThemeStyles(getStyles);

  const {themeColors} = useThemeCustome();
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
  const [textInputReason, settextInputReason] = useState('');
  const [textInputAmount, settextInputAmount] = useState('');
  const [isAmountInvalid, setIsAmountInvalid] = useState(false);

  const [openTransferTo2, setOpenTransferTo2] = useState(false);
  const [valueTransferTo2, setValueTransferTo2] = useState(null);
  const [itemsTransferTo2, setItemsTransferTo2] = useState([
    {label: 'Account 1', value: 'account_1'},
    {label: 'Account 2', value: 'account_2'},
    {label: '056-32154875423   -   $1,523.48', value: '32154875423'},
  ]);

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
    <>
      <FlatList
        data={[{key: 'form'}]}
        renderItem={renderForm}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={{height: 10}}></View>
      {!isAmountInvalid && textInputAmount.trim() && (
        <View style={styles.lowerContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Transfer"
              onPressButton={() => navigation.navigate('otpTransfer')}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default TransferForm;
