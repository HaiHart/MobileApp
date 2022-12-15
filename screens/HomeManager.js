import React from "react";
import { Icon, Avatar, Header } from "react-native-elements";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {CreateMotelItem, MotelListItem} from "../Components/MotelListItem";



export default function HomeManager({navigation, route}) {
  const onPressCreateMotel = () => {
    navigation.navigate("CreateMotel")
  }

  const onPressMotel = () => {
    navigation.navigate("Motel")
  }

  const AvatarIcon = () => {
    return (
      <Avatar
        rounded
        overlayContainerStyle={{ backgroundColor: "black" }}
        icon={{ name: "user", type: "font-awesome" }}
        onPress={() => console.log("Avatar")}
      />
    );
  };
  
  const NotiIcon = () => {
    return <Icon name="notifications" onPress={() => console.log("Noti")} />;
  };

  return (
    <View>
      <Header
        leftComponent={AvatarIcon}
        rightComponent={NotiIcon}
        containerStyle={{
          backgroundColor: "white",
          justifyContent: "center",
          alignContent: "center",
        }}
      />
      {/* <Motel Horizontal Scroll List> */}
      <View>
        <ScrollView
          style={{
            margin: 7.5,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <MotelListItem name="Hoa Hong" onPress={onPressMotel}/>
          <CreateMotelItem onPress={onPressCreateMotel}/>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 30,
    backgroundColor: "white",
  },
});
