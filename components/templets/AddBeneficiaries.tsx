import React, {useState} from 'react';

import SignupAppBarOrganism from '../organism/signupappbar';
import {FlatList, View} from 'react-native';
import DropDown from '../molecules/CustomDropDown';
import CustomButton from '../atoms/custombutton';
import CustomTextInput from '../atoms/CustomTextInput';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/AddBeneficiariesTempletStyles';
import CameraContainer from '../molecules/CameraContainer';

function AddBeneficiariesTemplet({navigation}): React.JSX.Element {
  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [itemsType, setItemsType] = useState([
    {label: '043 - Water Way Mall', value: 'bank_transfer'},
    {label: 'Mobile Wallet', value: 'mobile_wallet'},
    {label: 'Between your accounts', value: 'your_accounts'},
  ]);
  const styles = useThemeStyles(getStyles);

  const renderForm = () => (
    <>
      <View style={styles.content}>
        <CameraContainer style={styles.camiraContainer} />
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
                onPressButton={() => navigation.navigate('otpTransfer')}
              />
            </View>
            <View style={{height: 120}}></View>
          </>
        }
      />
    </>
  );
}

export default AddBeneficiariesTemplet;
