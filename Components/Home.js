import React from "react";
import { View,Text } from "react-native";

export default function Home({navigation, route}) {
    return(
        <View>
            <Text>
                {JSON.stringify ({...route.params.info})} Home
            </Text>
        </View>
    )
}