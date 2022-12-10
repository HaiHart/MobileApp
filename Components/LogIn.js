import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import * as FileSystem from "expo-file-system";
import PhoneInput from "react-native-phone-input";

export default function Login({ navigation, route }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const OnSubmit = () => {
    if (toggleCheckBox) {
      let fileUri = FileSystem.documentDirectory + "text.txt";

      FileSystem.writeAsStringAsync(fileUri, `${phone}:${pass}`, {
        encoding: FileSystem.EncodingType.UTF8,
      })
        .then(() => {
          console.log(phone);
          navigation.navigate("Home", { info: "yes" });
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
              error.message
          );
        });
    }
    if (phone === "113" || pass == "113") {
      console.log("In");
      navigation.navigate("Home", { info: "yes" });
    }
    navigation.navigate("Home", { info: pass + ":" + phone });
  };

  useEffect(() => {
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
  }, []);

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
            marginBottom: 90,
          }}
        >
          <Text style={styles.text}>Sign In</Text>
        </View>
        <View>
          <PhoneInput
            inputStyle={{
              boxSizing: "border-box",
              width: 300,
              height: 48,
              marginBottom: 5,
              backgroundColor: "#FFFFFF",
              border: "5px solid #D5D5E1",
              borderRadius: 10,
            }}
            containerStyle={styles.field}
            style={styles.field}
            textProps={{
              placeholder: "Phone Number",
            }}
            onChangePhoneNumber={setPhone}
            value={phone}
          />
          <TextInput
            style={styles.field}
            placeholder="Password"
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
                value={toggleCheckBox}
                onValueChange={setToggleCheckBox}
              />
              <Text
                style={{
                  paddingLeft: 12,
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
                width: 70,
                height: 22,
                fontFtyle: "normal",
                fontWeight: "700",
                fontSize: 18,
                lineHeight: 22,
                color: "#FFFFFF",
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
            // font-family: 'Montserrat';
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
    width: 280,
    color: "2F2D51",
    height: 48,
    backgroundColor: "#2F2D51",
    fontSize: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    // fontFamily: "Montserrat",
    fontFtyle: "normal",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 32,
    color: "#000000",
  },
  field: {
    boxSizing: "border-box",
    width: 300,
    height: 48,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    border: "5px solid #D5D5E1",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
