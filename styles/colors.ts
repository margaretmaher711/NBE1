const commonColor = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#fff',
    boxActiveColor: '#007236',
    subTitleColor: '#808080',
    milkBG: '#F1F3FB',
    redColor: 'red',
};

const light = {
    themeColor: '#FFFFFF',
    textColor: '#000000',
    sky: '#DE5E69',
    grayBG: 'rgba(27, 27, 27, 0.2)',
    darkBlue: '#1C2437',
    // screenBG:'#F1F3FB',
    nativThemeContainerBG: '#fff',
    borderColor: '#fff',

    ...commonColor,
};

const dark = {
    themeColor: '#1E1E1E',
    sky: '#831a23',
    grayBG: '#fff',
    darkBlue: '#E5E9F0',
    textColor: '#ffff',
    borderColor: 'gray',

    // screenBG:'#000',
    nativThemeContainerBG: '#000',
    // subTitleColor: '#fff',

    ...commonColor,
};

export default { light, dark };