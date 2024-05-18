import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';

function CustomSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
   };

  return (

      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        style={styles.switch}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    marginTop: 20,
  },
});

export default CustomSwitch;
