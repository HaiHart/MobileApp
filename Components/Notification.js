import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
const DATA = [
  {
    title: "YESTERDAY",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "13/12/2022",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "10/11/2022",
    data: ["Water", "Coke", "Beer"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Notification() {
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={header_styles.container}>
                <AntDesign 
                    name="left" size={24} color="black" 
                    style={header_styles.icon}/>
                <Text style={header_styles.title} >Notitification</Text>
            </View>
            <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
            stickySectionHeadersEnabled={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    fontFamily:'Montserrat'
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontSize: 16,
    padding: 15,
    backgroundColor: "#D5D5E1",
    color: '#000000',
    height: 50,
  },
  title: {
    fontSize: 14,
  },
});

const header_styles = StyleSheet.create({
    container: {
        marginVertical:15.5,
        width:'100%',
        height:30,
        alignItems:"center",
        flexDirection:"row"
    },
    title: {
        fontSize: 24,
        fontFamily:'Montserrat',
        position:"absolute",
        width:'100%',
        textAlign:"center"
    },
    icon: {
        position:"absolute",
        marginStart:8
    }
})