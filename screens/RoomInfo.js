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
import { CreateRoomItem, RoomListItem } from "../Components/RoomListItem";

export default function RoomInfo({ navigation, route }) {
  const onPressRoomImage = () => {};
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
        <View style={{ height: 15 }}></View>
        <Text style={styles.text}>Room Image</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={require("../assets/room1.png")}></Image>
          <Image source={require("../assets/room1.png")}></Image>
          <Image source={require("../assets/room1.png")}></Image>
        </ScrollView>
        <Text style={styles.text}>Room Info</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {`\u2022`}  Price: 3.500.000 đ/month
          </Text>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={{ fontSize: 16, lineHeight: 30 }}>{`\u2022`}  Square: 15m</Text>
            <Text style={{ fontSize: 9, lineHeight: 18 }}>2</Text>
          </View>
          <Text style={styles.infoText}>
            {`\u2022`}  Floor: 1
          </Text>
          <Text style={styles.infoText}>
            {`\u2022`}  Max People: 2
          </Text>
          <Text style={styles.infoText}>
            {`\u2022`}  Number of bedroom: 1
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>RENT</Text>
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
    fontWeight: "700",
    margin: 15,
  },
  infoContainer: {
    width: Dimensions.get("window").width - 30,
    height: 140,
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
  button: {
    width: Dimensions.get("window").width - 30,
    height: 60,
    margin: 15,
    backgroundColor: "#93D8F8",
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
