import React from 'react';
import SignUpMessageOrganism from '../organism/signupmessageorg';
import LoginButtonOrganism from '../organism/loginbuttonorg';
import CheckBoxOrganism from '../organism/checkboxorg';
import DarkFillFeild from '../atoms/darktransparentfeild';
import LoginAppBarOrganism from '../organism/loginappbarorg';
import WelcomText from '../atoms/welcomtxt';
import CustomTextInput from '../atoms/CustomTextInput';
function LoginTemplet(): React.JSX.Element {
  const lockIcon = 'lock-closed-outline';

  return (
    <>
      <LoginAppBarOrganism />
      <WelcomText />
      <DarkFillFeild prefixIcon="@" placeholder={'User Name'} />
      <CustomTextInput
        lable={'Password'}
        validateInput={() => {}}
        prefixIcon={lockIcon}
      />
      <CheckBoxOrganism />
      <LoginButtonOrganism />
      <SignUpMessageOrganism />
    </>
  );
}

export default LoginTemplet;
