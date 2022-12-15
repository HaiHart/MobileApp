import React from "react";
import { View,Text, BackHandler } from "react-native";

export default function Home({navigation, route}) {
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