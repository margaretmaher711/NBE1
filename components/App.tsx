// import React from 'react';
// import { View, Text, useColorScheme } from 'react-native';
// import colors from '../styles/colors';

// const App = () => {
//   const theme = useColorScheme();
//   const isDarkTheme = theme === 'dark';
//   const themeColors = isDarkTheme ? colors.dark : colors.light;

//   return (
//     <View
//       style={[
//         {
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: themeColors.themeColor,
//         },
//       ]}
//     >
//       <Text style={{ color: themeColors.textColor }}>
//         This is a demo of a custom dark/light theme using appearance.
//       </Text>
//     </View>
//   );
// };

// export default App;
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HoomeDrawer} from './organism/HomeDrawer';
import colors from '../styles/colors';
import {ThemeProvider} from './theme/ThemeContext';
const isDarkTheme = 'dark';

const themeColors = isDarkTheme ? colors.dark : colors.light;
function App() {
  const isLoggedIn = true;
  return (
    <ThemeProvider>
      <NavigationContainer independent={true}>
        {isLoggedIn ? <HoomeDrawer /> : <AuthStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
