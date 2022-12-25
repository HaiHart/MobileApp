import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Components/LogIn";
import Register from "./Components/Register";
import ServiceManager from "./screens/ServiceManager";
import ServiceRenter from "./screens/ServiceRenter";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile";
import store from './store/store'
import { Provider } from "react-redux";
import EditProfile from "./Components/EditProfile";
import FeatureRenter from "./screens/FeatureRenter";
import FeatureManager from "./screens/FeatureManager";
import HomeManager from "./screens/HomeManager";
import HomeRenter from "./screens/HomeRenter"
import CreateMotel from "./screens/CreateMotel";
import Motel from "./screens/Motel";
import { Foundation, AntDesign, Ionicons} from '@expo/vector-icons'; 
import EditMotel from "./screens/EditMotel";
import CreateRoom from "./screens/CreateRoom";
import Room from "./screens/Room";
import EditRoom from "./screens/EditRoom";
import SearchResult from "./screens/SearchResult";
import MotelInfo from "./screens/MotelInfo";
import RoomInfo from "./screens/RoomInfo";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

var role = "Renter";

const Logged = ({navigation, _route}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          console.log(route.name)
          if (route.name === "HomeManagerOfficial") {
            return <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(
                          "HomeManager", 
                          { info: "yes" });
                      }}>
                        <Svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M9.95217 28.16V23.5734C9.95217 22.4026 10.9083 21.4534 12.0877 21.4534H16.3989C16.9653 21.4534 17.5085 21.6768 17.9089 22.0744C18.3094 22.4719 18.5344 23.0112 18.5344 23.5734V28.16C18.5308 28.6468 18.7231 29.1148 19.0686 29.4603C19.414 29.8057 19.8841 30 20.3744 30H23.3157C24.6895 30.0035 26.0081 29.4642 26.9808 28.5012C27.9534 27.5381 28.5 26.2305 28.5 24.8667V11.8003C28.5 10.6987 28.0081 9.65376 27.1569 8.947L17.151 1.0138C15.4105 -0.377157 12.9167 -0.332247 11.2281 1.12047L1.45052 8.947C0.559111 9.63292 0.0263284 10.6809 0 11.8003V24.8534C0 27.6958 2.32107 30 5.18426 30H8.05844C9.07684 30 9.9045 29.1843 9.91187 28.1733L9.95217 28.16Z" fill="#2F2D51"/>
                        </Svg>
                      </TouchableOpacity>;
          } else if (route.name === "Service") {
            return <TouchableOpacity 
                      onPress={() => {
                        navigation.navigate(
                          "Service", 
                        );
                      }}>

<Svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M46.912 0C57.792 0 64 6.144 64 17.056V46.944C64 57.792 57.824 64 46.944 64H17.056C6.144 64 0 57.792 0 46.944V17.056C0 6.144 6.144 0 17.056 0H46.912ZM31.968 17.632C30.496 17.632 29.312 18.816 29.312 20.288V29.312H20.256C19.552 29.312 18.88 29.6 18.368 30.08C17.888 30.592 17.6 31.2608 17.6 31.968C17.6 33.44 18.784 34.624 20.256 34.656H29.312V43.712C29.312 45.184 30.496 46.368 31.968 46.368C33.44 46.368 34.624 45.184 34.624 43.712V34.656H43.712C45.184 34.624 46.368 33.44 46.368 31.968C46.368 30.496 45.184 29.312 43.712 29.312H34.624V20.288C34.624 18.816 33.44 17.632 31.968 17.632Z" fill="#2F2D51"/>
</Svg>

                      </TouchableOpacity>;
          } else if (route.name === "Feature") {
            return <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(
                          "Feature", 
                        );
                      }}>
                        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M8.87996 17.2048C10.9949 17.2048 12.6899 18.9163 12.6899 21.0464V26.1599C12.6899 28.275 10.9949 30 8.87996 30H3.80998C1.70999 30 0 28.275 0 26.1599V21.0464C0 18.9163 1.70999 17.2048 3.80998 17.2048H8.87996ZM26.19 17.2048C28.29 17.2048 30 18.9163 30 21.0464V26.1599C30 28.275 28.29 30 26.19 30H21.12C19.0051 30 17.3101 28.275 17.3101 26.1599V21.0464C17.3101 18.9163 19.0051 17.2048 21.12 17.2048H26.19ZM8.87996 0C10.9949 0 12.6899 1.72503 12.6899 3.84156V8.95513C12.6899 11.0852 10.9949 12.7952 8.87996 12.7952H3.80998C1.70999 12.7952 0 11.0852 0 8.95513V3.84156C0 1.72503 1.70999 0 3.80998 0H8.87996ZM26.19 0C28.29 0 30 1.72503 30 3.84156V8.95513C30 11.0852 28.29 12.7952 26.19 12.7952H21.12C19.0051 12.7952 17.3101 11.0852 17.3101 8.95513V3.84156C17.3101 1.72503 19.0051 0 21.12 0H26.19Z" fill="#2F2D51"/>
                        </Svg>
                      </TouchableOpacity>
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderColor: "#2F2D51",
        },
        contentStyle: {
          backgroundColor: '#fff'
        }
      })}
    >
      <Tab.Screen 
        name="HomeManagerOfficial" 
        component={HomeManager}
        options={{ headerShown: false }}
        ></Tab.Screen>
      <Tab.Screen
        name="Service"
        component={ServiceManager}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Feature" 
        component={FeatureManager} 
        options={{ headerShown: false }}
        initialParams={{info: "yes"}}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            contentStyle: {
              backgroundColor: '#fff'
            }
          }}
        >
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
            name="HomeManager"
            component={Logged}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="HomeManagerOfficial"  
            component={HomeManager}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="HomeRenter"  
            component={HomeRenter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Profile"
            component={Profile}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="CreateMotel"
            component={CreateMotel}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Motel"
            component={Motel}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="EditMotel"
            component={EditMotel}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="CreateRoom"
            component={CreateRoom}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Room"
            component={Room}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="EditRoom"
            component={EditRoom}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="SearchResult"
            component={SearchResult}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="MotelInfo"
            component={MotelInfo}
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="RoomInfo"
            component={RoomInfo}
            // options={{ headerShown: false }}
            />
            <Stack.Screen
            
            name="Service"
            component={ServiceManager}
            // options={{ headerShown: false }}
            />
          <Stack.Screen 
            name="Feature" 
            component={FeatureManager} 
            // options={{ headerShown: false }}
            initialParams={{info: "yes"}}
          ></Stack.Screen>
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
