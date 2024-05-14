import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContactText from '../atoms/contacttxt';

const SignupTitles: React.FC<{title: string; subtitle: string}> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#1C2437',
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
export default SignupTitles;
