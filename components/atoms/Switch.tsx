// CustomSwitch.js
import React from 'react';
import { Switch, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

function CustomSwitch() {
  const { isDarkTheme, toggleTheme } = useTheme(); // Access the theme and toggle function

  return (
    <Switch
      value={isDarkTheme}
      onValueChange={toggleTheme}
      style={styles.switch}
    />
  );
}

const styles = StyleSheet.create({
  switch: {
    marginTop: 20,
  },
});

export default CustomSwitch;
