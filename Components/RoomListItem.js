import { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export class RoomListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.containerRoom}
        onPress={this.props.onPress}
      >
        <Image
          style={{
            flex: 1,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={require("../assets/room.png")}
        ></Image>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{fontSize: 16, marginLeft: 15, marginBottom: 20}}>Mini for 2 peoples</Text>
          <Text style={{fontSize: 12, fontWeight: '900', color: '#FF97B5', marginLeft: 15}}>R.01</Text>
          <View style={{ flexDirection: "row", alignItems: "flex-start", marginLeft: 15}}>
            <Text style={{ fontSize: 12, lineHeight: 20 }}>Square: 15m</Text>
            <Text style={{ fontSize: 6, lineHeight: 10 }}>2</Text>
          </View>
          <Text style={{fontSize: 12, marginLeft: 15, marginTop: 5}}>Floor: 1</Text>
          <Text style={{fontSize: 12, marginLeft: 15, marginTop: 5}}>Price: 3.000.000 VND</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export class CreateRoomItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.containerCreateRoom}
        onPress={this.props.onPress}
      >
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 0C7.16364 0 0 7.16364 0 16C0 24.8364 7.16364 32 16 32C24.8364 32 32 24.8364 32 16C32 7.16364 24.8364 0 16 0ZM17.4545 21.8182C17.4545 22.204 17.3013 22.5739 17.0285 22.8467C16.7557 23.1195 16.3858 23.2727 16 23.2727C15.6142 23.2727 15.2443 23.1195 14.9715 22.8467C14.6987 22.5739 14.5455 22.204 14.5455 21.8182V17.4545H10.1818C9.79605 17.4545 9.42608 17.3013 9.1533 17.0285C8.88052 16.7557 8.72727 16.3858 8.72727 16C8.72727 15.6142 8.88052 15.2443 9.1533 14.9715C9.42608 14.6987 9.79605 14.5455 10.1818 14.5455H14.5455V10.1818C14.5455 9.79605 14.6987 9.42608 14.9715 9.1533C15.2443 8.88052 15.6142 8.72727 16 8.72727C16.3858 8.72727 16.7557 8.88052 17.0285 9.1533C17.3013 9.42608 17.4545 9.79605 17.4545 10.1818V14.5455H21.8182C22.204 14.5455 22.5739 14.6987 22.8467 14.9715C23.1195 15.2443 23.2727 15.6142 23.2727 16C23.2727 16.3858 23.1195 16.7557 22.8467 17.0285C22.5739 17.3013 22.204 17.4545 21.8182 17.4545H17.4545V21.8182Z"
            fill="#FF97B5"
          />
        </Svg>
        <Text style={styles.titleText}>New Room</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerCreateRoom: {
    width: Dimensions.get("window").width - 30,
    height: 70,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 7.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
  containerRoom: {
    width: Dimensions.get("window").width - 30,
    height: 150,
    marginHorizontal: 15,
    marginVertical: 7.5,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
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
  titleText: {
    fontSize: 12,
  },
});
