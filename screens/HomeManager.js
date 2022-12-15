import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { CreateMotelItem, MotelListItem } from "../Components/MotelListItem";
import ProfielIcon from "../assets/Profile.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";

export default function HomeManager({ navigation, route }) {
  const onPressCreateMotel = () => {
    navigation.navigate("CreateMotel");
  };

  const onPressMotel = () => {
    navigation.navigate("Motel");
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeaderIcon}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.avatar}>
          <Image source={ProfielIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.bell}>
          <Octicons name="bell-fill" size={30} color="#2F2D51" />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          style={{
            margin: 7.5,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <MotelListItem name="Hoa Hong" onPress={onPressMotel} />
          <CreateMotelItem onPress={onPressCreateMotel} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "left",
    width: "100%",
    height: "100%",
  },
  background: {
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 30,
    backgroundColor: "white",
  },
  HeaderIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:"100%",
    marginHorizontal:5,
    marginVertical:10,
  },
  avatar:{
    marginLeft:20
  },
  bell:{
    marginRight:40
  }
});
