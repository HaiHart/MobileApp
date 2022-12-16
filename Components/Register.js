import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import CheckBox from "expo-checkbox";
import * as FileSystem from "expo-file-system";
import ReactNativePhoneInput from "react-native-phone-input";

const role_asset = require("../assets/role_asset.png");
const renter = require("../assets/renter.png");
const mamanger = require("../assets/manager.png");

export default function Register({ navigation, route }) {
  const [info, setInfo] = useState({
    name: String,
    phone: String,
    email: String,
    pass: String,
    consent: false,
  });

  const [role, setRole] = useState("");

  const [chose, setChose] = useState(false);

  const OnSubmit = () => {
    if (
      info.name.length < 1 ||
      info.phone.length < 1 ||
      info.pass.length < 1 ||
      !info.consent
    ) {
      return;
    }
    let fileUri = FileSystem.documentDirectory + "Account.txt";
    FileSystem.getInfoAsync(fileUri).then((tmp) => {
      if (tmp.exists) {
        console.log(tmp);
        FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.UTF8,
        })
          .then((answer) => {
            console.log(answer);
            const input = JSON.parse(answer);
            if (input[info.phone] !== undefined) {
              alert("phone is registerd");
              setChose(false);
              return;
            } else {
              setChose(true);
              console.log(">> Register: " + info);
              input[info.phone] = {
                name: info.name,
                pass: info.pass,
                email: info.email ? info.email : "",
                nickname: "",
              };

              FileSystem.writeAsStringAsync(fileUri, JSON.stringify(input), {
                encoding: FileSystem.EncodingType.UTF8,
              })
                .then(() => {
                  console.log(phone);
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
              "There has been a problem with your fetch operation: " +
                error.message
            );
          });
      } else {
        const input = {};
        input[info.phone] = {
          name: info.name,
          pass: info.pass,
          email: info.email,
        };
        FileSystem.writeAsStringAsync(fileUri, JSON.stringify(input), {
          encoding: FileSystem.EncodingType.UTF8,
        })
          .then(() => {
            console.log(phone);
          })
          .catch(function (error) {
            console.log(
              "There has been a problem with your fetch operation: " +
                error.message
            );
          });
        setChose(true);
      }
    });
  };

  BackHandler.addEventListener("hardwareBackPress", function () {
    if (chose) {
      setChose(false);
      return true;
    }
  });

  if (chose) {
    return (
      <Role
        role={role}
        setRole={setRole}
        navigation={navigation}
        name={info.name}
        phone={info.phone}
      />
    );
  }

  return (
    <Filling
      info={info}
      setInfo={setInfo}
      OnSubmit={OnSubmit}
      navigation={navigation}
    />
  );
}

export function Role({ role, setRole, navigation, name, phone }) {
  console.log("Role, name, phone " + role + ", " + name + ", " + phone);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <View>
        <Image source={role_asset} style={styles.img} />
      </View>
      <View
        style={{
          // backgroundColor:"#002658",
          width: 280,
          marginBottom: 15,
          marginTop: 50,
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Text style={styles.text}>Choose Your Role</Text>
        <View
          style={{
            width: 280,
            paddingTop: 15,
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          <Text style={styles.addOnText}>We Need To Verify Your Role</Text>
          <Text style={styles.addOnText}>(Required)</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <Box
          uri={renter}
          role={"Renter"}
          color={"#93D8F8"}
          sel={role}
          setRole={setRole}
        />
        <Box
          uri={mamanger}
          role={"Manager"}
          color={"#FF97B5"}
          sel={role}
          setRole={setRole}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          height: 48,
          backgroundColor: "#2F2D51",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
        onPress={() => {
          console.log(name, phone, role);
          navigation.navigate("HomeManager", {
            info: { name: name, phone: phone, role: role },
          });
        }}
      >
        <Text
          style={{
            width: 70,
            height: 22,
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 18,
            lineHeight: 22,
            color: "#FFFFFF",
          }}
        >
          Choose
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Box({ uri, role, color, sel, setRole }) {
  return (
    <TouchableOpacity
      onPress={() => setRole(role)}
      style={{
        ...styles.box,
        backgroundColor: role === sel ? color : "#D5D5E1",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        justifyContent: "center",
        margin: 5,
      }}
    >
      <Image source={uri} style={styles.roleImg} />
      <Text style={styles.roleTxt}>{role}</Text>
    </TouchableOpacity>
  );
}

function Filling({ info, setInfo, OnSubmit, navigation }) {
  console.log("info " + info);
  const [cor, setCor] = useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "FFFFFF",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            width: 280,
            marginBottom: 70,
          }}
        >
          <Text style={styles.text}>Create New Account</Text>
        </View>
        <View>
          <TextInput
            style={styles.field}
            placeholder="Name"
            placeholderTextColor="#D5D5E1"
            onChangeText={(e) => {
              setInfo((pre) => {
                return { ...pre, name: e };
              });
            }}
            value={info.name}
          />
          <TextInput
            style={styles.field}
            placeholder="Phone Number"
            placeholderTextColor="#D5D5E1"
            keyboardType="numeric"
            onChangeText={(e) => {
              setInfo((pre) => {
                return { ...pre, phone: e };
              });
            }}
            value={info.phone}
          />
          <TextInput
            style={styles.field}
            placeholder="Email"
            placeholderTextColor="#D5D5E1"
            onChangeText={(e) => {
              setInfo((pre) => {
                return { ...pre, email: e };
              });
            }}
            value={info.email}
          />
          <TextInput
            style={styles.field}
            placeholder="Password"
            placeholderTextColor="#D5D5E1"
            onChangeText={(e) => {
              setInfo((pre) => {
                return { ...pre, pass: e };
              });
            }}
            secureTextEntry={true}
            value={info.pass}
          />
          <TextInput
            style={{
              ...styles.field,
              color: cor === info.pass ? "black" : "red",
            }}
            placeholder="Confirm Password"
            placeholderTextColor="#D5D5E1"
            onChangeText={setCor}
            value={cor}
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
                value={info.consent}
                onValueChange={(e) => {
                  setInfo((pre) => {
                    return { ...pre, consent: e };
                  });
                }}
              />
              <Text
                style={{
                  paddingLeft: 12,
                  fontSize: 12,
                }}
              >
                I agree with Term & Condition
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            title="Create Account"
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
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            width: 275,
            height: 20,
            position: "relative",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 16,
            lineHeight: 20,
            textAlign: "center",
            textDecorationLine: "underline",
            color: "#2F2D51",
            marginTop: 30,
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Already have an account? Sign in
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
    borderColor: "#D5D5E1",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },

  container: {
    flex: 1,
    backgroundColor: "FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginTop: 50,
    left: "0%",
    right: "10.83%",
    top: "18.51%",
    bottom: "18.06%",
    width: 350,
    resizeMode: "stretch",
  },
  addOnText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
  box: {
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 20,
    width: 150,
    height: 150,
  },
  roleTxt: {
    width: 63,
    height: 22,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22,
    color: "#2F2D51",
    textAlign: "center",
  },
  roleImg: {
    resizeMode: "stretch",
  },
});
