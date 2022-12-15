import { StyleSheet, Text, SafeAreaView, 
    StatusBar, View, TextInput, Button, TouchableOpacity} from 'react-native'
import {useEffect, useState} from 'react'
import { useFonts } from 'expo-font';
import { AntDesign, Ionicons, FontAwesome5} from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../store/users/userSlices';

export default function EditProfile({ navigation, route}) {
    console.log(">> Edit profile screen");
    console.log(updateProfile)

    const userinfo = useSelector((state) =>
        state.user.userinfo
    )
    const dispatch = useDispatch()

    const [name, onChangeName] = useState(userinfo.name);
    const [nickname, onChangeNickName] = useState(userinfo.nickname);
    const [number, onChangeNumber] = useState(userinfo.phonenumber);
    const [email, onChangeEmail] = useState(userinfo.email);
    const [onSubmit, handleOnSubmit] = useState(false);

    useEffect(() => {
        if (onSubmit) {
            dispatch(updateProfile(
                {
                    name: name,
                    nickname: nickname,
                    phonenumber: number,
                    email: email
                }
            ))
            navigation.navigate({
                name: "Profile", 
            });
        }
    },[onSubmit]);

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
                    onChangeText={(_name) => onChangeName(_name)}
                    value={name}
                />
            </View>
            <View style={item_styles.container}>
                <Text style={item_styles.text}>
                    Nick name
                </Text>
                <TextInput
                    style={item_styles.text_input}
                    onChangeText={onChangeNickName}
                    value={nickname}
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
            <View style={item_styles.button_container}>
                <TouchableOpacity
                    onPress={() => handleOnSubmit(true)}
                    style={item_styles.button}
                >
                    <Text>SAVE</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor:'#ffffff',
      flex:1,
      height: "100%",
      flexDirection: 'column',
    },
  });

const header_styles = StyleSheet.create({
    container: {
        marginVertical:15.5,
        width:'100%',
        height:30,
        alignItems:"center",
        flexDirection:"row",
        alignItems:'flex-start',
        width:'100%'
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
      flexDirection:'column',
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
    },

    button_container: {
        marginBottom:26,
        marginTop:26,
        paddingLeft: 45,
        paddingRight: 45,
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    button: {
        backgroundColor: "#93D8F8",
        fontWeight:'600',
        fontFamily: 'Montserrat',
        height:48,
        width: "100%",
        justifyContent:'center',
        alignItems:'center',
        color:"#2F2D51",
        borderRadius:10
    }
  });