import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FinishSignup from "../pages/FinishSignup";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="ProfileScreen" component={Home} />
      <Drawer.Screen name="MyListingsScreen" component={Login} />
      <Drawer.Screen name="SellerDashBoardScreen" component={FinishSignup} />
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PasswordVerify" component={Home} />
        <Stack.Screen name="HomeShopping" component={FinishSignup} />
        <Stack.Screen name="StorePage" component={Login} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}