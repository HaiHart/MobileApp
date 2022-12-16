import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { RoomListItem } from "../Components/RoomListItem";

export default function MotelInfo({ navigation, route }) {
  const onPressRoom = () => {
    navigation.navigate("RoomInfo")
  }

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

  return (
    <View style={styles.background}>
      <ScrollView horizontal={false}>
        <Image
          style={{
            marginLeft: 15,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={require("../assets/motel_image.png")}
        ></Image>
        <Text style={styles.text}>Motel Info</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {`\u2022`} Location: Nguyen Hue, HCM
          </Text>
          <Text style={styles.infoText}>{`\u2022`} Number of floor: 4</Text>
          <Text style={styles.infoText}>{`\u2022`} Electricity: 3.500 đ/kWh</Text>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={{ fontSize: 16, lineHeight: 30 }}>
              {`\u2022`} Water: 18.000 đ/m
            </Text>
            <Text style={{ fontSize: 9, lineHeight: 18 }}>3</Text>
          </View>
        </View>
        <Text style={styles.text}>Room List</Text>
        <RoomListItem onPress={onPressRoom} />
        <RoomListItem onPress={onPressRoom} />
        <RoomListItem onPress={onPressRoom} />
        <RoomListItem onPress={onPressRoom} />
        <RoomListItem onPress={onPressRoom} />
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
  button: {
    width: Dimensions.get("window").width - 30,
    height: 60,
    margin: 15,
    backgroundColor: "#FF97B5",
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: "700",
    margin: 15,
  },

  infoContainer: {
    width: Dimensions.get("window").width - 30,
    height: 120,
    margin: 15,
    marginTop: 0,
    padding: 10,
    paddingLeft: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  infoText: {
    fontSize: 16,
  },
});
