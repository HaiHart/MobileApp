import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Components/LogIn";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";
import store from './store/store';
import { Provider } from 'react-redux'


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          >
          <Stack.Screen
              name="Home"
              component = {Home}
              options={{headerShown: false}}
              initialParams={{ info: true }}
            />
          <Stack.Screen
            name="Profile"
            component = {Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
              name="EditProfile"
              component = {EditProfile}
              options={{headerShown: false}}
            />
          <Stack.Screen
            name="Login"
            component = {Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component = {Register}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
