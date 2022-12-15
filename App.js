import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Components/LogIn";
import Home from "./Components/Home";
import Register from "./Components/Register";
import ServiceManager from "./pages/ServiceManager";
import ServiceRenter from "./pages/ServiceRenter";
import Plus from "./assets/Plus.png";
import Notification from "./Components/Notification";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Logged = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Service Renter") {
            return <Image source={Plus}></Image>;
          } else if (route.name === "Service Mangager") {
            return <Image source={Plus}></Image>;
          }
        },
      })}
    >
      <Tab.Screen name="Service Renter" component={ServiceRenter}></Tab.Screen>
      <Tab.Screen
        name="Service Mangager"
        component={ServiceManager}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Logged}
          options={{ headerShown: false }}
        />
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
