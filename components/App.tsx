import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { HoomeDrawer } from './organism/HomeDrawer/HomeDrawer';
import Splash from './pages/SplashPage';
import { ThemeProvider } from './shared/theme/ThemeContext';
import { AuthProvider, useAuth } from './shared/auth/AuthContext '; // Ensure the correct path

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true); // State to manage splash screen visibility
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false); // Hide splash screen after 2.5 seconds
    }, 2500);

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  if (isSplashVisible) {
    return (
      <ThemeProvider>
        <Splash />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <NavigationContainer independent={true}>
        {isLoggedIn ? <HoomeDrawer /> : <AuthStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
