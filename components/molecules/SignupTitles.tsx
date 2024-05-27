import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContactText from '../atoms/contacttxt';
import {useTheme} from '../shared/theme/ThemeContext';

const SignupTitles: React.FC<{title: string; subtitle: string}> = ({
  title,
  subtitle,
}) => {
  const {themeColors} = useTheme(); // Access the theme colors

  const styles = StyleSheet.create({
    title: {
      color: themeColors.darkBlue,
      fontSize: 20,
      fontWeight: '700',
      // marginHorizontal: 30,
      marginTop: 15,
    },
    subTitle: {
      color: '#B7B7B7',
      fontSize: 16,
      // marginHorizontal: 30,
      marginTop: 5,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </>
  );
};

export default SignupTitles;
