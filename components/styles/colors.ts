const commonColor = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    commonOpacityBG: '#00000fc0',
    activeColor: '#fff',
    boxActiveColor: '#007236',
    subTitleColor: '#808080',
    milkBG: '#F1F3FB',
    redColor: 'red',
    mintGreen: '#00C97426',
    babyBlue: '#00ADF826',
    lightOrange: '#F6A72126',
    lightRed: '#FF002E26'
};

const light = {
    themeColor: '#F1F3FB',
    textColor: '#000000',
    sky: '#DE5E69',
    grayBG: 'rgba(27, 27, 27, 0.2)',
    darkBlue: '#1C2437',
    // screenBG:'#F1F3FB',
    nativThemeContainerBG: '#fff',
    borderColor: '#fff',
    noDataMsg: '#464665',

    ...commonColor,
};

const dark = {
    themeColor: '#1E1E1E',
    sky: '#831a23',
    grayBG: '#fff',
    darkBlue: '#E5E9F0',
    textColor: '#ffff',
    borderColor: 'gray',
    noDataMsg: '#fff',

    // screenBG:'#000',
    nativThemeContainerBG: '#000',
    // subTitleColor: '#fff',

    ...commonColor,
};

export default { light, dark };