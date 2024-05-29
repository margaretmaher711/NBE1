import React from 'react';

import SignupAppBarOrganism from '../organism/signupappbar';
import AddBeneficiaryForm from '../organism/AddBeneficiary/AddBeneficiaryForm';

function AddBeneficiariesTemplet({navigation}): React.JSX.Element {

  return (
    <>
      <SignupAppBarOrganism />
      <AddBeneficiaryForm navigation={navigation} />
    </>
  );
}

export default AddBeneficiariesTemplet;
