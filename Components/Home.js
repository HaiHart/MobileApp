import React from "react";
import { View,Text, Button} from "react-native";

export default function Home({navigation, route}) {
    
    
    return(
        <View>
            <Text>
                {route.params.info} Home
            </Text>
            <Button onPress={() => navigation.navigate("Profile")}
                title="Profile"
            />
        </View>
    )
}