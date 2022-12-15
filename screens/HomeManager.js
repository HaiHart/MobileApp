import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { CreateMotelItem, MotelListItem } from "../Components/MotelListItem";
import ProfielIcon from "../assets/Profile.png";
import { Octicons } from "@expo/vector-icons";

export default function HomeManager({ navigation, route }) {
  const {info} = route.params; //{name: 'hạ', phone: '+555', role: 'Renter'}
  console.log(info)
  
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
    width: "100%",
    height: "100%",
  },
  background: {
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 30,
    backgroundColor: "#ffffff",
  },
  HeaderIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:"100%",
    marginHorizontal:5,
    marginVertical:10,
    marginTop:50,
  },
  avatar:{
    marginLeft:20
  },
  bell:{
    marginRight:40
  }
});
