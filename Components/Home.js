import React from "react";
import { View,Text, StyleSheet, TouchableOpacity, BackHandler } from "react-native";

export default function Home({navigation, info}) {
    BackHandler.addEventListener('hardwareBackPress',()=>{
        return true
    })
    return(
        <View>
            <Text>
                {JSON.stringify ({...route.params.info})} Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  