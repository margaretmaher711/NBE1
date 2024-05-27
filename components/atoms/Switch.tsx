// CustomSwitch.js
import React from 'react';
import { Switch, StyleSheet } from 'react-native';
import { useThemeCustome } from '../shared/theme/ThemeContext';

function CustomSwitch() {
  const { isDarkTheme, toggleTheme } = useThemeCustome(); // Access the theme and toggle function

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
