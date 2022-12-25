import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler
} from "react-native";
import CheckBox from "expo-checkbox";
import * as FileSystem from "expo-file-system";
import { Role } from "./Register";
import PhoneInput from "react-native-phone-input";
import { useSelector, useDispatch} from "react-redux";
import { updateProfile } from "../store/userSlices";
import axios from "axios";
import { initNotification } from "../store/notificationSlices";
import { initAccounts } from "../store/accountSlices";
import { initRooms } from "../store/roomsSlices";
import { initServices } from "../store/serviceSlices";

const fetchData = () => {
  const url = "https://1cf2-2402-800-6319-fdcc-89fa-d526-d794-cc94.ap.ngrok.io"
  axios({
    method: 'get',
    url: `${url}/api/v1/notifications`,
  }).then(function (response) {
    console.log("Notifications");
    console.log(response.data);
    dispatch(
      initNotification(response.data)
    )
  });
  
  axios({
    method: 'get',
    url: `${url}/api/v1/users`,
  }).then(function (response) {
    console.log("Accounts");
    console.log(response.data);
    dispatch(
      initAccounts(response.data)
    )
  });

  axios({
    method: 'get',
    url: `${url}/api/v1/rooms`,
  }).then(function (response) {
    console.log("Rooms");
    console.log(response.data);
      dispatch(
        initRooms(response.data)
      )
    });

    axios({
      method: 'get',
      url: `${url}/api/v1/services`,
    }).then(function (response) {
      console.log("services");
      console.log(response.data);
      dispatch(
        initServices(response.data)
      )
    });
}

export default function Login({ navigation, route }) {
  


  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");
  const [chose, setChose] = useState(false);
  const [hasFetchData, setHasFetchData] = useState(false);
  
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts.accounts);

  BackHandler.addEventListener("hardwareBackPress", function () {
    if (chose) {
      setChose(false);
      return true;
    }
  });

  const OnSubmit = () => {
    let user = null
    for (let i = 0; i < accounts.length; ++i) {
      if (phone.localeCompare(accounts[i].phone) == 0) {
        user = accounts[i];
        break;
      }
    }

    if (user != null) {
      dispatch(
        updateProfile({
          name: user.name,
          nickname: user.nickname,
          phonenumber: user.phone,
          email: user.email,
        })
      )
      navigation.navigate("HomeManager", { info: "yes"});
    }
    else {
      alert("Your account is not exists")
    }
  };

  useEffect(() => {
    if (!hasFetchData) {
      console.log("Fetch data")
      //fetchData();
      setHasFetchData(true);
    }
    let fileUri = FileSystem.documentDirectory + "text.txt";
    FileSystem.getInfoAsync(fileUri)
      .then((tmp) => {
        if (tmp.exists) {
          console.log(tmp);
          FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.UTF8,
          })
            .then((answer) => {
              console.log(answer);
              const input = answer.split(":");
              setPhone(input[0]);
              setPass(input[1]);
            })
            .catch(function (error) {
              console.log(
                "There has been a problem with your fetch operation: " +
                  error.message
              );
            });
        }
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }, [hasFetchData]);

  if (chose) {
    return <Role 
              role={role} 
              setRole={setRole} 
              navigation={navigation} 
              phone={phone} 
              name={name} />;
  }

  console.log(">> We return")
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            width: 280,
            marginBottom: 90,
          }}
        >
          <Text style={styles.text}>Sign In</Text>
        </View>
        <View>
          <TextInput
            style={styles.field}
            placeholder="Phone Number"
            placeholderTextColor='#D5D5E1'
            onChangeText={setPhone}
            value={phone}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.field}
            placeholder="Password"
            placeholderTextColor='#D5D5E1'
            onChangeText={setPass}
            secureTextEntry={true}
            value={pass}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
                width: 280,
                marginTop: 5,
                marginBottom: 20,
              }}
            >
              <CheckBox
                style={{
                  width:16,
                  height:16,
                  borderWidth: 1,
                  borderColor: 'D5D5E1',
                }}
                value={toggleCheckBox}
                onValueChange={setToggleCheckBox}
              />
              <Text
                style={{
                  paddingLeft: 12,
                  fontSize: 12,
                }}
              >
                Remember me
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            title="Sign in"
            onPress={() => OnSubmit()}
          >
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: 18,
                lineHeight: 22,
                color: "#fff",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            width: 264,
            height: 20,
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 16,
            lineHeight: 20,
            textAlign: "center",
            textDecorationLine: "underline",
            color: "#2F2D51",
            marginTop: 50,
          }}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Don't have an account? Sign up
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 48,
    backgroundColor: "#2F2D51",
    fontSize: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 32,
    color: "#000000",
  },
  field: {
    width: 300,
    height: 48,
    marginBottom: 10,
    borderColor: '#D5D5E1',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
