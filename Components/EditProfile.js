import { StyleSheet, Text, SafeAreaView, 
    StatusBar, View, TextInput} from 'react-native'
import {useState} from 'react'
import { useFonts } from 'expo-font';
import { AntDesign, Ionicons, FontAwesome5} from '@expo/vector-icons';


export default function EditProfile() {

    const [name, onChangeName] = useState("Name");
    const [number, onChangeNumber] = useState(null);
    const [email, onChangeEmail] = useState("Email");

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
                    style={header_styles.icon_back}/>
                <Text style={header_styles.title} >Edit Profile</Text>
            </View>
            <View style={item_styles.container}>
                <Text style={item_styles.text}>
                    Full Name
                </Text>
                <TextInput
                    style={item_styles.text_input}
                    onChangeText={onChangeName}
                    value={name}
                />
            </View>
            <View style={item_styles.container}>
                <Text style={item_styles.text}>Phone Number</Text>
                <TextInput
                    style={item_styles.text_input}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />
            </View>
            <View style={item_styles.container}>
                <Text style={item_styles.text}>Email</Text>
                <TextInput
                    style={item_styles.text_input}
                    onChangeText={onChangeEmail}
                    value={email}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor:'#ffffff',
      flex:1
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
    icon_back: {
        position:"absolute",
        marginStart:24
    },
    icon_edit: {
        position:"absolute",
        marginEnd:24,
        end:0
    }
});

const item_styles = StyleSheet.create({
    container: {
      backgroundColor:'#ffffff',
      margin: 15,
      flexDirection:'column'
    },
    text: {
        marginBottom:15,
        fontWeight:'600',
        fontSize:16,
        fontFamily:'Montserrat'
    },
    text_input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor: "#D5D5E1",
        fontWeight:'400',
        fontFamily:'Montserrat',
        opacity: 0.5
    }
  });