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
import { CreateRoomItem, RoomListItem } from "../Components/RoomListItem";

export default function Motel({ navigation, route }) {
  const onPressRoom = () => {
    navigation.navigate("Room")
  }

  const onPressCreateRoom = () => {
    navigation.navigate("CreateRoom")
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
    )
  }

  const editItem = () => {
    return (
      <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <Path
        d="M16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3043 0.75 14.863 0.75C15.421 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.571 18.275 4.113C18.2917 4.65433 18.1083 5.11667 17.725 5.5L16.3 6.925ZM1 19C0.716667 19 0.479333 18.904 0.288 18.712C0.0960001 18.5207 0 18.2833 0 18V15.175C0 15.0417 0.025 14.9127 0.075 14.788C0.125 14.6627 0.2 14.55 0.3 14.45L10.6 4.15L14.85 8.4L4.55 18.7C4.45 18.8 4.33767 18.875 4.213 18.925C4.08767 18.975 3.95833 19 3.825 19H1Z"
        fill="#2F2D51"
      />
      </Svg>
    )
  }

  return (
    <View style={styles.background}>
      <ScrollView
        horizontal={false}
      >
        <CreateRoomItem onPress={onPressCreateRoom} />
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
});
