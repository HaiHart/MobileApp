import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Plus from "./assets/Plus.png";
import ServiceRenter from "./pages/ServiceRenter";
import ServiceManager from "./pages/ServiceManager";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen
          name="Service Renter"
          component={ServiceRenter}
        ></Tab.Screen>
        <Tab.Screen
          name="Service Mangager"
          component={ServiceManager}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default App;
