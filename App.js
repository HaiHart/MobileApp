import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Components/LogIn";
import Home from "./Components/Home";
import Register from "./Components/Register";
import ServiceManager from "./screens/ServiceManager";
import ServiceRenter from "./screens/ServiceRenter";
import PlusIcon from "./assets/Plus.png";
import HomeIcon from "./assets/Home.png";
import FeatureICon from "./assets/Category.png";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile";
import store from "./store/store";
import { Provider } from "react-redux";
import EditProfile from "./Components/EditProfile";
import FeatureRenter from "./screens/FeatureRenter";
import FeatureManager from "./screens/FeatureManager";
import HomeManager from "./screens/HomeManager";
import CreateMotel from "./screens/CreateMotel";
import Motel from "./screens/Motel";
import { Foundation, AntDesign, Ionicons} from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

var role = "Renter";

const Logged = ({navigation, route}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomePage") {
            return <Foundation name="home" size={36} color="black" />;
          } else if (route.name === "Service") {
            return <AntDesign name="plussquare" size={64} color="black" />;
          } else if (route.name === "Feature") {
            return <Ionicons name="grid" size={36} color="black" />;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height:100,
          borderTopRightRadius:50,
          borderTopLeftRadius:50,
          borderColor:"#2F2D51"
        }
      })}
    >
      <Tab.Screen 
        name="HomePage" 
        component={Home}
        initialParams={{info:{...route.params.info}, navigation:navigation}}
        ></Tab.Screen>
      <Tab.Screen
        name="Service"
        component={(role = "Renter" ? ServiceRenter : ServiceManager)}
      ></Tab.Screen>
      <Tab.Screen name="Feature" component={FeatureRenter}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
          <Stack.Screen
            name="HomeManager"
            component={HomeManager}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          ></Tab.Screen>
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          ></Tab.Screen>
          <Tab.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          ></Tab.Screen>
          <Tab.Screen
            name="CreateMotel"
            component={CreateMotel}
            options={{ headerShown: false }}
          ></Tab.Screen>
          <Tab.Screen
            name="Motel"
            component={Motel}
            options={{ headerShown: false }}
          ></Tab.Screen>
          
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
