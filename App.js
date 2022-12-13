import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Components/LogIn";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Notification from "./Components/Notification";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component = {Notification}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Login"
        component = {Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component = {Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component = {Home}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
   </NavigationContainer>
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
