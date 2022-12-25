import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import {useDispatch } from "react-redux";
import {addRoom} from "../store/roomsSlices"

export default function CreateRoom({ navigation, route }) {
  const dispatch = useDispatch();

  const backIcon = () => {
    return (
      <Svg width="10" height="18" viewBox="0 0 10 18" fill="none">
        <Path
          d="M9 1L1 9L9 17"
          stroke="#2F2D51"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  };

  const createRoom = () => {
    dispatch(
      addRoom({
          ownerPhone: "000000000",
          renters: [],
          services: []
        })
    )
    navigation.goBack();
  }

  return (
    <View style={styles.background}>
      <ScrollView horizontal={false}>
        <View style={{ height: 15 }}></View>
        <Text style={styles.text}>Room Name *</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Type here..."
          placeholderTextColor="#D5D5E1"
          cursorColor={"#FF97B5"}
        ></TextInput>
        <Text style={styles.text}>Image*</Text>
        <TouchableOpacity style={styles.inputImage}>
          <Svg width="34" height="40" viewBox="0 0 34 40" fill="none">
            <Path
              d="M19.5049 0C20 0 20.4158 0.42 20.4158 0.92V7.36C20.4158 11.02 23.3861 14.02 27.0297 14.04C28.5149 14.04 29.703 14.06 30.6139 14.06C31.2277 14.06 32.2376 14.04 33.0891 14.04C33.5842 14.04 34 14.44 34 14.94V31.02C34 35.98 30 40 25.0891 40H9.34653C4.17822 40 0 35.78 0 30.58V9.02C0 4.06 3.9802 0 8.93069 0H19.5049ZM16.2772 13.48C16.0792 13.48 15.8812 13.52 15.703 13.6C15.5248 13.68 15.3663 13.78 15.2277 13.92L9.56436 19.68C8.9901 20.26 8.9901 21.2 9.56436 21.78C10.1386 22.36 11.0693 22.36 11.6436 21.78L14.7921 18.58V28.24C14.7921 29.06 15.4455 29.72 16.2772 29.72C17.0891 29.72 17.7426 29.06 17.7426 28.24V18.58L20.8911 21.78C21.4653 22.36 22.396 22.36 22.9703 21.78C23.5644 21.2 23.5644 20.26 22.9901 19.68L17.3069 13.92C17.1683 13.78 17.0099 13.68 16.8317 13.6C16.6535 13.52 16.4752 13.48 16.2772 13.48ZM23.2905 1.812C23.2905 0.95 24.3242 0.522 24.9162 1.144C27.0588 3.392 30.7994 7.322 32.8905 9.518C33.4667 10.124 33.043 11.13 32.2093 11.132C30.5816 11.138 28.6648 11.132 27.2846 11.118C25.0945 11.118 23.2905 9.296 23.2905 7.084V1.812Z"
              fill="#D5D5E1"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.text}>Floor *</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Type here..."
          placeholderTextColor="#D5D5E1"
          cursorColor={"#FF97B5"}
        ></TextInput>
        <Text style={styles.text}>Square *</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Type here..."
          placeholderTextColor="#D5D5E1"
          cursorColor={"#FF97B5"}
        ></TextInput>
        <Text style={styles.text}>Price *</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Type here..."
          placeholderTextColor="#D5D5E1"
          cursorColor={"#FF97B5"}
        ></TextInput>
        <Text style={styles.text}>Max People *</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Type here..."
          placeholderTextColor="#D5D5E1"
          cursorColor={"#FF97B5"}
        ></TextInput>
        <Text style={styles.text}>Number Of Bedroom *</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Type here..."
          placeholderTextColor="#D5D5E1"
          cursorColor={"#FF97B5"}
        ></TextInput>
        <TouchableOpacity 
          style={styles.button}
          onPress={createRoom}
          >
          <Text style={styles.buttonText}>CREATE ROOM</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 15,
  },
  inputText: {
    height: 48,
    margin: 15,
    borderWidth: 1,
    borderColor: "#D5D5E1",
    borderRadius: 10,
    padding: 10,
  },
  inputImage: {
    width: Dimensions.get("window").width - 30,
    height: 150,
    margin: 15,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "#D5D5E1",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: Dimensions.get("window").width - 30,
    height: 60,
    margin: 15,
    backgroundColor: "#FF97B5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2F2D51",
  },
});
