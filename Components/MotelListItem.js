import { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useFonts } from "expo-font";

export class MotelListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={this.props.onPress}>
          <Image
            style={{
              borderRadius: 10,
            }}
            source={require("../assets/motel.png")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export class CreateMotelItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={this.props.onPress}>
          <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 0C7.16364 0 0 7.16364 0 16C0 24.8364 7.16364 32 16 32C24.8364 32 32 24.8364 32 16C32 7.16364 24.8364 0 16 0ZM17.4545 21.8182C17.4545 22.204 17.3013 22.5739 17.0285 22.8467C16.7557 23.1195 16.3858 23.2727 16 23.2727C15.6142 23.2727 15.2443 23.1195 14.9715 22.8467C14.6987 22.5739 14.5455 22.204 14.5455 21.8182V17.4545H10.1818C9.79605 17.4545 9.42608 17.3013 9.1533 17.0285C8.88052 16.7557 8.72727 16.3858 8.72727 16C8.72727 15.6142 8.88052 15.2443 9.1533 14.9715C9.42608 14.6987 9.79605 14.5455 10.1818 14.5455H14.5455V10.1818C14.5455 9.79605 14.6987 9.42608 14.9715 9.1533C15.2443 8.88052 15.6142 8.72727 16 8.72727C16.3858 8.72727 16.7557 8.88052 17.0285 9.1533C17.3013 9.42608 17.4545 9.79605 17.4545 10.1818V14.5455H21.8182C22.204 14.5455 22.5739 14.6987 22.8467 14.9715C23.1195 15.2443 23.2727 15.6142 23.2727 16C23.2727 16.3858 23.1195 16.7557 22.8467 17.0285C22.5739 17.3013 22.204 17.4545 21.8182 17.4545H17.4545V21.8182Z"
              fill="#FF97B5"
            />
          </Svg>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>New Motel</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 168,
    textAlign: "center",
    margin: 7.5,
  },
  item: {
    width: 120,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
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
  titleContainer: {
    width: 120,
    height: 18,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    // fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});
