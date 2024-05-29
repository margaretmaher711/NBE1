import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import CustomTextInput from '../../atoms/CustomTextInput';
import DropDown from '../../molecules/CustomDropDown';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import CustomButton from '../../atoms/custombutton';
import CameraContainer from '../../molecules/CameraContainer/CameraContainer';
import getStyles from './Style';

const AddBeneficiaryForm = ({navigation}) => {
  const styles = useThemeStyles(getStyles);

  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [itemsType, setItemsType] = useState([
    {label: 'Bank Transfer', value: 'bank_transfer'},
    {label: 'Mobile Wallet', value: 'mobile_wallet'},
    {label: 'Between your accounts', value: 'your_accounts'},
  ]);

  const renderForm = () => (
    <>
      <View style={styles.content}>
        <CameraContainer />
      </View>
      <View style={styles.rowContainer}>
        <View style={[{width: '47%'}]}>
          <CustomTextInput lable={'First Name'} validateInput={() => null} />
        </View>
        <View style={[{width: '47%'}]}>
          <CustomTextInput lable={'Last Name'} validateInput={() => null} />
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

      <CustomTextInput lable={'Account number'} validateInput={() => null} />
      <CustomTextInput lable={'Phone number'} validateInput={() => null} />
      <CustomTextInput lable={'Email'} validateInput={() => null} />
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
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Add Beneficiar"
          onPressButton={() => navigation.navigate('otpTransfer')}
        />
      </View>
      <View style={{height: 80}}></View>
    </>
  );
};

export default AddBeneficiaryForm;
